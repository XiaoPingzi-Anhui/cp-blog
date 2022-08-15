import { createElement, Fragment } from "react";
import { isNil } from "lodash";

/**
 * 关键词高亮
 * @param {string} contents 内容
 * @param {string | Array.<string>} [keyword] 关键词，可以是字符串或字符串数组
 * @param {string} [tag] 包裹标签
 * @param {Object} [props]
 * @return {*}
 */
export function highlight(
  contents: string,
  keyword: string | string[] = "",
  tag = "span",
  props = { className: "highlight-text" }
) {
  keyword = isNil(keyword)
    ? ""
    : Array.isArray(keyword)
    ? keyword.map((d) => d.toLowerCase())
    : keyword.toLowerCase();
  const reg = new RegExp(
    `(${
      Array.isArray(keyword)
        ? keyword.map((k) => encodeURI(k)).join("|")
        : encodeURI(keyword)
    })`,
    "ig"
  );
  if (!contents || !keyword) {
    return contents;
  }
  contents = contents.toString();
  const nodes = contents?.split(reg).map((res, index) => {
    const contentKey = res.toLowerCase();
    if (Array.isArray(keyword)) {
      return keyword.includes(contentKey)
        ? createElement(tag, { ...props, key: index }, res)
        : res;
    } else if (contentKey === keyword) {
      return createElement(tag, { ...props, key: index }, res);
    }
    return res;
  });

  return createElement(Fragment, null, nodes);
}
