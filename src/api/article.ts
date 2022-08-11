import request from "@/utils/request";
import { commonRes } from "@/api";

const BASE_URL = process.env.REACT_APP_REQUEST_BASE_URL;

/** 获取所有的文章列表 */
export const getArticleLists: () => Promise<commonRes> = () =>
  request.get(`${BASE_URL}/articleLists`);

/**
 * 根据id获取文章的详细内容
 * @param id 文章id
 */
export const getArticleDetailById = (id: string) =>
  request.get(`${BASE_URL}/getArticleById/${id}`);
