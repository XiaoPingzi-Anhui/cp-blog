const { IS_DEV  } = require('./util');

module.exports = {
  IS_DEV ,
  addAlias: require('./addAlias'),
  addBabelPlugins: require('./addBabelPlugins'),
  addFixImport: require('./addFixImports'),
  addLessConfig: require('./addLessConfig'),
  addWebpackPlugins: require('./addWebpackPlugins'),
};
