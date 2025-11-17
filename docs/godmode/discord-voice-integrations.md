# Discord Voice Integrations

This page documents the Discord integrations for voice-based ritual triggers in the Godmode system, using OpenAI's Whisper API for transcription and Bethy's universal webhook for ritual processing.

## Overview

Two separate implementations are provided:

1. **Embedded Discord Activity**: A browser-based React app that runs inside Discord voice channels.
2. **Discord Bot**: A server-side bot that joins voice channels and processes audio.

Both integrate with the Bethy orchestration system for emotional analysis and ritual drop delivery.

## Embedded Discord Activity

Located in `/integrations/discord/activity/`.

### Setup

1. Install dependencies: `npm install`
2. Build the app: `npm run build`
3. Host the `build/` directory on a HTTPS server (e.g., Vercel, Netlify).
4. Register as a Discord Activity in the Developer Portal.
5. Deploy the Firebase function in `/functions/transcribeAndDrop.js` for backend processing.

### Usage

- Users join a voice channel and launch the activity.
- Click "Speak Your Ritual" to record 5 seconds of audio.
- Audio is transcribed via Whisper and sent to Bethy for ritual processing.

## Discord Bot

Located in `/integrations/discord/bot/`.

### Setup

1. Install dependencies: `npm install`
2. Set environment variables: `DISCORD_TOKEN`, `OPENAI_API_KEY`, `BETHY_API_KEY`
3. Run: `node bot.js`
4. Host on a server (e.g., Railway, Heroku) for 24/7 operation.

### Usage

- Invite the bot to your server.
- In a text channel, type `!join` while in a voice channel.
- Speak for a few seconds, then the bot will transcribe and trigger Bethy.
- Receives confirmation in the text channel.

## Integration with Bethy

Both implementations call the `/bethyUniversalWebhook` endpoint with:

```json
{
  "donor": { "email": "user@example.com" },
  "inputType": "voice",
  "payload": { "message": "transcribed text" }
}
```

This triggers the full Godmode ritual loop: tone analysis, saboteur detection, drop generation, and delivery.

## References

- [OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)
- [Discord Activities SDK](https://discord.com/developers/docs/activities/overview)
- [Discord.js Voice](https://discordjs.guide/voice/)
