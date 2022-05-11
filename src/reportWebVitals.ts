import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      /* 
        累积布局偏移（CLS）量化了在页面加载期间，视口中有多少元素移动。分数越低表示元素偏移越少
        在现实中的 Chrome 用户体验报告中，CLS 分数小于 5 即可被认为是理想的
       */
      getCLS(onPerfEntry);
      /* 首次输入延迟时间 (衡量网站互动顺畅程度) */
      getFID(onPerfEntry);
      /* 浏览器绘制第一块Dom的时间点 */
      getFCP(onPerfEntry);
      /* 最大的内容在可视区域内变得可见的时间点 (衡量网站初次载入速度) */
      getLCP(onPerfEntry);
      /* 浏览器开始收到服务器响应数据的时间（后台处理时间+重定向时间），是反映服务端响应速度的重要指标 */
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
