const {env} = process;

const config = {

};

config.env = env.NODE_ENV || 'development';

const devConfig = {
  db: 'mongodb://localhost/contacts-manager-tofu'
};

const prodConfig = {
  db: env.MONGO_URL
};

const currentConfig = config.env === 'development' ? devConfig : prodConfig;

module.exports = Object.assign({}, config, currentConfig);
