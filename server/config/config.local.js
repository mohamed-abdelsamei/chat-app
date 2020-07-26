const config = require('./config.global');

config.env = 'local';
config.app = {
  secret: 'shhhhhh',
  token_duration: 2592000,
};

config.jwt = {
  jwtSecret: '54sad54as1d1asd',
  masterKey: 'sd3d121gvf2sd23a1sfs',
};


config.mongo = {
  uri: 'mongodb://localhost:37017/chat',
};



module.exports = config;
