const { addBabelPlugin } = require("customize-cra");
const { IS_DEV } = require("./util");

/**
 * babel插件
 */
const addBabelPlugins = () => {
  const configs = [
    addBabelPlugin([
      "babel-plugin-styled-components",
      {
        displayName: IS_DEV, // 此选项可增强每个组件上附加的 CSS 类名称
      },
    ]),
  ];
  /* 生产环境移除console */
  if (!IS_DEV) {
    configs.push(
      addBabelPlugin([
        "babel-plugin-transform-remove-console",
        { exclude: ["error", "warn"] },
      ])
    );
  }

  return configs;
};

module.exports = addBabelPlugins;
