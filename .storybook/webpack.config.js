// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve('ts-loader'),
			options: { 
				transpileOnly: true
				//presets: [['react-app', { flow: false, typescript: true }]], 
			},
		}
	);
  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.push(new ForkTsCheckerWebpackPlugin());
  return config;
};
