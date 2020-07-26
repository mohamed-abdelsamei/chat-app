const env = process.env.NODE_ENV || 'dev';
// eslint-disable-next-line import/no-dynamic-require
const cfg = require(`./config.${env}`);


module.exports = cfg;
