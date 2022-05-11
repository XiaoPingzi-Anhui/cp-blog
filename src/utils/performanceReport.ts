import { Metric } from 'web-vitals/dist/modules/types';

/* 性能检测的回调，把各个指标挂到window上，但是createPerformanceElement的用意没搞懂想要干啥 */
export default function performanceReport(info: Metric) {
  switch (info.name) {
    case 'FCP':
      window.performance_fcp = info;
      break;
    case 'TTFB':
      window.performance_ttfb = info;
      break;
    case 'FID':
      window.performance_fid = info;
      break;
    case 'LCP':
      window.performance_lcp = info;
      break;
    default:
      break;
  }
}
