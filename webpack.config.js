const conf = module.exports = require('skatejs-build/webpack.config');
conf.entry['dist/index.js'] = './src/index.js';
conf.entry['dist/index.min.js'] = './src/index.js';
