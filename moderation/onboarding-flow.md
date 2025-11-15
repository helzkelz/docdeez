# User Education Onboarding Flow: "Laugh, Don't Harm" SOP

## 1. Welcome Message
- Bot posts in `#welcome` channel:
  > "Welcome to the community! Here, humor is celebrated but never at the expense of others. Please review our 'Laugh, Don't Harm' guidelines."

## 2. Rules Channel Reaction Role
- In `#rules-and-info`, users must react with ✅ to confirm they've read the SOP.
- Bot tracks reactions and grants access to main channels only after confirmation.

## 3. First-Time Channel Entry Bot Message
- When a user enters sensitive channels (`#trauma-support`, `#nsfw-kink`) for the first time:
  - Bot sends an ephemeral DM or channel message:
    > "Reminder: In this space, only self-referential and gentle community-shared humor is allowed. Please avoid targeting or weaponizing trauma/kink."

## 4. "Oops" AutoMod Whisper
- If a user's message is flagged for a low-level offense:
  - Bot sends a private DM:
    > "Hey! Your message was flagged for review. Please check the rules and make sure your humor is safe for everyone. No public shaming—just a gentle nudge."

---

**Implementation Notes:**
- All onboarding steps are automated via bot scripts.
- Ephemeral messages and DMs are preferred for privacy and education.
- Reaction role gating ensures users are aware of the SOP before engaging.
- "Oops" whispers educate, not punish, and avoid public callouts.
