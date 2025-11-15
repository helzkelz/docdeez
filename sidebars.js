/**
 * Creating a sidebar enables you to:
 *  - create an ordered group of docs
 *  - render a sidebar for each doc of that group
 *  - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  neunuc: [
    {
      type: 'category',
      label: 'HelenKella Neunuc',
      collapsed: false,
      items: [
        'neunuc/neunuc-overview',
        'neunuc/system-architecture-2025',
        'neunuc/neunuc-architecture',
        'neunuc/neunuc-subsystems',
        'neunuc/neunuc-data-model',
        'neunuc/neunuc-integrations',
        'neunuc/discord-voice-integrations',
        'neunuc/ecosystem-master-plan',
        'neunuc/offerings-and-services',
        'neunuc/roadmap',
        'neunuc/team',
        'neunuc/contact',
      ],
    },
  ],
  moderation: [
    {
      type: 'category',
      label: 'Moderation Stack',
      collapsed: false,
      items: [
        'moderation/moderation-overview',
        'moderation/stereotype-examples',
        'moderation/channel-matrix',
        'moderation/automod-concept',
        'moderation/onboarding-flow',
      ],
    },
  ],
};

module.exports = sidebars;
