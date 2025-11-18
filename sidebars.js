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
  godmode: [
    {
      type: 'category',
      label: 'Prelaunch Hub',
      collapsed: false,
      items: ['prelaunch/prelaunch-overview', 'prelaunch/prelaunch-readiness, 'prelaunch/community-strategy'],],
    },
    {
      type: 'category',
      label: 'Product Foundations',
      collapsed: false,
      items: [
        'godmode/godmode-overview',
        'godmode/system-architecture-2025',
        'godmode/covert-quotient-model',
      ],
    },
    {
      type: 'category',
      label: 'Architecture & Subsystems',
      collapsed: false,
      items: [
        'godmode/godmode-architecture',
        'godmode/godmode-subsystems',
        'godmode/godmode-data-model',
      ],
    },
    {
      type: 'category',
      label: 'Integrations & Operations',
      collapsed: false,
      items: [
        'godmode/godmode-integrations',
        'godmode/discord-voice-integrations',
        'godmode/offerings-and-services',
        'godmode/ecosystem-master-plan',
      ],
    },
    {
      type: 'category',
      label: 'Neunuc Reference Library',
      collapsed: false,
      items: [
        'godmode/neunuc-architecture-summary',
        'godmode/godmode-neunuc-architecture-reference-guide',
        'godmode/godmode-neunuc-system-matrix-reference',
      ],
    },
  ],
};

module.exports = sidebars;
