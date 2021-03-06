module.exports = ({ config }) => {
  config.module.rules.unshift(
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        },
        
        require.resolve("react-docgen-typescript-loader")
      ]
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    }
  );

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
