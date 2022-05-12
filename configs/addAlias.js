const path = require('path');
const { addWebpackAlias } = require('customize-cra');

/**
 * 加别名
 */
const addAlias = () => {
  return [
    addWebpackAlias({
      '@': path.resolve(__dirname, '../src'),
    }),
  ];
};

module.exports = addAlias;
