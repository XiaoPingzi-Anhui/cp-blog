const rewireHappyPackLoader = require("react-app-rewire-happy-pack");
/* 由于运行在 Node.js 之上的 Webpack 是单线程模型的，所以Webpack 需要处理的事情需要一件一件的做，不能多件事一起做。
我们需要Webpack 能同一时间处理多个任务，发挥多核 CPU 电脑的威力，HappyPack 就能让 Webpack 做到这点，它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。
 */
const useHappyPack = (config) => rewireHappyPackLoader(config);
const { override, overrideDevServer } = require("customize-cra");

const {
  addAlias,
  addBabelPlugins,
  addFixImport,
  addLessConfig,
  addWebpackPlugins,
} = require("./configs");

module.exports = {
  webpack: override(
    useHappyPack,
    ...addAlias(),
    ...addBabelPlugins(),
    ...addFixImport(),
    ...addLessConfig(),
    ...addWebpackPlugins()
  ),
};
