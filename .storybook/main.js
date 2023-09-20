module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: ['@chakra-ui/storybook-addon'],
  framework: {
    name: '@storybook/react-webpack5',
  },
  features: {
    emotionAlias: false,
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
};
