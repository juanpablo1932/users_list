import { NextFederationPlugin } from '@module-federation/nextjs-mf';

export const reactStrictMode = true;
export function webpack(config, options) {
  Object.assign(config.experiments, { topLevelAwait: true });

  if (!options.isServer) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        exposes: {
          './nextjs-remote-component': './src/components/nextjs-remote-component.jsx',
        },
        shared: {},
        filename: 'static/chunks/remoteEntry.js',
      })
    );
  }
  return config;
}