const API_BASE = "/api/public/article";
const getPublicArticleList = async ({ currentPage, pageSize, keyword = "", categoryId }) => {
  const { default: request } = await import('./request-BU3wK0UY.mjs').then((n) => n.ad);
  return request.post(`${API_BASE}/list`, {
    currentPage,
    pageSize,
    keyword,
    ...categoryId && { categoryId }
  });
};
const isValidArticleId = (id) => {
  const num = Number(id);
  return !isNaN(num) && num > 0 && Number.isFinite(num) && String(id).trim() !== "";
};
const getPublicArticleDetail = async (id) => {
  if (!isValidArticleId(id)) {
    return {
      success: false,
      errorMsg: "无效的文章ID"
    };
  }
  const { default: request } = await import('./request-BU3wK0UY.mjs').then((n) => n.ad);
  return request.get(`${API_BASE}/${id}`);
};
const articleApi = {
  getPublicArticleList,
  getPublicArticleDetail
};

export { articleApi as a };
//# sourceMappingURL=articleApi-chdHA1Xm.mjs.map
