declare module 'moment' {
  import { Dayjs } from 'dayjs';
  namespace moment {
    type Moment = Dayjs;
  }
  export = moment;
  export as namespace moment;
}

declare type Metric = import('web-vitals/dist/modules/types').Metric;

declare interface Window {
  performance_fcp: Metric;
  performance_ttfb: Metric;
  performance_fid: Metric;
  performance_lcp: Metric;
}

