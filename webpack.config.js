import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import webpack from 'webpack';
import { UserscriptPlugin } from 'webpack-userscript';
const dev = process.env.NODE_ENV === 'development';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
function getHeaders(file) {
  const headersPath = path.resolve(__dirname, 'src', file);
  return JSON.parse(fs.readFileSync(headersPath).toString());
}

const ru_headers = getHeaders('locales/ru/headers.json');


console.log('development mode: ', dev);

export default {
  mode: dev ? 'development' : 'production',
  resolve: {
    extensions: [".js"],
    alias: {
      API: path.resolve(__dirname, 'src/api/'),
      IndexedDB: path.resolve(__dirname, 'src/indexedDB/'),
      Callbacks: path.resolve(__dirname, 'src/callbacks/'),
      Configs: path.resolve(__dirname, 'src/configs/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      UI: path.resolve(__dirname, 'src/ui/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
  performance: {
    hints: "error",
    maxEntrypointSize: 2000 * 10 ** 3,
    maxAssetSize: 2000 * 10 ** 3,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lzt-upgrade.user.js',
    publicPath: "/",
  },
  devServer: {
    server: "http",
    port: 11944,
    allowedHosts: "all",
    hot: true,
    liveReload: false,
    magicHtml: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    // client: {
    //   webSocketURL: "ws://localhost:11944/ws",
    //   progress: true,
    //   reconnect: false
    // },
    client: false
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV_MODE: JSON.stringify(dev)
    }),
    new UserscriptPlugin({
      headers: async () => {
        const headerPath = path.resolve(__dirname, 'src', 'headers.json');
        const headers = JSON.parse(fs.readFileSync(headerPath).toString());

        let version = headers.version;
        let name = headers.name;
        if (dev) {
          headers['name'] = `[DEV] ${name}`
          headers["version"] = `${version}-build.[buildNo]`;
        }

        return headers;
      },
      i18n: {
        'ru': (headers) => ({
          ...headers,
          description: ru_headers['description']
        }),
      },
      proxyScript: {
        filename: "[basename].proxy.user.js",
        baseURL: "http://localhost:11944/",
      },
      strict: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: "html",
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: "html",
            },
          },
          'css-loader',
        ],
      }
    ],
  },
  optimization: {
    emitOnErrors: true,
    moduleIds: "named",
    minimize: false
  },
}