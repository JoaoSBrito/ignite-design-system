module.exports = {
<<<<<<< HEAD
  "stories": ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, {
    configType
  }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/';
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};
=======
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite_designsystem/'
    }

    return config
  }
}
>>>>>>> 30e3e7bbdbfa6048276a87442194b8bfcf2fbe3f
