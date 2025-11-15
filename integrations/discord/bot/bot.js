const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, EndBehaviorType, getVoiceConnection } = require('@discordjs/voice');
const { createWriteStream } = require('fs');
const prism = require('prism-media');
const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});

client.on('ready', () => console.log('Bethy Bot ready'));

client.on('messageCreate', async (message) => {
  if (message.content === '!join') {
    const channel = message.member.voice.channel;
    if (!channel) return message.reply('Join a VC first!');

    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });

    const receiver = connection.receiver;
    const userId = message.author.id;

    const opusStream = receiver.subscribe(userId, {
      end: { behavior: EndBehaviorType.AfterSilence, duration: 1000 },
    });
    const pcmStream = opusStream.pipe(new prism.opus.Decoder({ rate: 48000, channels: 2, frameSize: 960 }));
    const output = createWriteStream(`./recordings/${userId}.pcm`);
    pcmStream.pipe(output);

    output.on('finish', async () => {
      // Convert PCM to MP3
      const { exec } = require('child_process');
      exec(`ffmpeg -f s16le -ar 48000 -ac 2 -i ./recordings/${userId}.pcm ./final/${userId}.mp3`, async () => {
        const transcript = await transcribeWithWhisper(`./final/${userId}.mp3`);
        await callBethy(transcript, message.author.email || 'discord-user@example.com');
        message.reply(`Ritual transcribed: "${transcript}" — Drop dispatched!`);
      });
    });
  }
});

async function transcribeWithWhisper(filepath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filepath));
  form.append('model', 'whisper-1');

  const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: form,
  });
  const { text } = await res.json();
  return text;
}

async function callBethy(text, email) {
  return fetch('https://your-bethy-webhook.com/bethyUniversalWebhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.BETHY_API_KEY}`,
    },
    body: JSON.stringify({
      donor: { email },
      inputType: 'voice',
      payload: { message: text },
    }),
  });
}

client.login(process.env.DISCORD_TOKEN);