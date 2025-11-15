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
      label: 'HelenKella Godmode',
      collapsed: false,
      items: [
        'godmode/godmode-overview',
        'godmode/godmode-architecture',
        'godmode/godmode-subsystems',
        'godmode/godmode-data-model',
        'godmode/godmode-integrations',
      ],
    },
  ],
};

module.exports = sidebars;
