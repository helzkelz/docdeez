const functions = require('firebase-functions');
const fetch = require('node-fetch');
const FormData = require('form-data');

exports.transcribeAndDrop = functions.https.onRequest(async (req, res) => {
  const form = new FormData();
  form.append('file', req.body.file); // Audio blob from frontend
  form.append('model', 'whisper-1');

  // Transcribe with Whisper
  const whisperRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${functions.config().openai.key}` },
    body: form,
  });
  const { text } = await whisperRes.json();

  // Trigger Bethy
  await fetch('https://your-bethy-webhook.com/bethyUniversalWebhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${functions.config().bethy.key}`,
    },
    body: JSON.stringify({
      donor: { email: 'discord-user@example.com' }, // Pull from Discord SDK context
      inputType: 'voice',
      payload: { message: text },
    }),
  });

  res.json({ transcript: text });
});