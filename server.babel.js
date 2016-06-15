import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './webpack.config.babel.js';

const compiler = webpack(config);
const server = new WebpackDevServer(compiler);

server.listen(8080, () => {
  console.log('Server start on port 8080');
});
