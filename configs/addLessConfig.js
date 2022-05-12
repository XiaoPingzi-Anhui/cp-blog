const { addLessLoader, adjustStyleLoaders } = require("customize-cra");
const { base } = require("../src/assets/styles/colors");
const { IS_DEV } = require("./util");

const addLessConfig = () => {
  return [
    addLessLoader({
      javascriptEnabled: true,
      /* 修改antd的默认配置 */
      modifyVars: {
        "@primary-color": base.primary,
        "@success-color": base.success,
        "@warning-color": base.warning,
        "@error-color": base.error,
        "@link-color": base.primary,
        "@box-shadow-base":
          "0 12px 48px 16px rgba(0, 0, 0, 0.03), 0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 6px 16px -8px rgba(0, 0, 0, 0.08)",
        "@heading-color": base.black1,
        "@font-family": `Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
      },
      cssModules: {
        localIdentName: IS_DEV
          ? "[path][name]__[local]--[hash:base64:5]"
          : "[sha512:hash:base64:7]",
      },
    }),
    /* 不加这个会报postcss不兼容错误 */
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
  ];
};

module.exports = addLessConfig;
