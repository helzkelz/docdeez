import React from 'react';
import styles from './Waitlist.module.css';

export default function Waitlist() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          Capture interest via landing prompts, Discord rituals, and partner
          channels.
        </li>
        <li>
          Automations tag supporters by role (storyteller, operator, partner,
          buyer).
        </li>
        <li>
          Weekly “signal drop” email with merch previews and ritual spotlights.
        </li>
        <li>Invite-only huddles for founding storytellers and moderators.</li>
      </ul>
    </>
  );
}
