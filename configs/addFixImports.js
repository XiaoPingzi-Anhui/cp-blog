const { fixBabelImports } = require('customize-cra');

/**
 * 按需加载配置函数
 */
const addFixImports = () => {
  return [
    /* antd的按需加载 */
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    fixBabelImports('lodash', {
      libraryName: 'lodash',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
    fixBabelImports('@umijs/hooks', {
      libraryName: '@umijs/hooks',
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      customName: (name) => {
        if (name === 'useRequest') {
          return '@umijs/use-request';
        }
        return `@umijs/hooks/es/${name}`;
      },
    }),
  ];
};

module.exports = addFixImports;
