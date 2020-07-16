const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: ['../src/components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-contexts/register',
  ],
};
