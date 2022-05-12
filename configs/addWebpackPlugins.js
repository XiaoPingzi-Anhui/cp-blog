const { addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const addWebpackPlugins = () => {
  const configs = [
    /* antd用 Day.js 替换 momentjs 来大幅减小打包大小。 */
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  ];
  return configs;
};

module.exports = addWebpackPlugins;
