module.exports = {
  stories: [
    '../src/pages/components/**/stories.mdx',
    '../src/pages/components/**/stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs'
  ]
}
