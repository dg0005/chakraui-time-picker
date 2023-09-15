module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: ['@chakra-ui/storybook-addon'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  features: {
    emotionAlias: false,
  },

  docs: {
    autodocs: true
  }
};
