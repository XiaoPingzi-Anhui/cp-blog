export enum ResInfo {
  Success = "success",
  Failed = "failed",
}

export enum ResCode {
  OK = "",
  Failed = "Internal Server Error",
}

/** 请求数据的缓存时间，10分钟 */
export const staleTime = 600000;

export enum CacheKey {
  Article = "article",
}

export interface commonRes {
  data?: Article[];
  info: ResInfo;
  returnCode: ResCode;
  error?: any;
}

/** 文章的类型 */
export type Article = {
  _id: string;
  /** 标题 */
  title: string;
  /** 文章分类 */
  category: string;
  /** 文章标签 */
  lables: string;
  /** 阅读量 */
  readCount: number;
  /** 创建时间 */
  createdAt: Date;
  /** 创建者id */
  userId?: string;
  /** 主体内容 */
  content?: string;
  /** 点赞数量 */
  likeStar?: number;
};
