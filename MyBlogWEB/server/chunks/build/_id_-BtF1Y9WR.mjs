import { defineComponent, ref, withAsyncContext, computed, watch, nextTick, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute as useRoute$1 } from 'vue-router';
import { x as service } from './request-BU3wK0UY.mjs';
import { T as Tag } from './index-CRGFAAMW.mjs';
import { u as useSiteStore, a as useAsyncData, b as api$1 } from './siteStore-MquY96fb.mjs';
import hljs from 'highlight.js';
import { a as articleApi } from './articleApi-chdHA1Xm.mjs';
import { u as useRoute, c as createError } from './server.mjs';
import { u as useHead, a as useSeoMeta } from './composables-CXKIgu2I.mjs';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import 'axios';
import 'pinia';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const PUBLIC_COMMENT_BASE_PATH = "/api/public/comment";
const commentApi = {
  /**
   * 提交评论或回复
   * @param {Object} params - 评论参数
   * @param {number} params.blogId - 文章ID
   * @param {number} params.parentId - 父评论ID，0表示顶级评论
   * @param {string} [params.username] - 评论者名称（游客必填，已登录用户可不填）
   * @param {string} [params.email] - 邮箱（已登录用户可不填）
   * @param {string} [params.avatarUrl] - 头像URL（已登录用户可不填）
   * @param {string} [params.website] - 个人网站
   * @param {string} params.content - 评论内容
   * @returns {Promise} 返回评论提交结果
   */
  submitComment: async ({ blogId, parentId, username, email, avatarUrl, website, content }) => {
    return service.post(`${PUBLIC_COMMENT_BASE_PATH}`, {
      blogId,
      parentId,
      ...username && { username },
      ...email && { email },
      ...avatarUrl && { avatarUrl },
      ...website && { website },
      content
    });
  },
  /**
   * 获取文章评论列表（树形结构）
   * @param {number} blogId - 文章ID
   * @returns {Promise} 返回评论树形列表
   */
  getCommentList: async (blogId) => {
    return service.get(`${PUBLIC_COMMENT_BASE_PATH}/list/${blogId}`);
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommentItem",
  __ssrInlineRender: true,
  props: {
    comment: {},
    depth: {},
    isLoggedIn: { type: Boolean },
    currentUser: {},
    activeReplyId: {},
    submitting: { type: Boolean },
    parentComment: {}
  },
  emits: ["reply", "close-reply", "submit-reply"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const indentStyle = computed(() => {
      return {
        marginLeft: props.depth > 0 ? "2rem" : "0"
      };
    });
    const showReplyForm = computed(() => props.activeReplyId === props.comment.id);
    const avatarLoaded = ref(true);
    const localReplyForm = ref({
      username: "",
      email: "",
      avatarUrl: "",
      website: "",
      content: ""
    });
    const getNameInitial = (name) => {
      if (!name) return "?";
      return name.charAt(0).toUpperCase();
    };
    const maskEmail = (email) => {
      return email;
    };
    const formatDateTime = (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    };
    const isValidUrl = (url) => {
      if (!url) return false;
      try {
        const urlObj = new URL(url);
        return urlObj.protocol === "http:" || urlObj.protocol === "https:";
      } catch {
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_tag = Tag;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div style="${ssrRenderStyle(indentStyle.value)}" class="flex">`);
      if (__props.comment.website && isValidUrl(__props.comment.website) && avatarLoaded.value) {
        _push(`<a${ssrRenderAttr("href", __props.comment.website)} class="flex-shrink-0" rel="noopener noreferrer" target="_blank">`);
        if (__props.comment.avatarUrl) {
          _push(`<img${ssrRenderAttr("alt", __props.comment.username)}${ssrRenderAttr("src", __props.comment.avatarUrl)} class="w-10 h-10 rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.comment.website && isValidUrl(__props.comment.website) && !avatarLoaded.value) {
        _push(`<a${ssrRenderAttr("href", __props.comment.website)} class="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary font-bold text-sm hover:opacity-80 transition-opacity cursor-pointer" rel="noopener noreferrer" target="_blank">${ssrInterpolate(getNameInitial(__props.comment.username))}</a>`);
      } else if (__props.comment.avatarUrl && avatarLoaded.value) {
        _push(`<img${ssrRenderAttr("alt", __props.comment.username)}${ssrRenderAttr("src", __props.comment.avatarUrl)} class="w-10 h-10 rounded-full object-cover flex-shrink-0">`);
      } else {
        _push(`<div class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary font-bold text-sm flex-shrink-0">${ssrInterpolate(getNameInitial(__props.comment.username))}</div>`);
      }
      _push(`<div class="flex flex-col flex-1 min-w-0 ml-4"><div class="flex items-center gap-2 pb-1 flex-wrap">`);
      if (__props.comment.website && isValidUrl(__props.comment.website)) {
        _push(`<a${ssrRenderAttr("href", __props.comment.website)} class="text-sm font-bold text-on-background hover:text-primary transition-colors" rel="noopener noreferrer" target="_blank">${ssrInterpolate(__props.comment.username)}</a>`);
      } else {
        _push(`<span class="text-sm font-bold text-on-background">${ssrInterpolate(__props.comment.username)}</span>`);
      }
      if (__props.comment.email) {
        _push(`<span class="text-xs text-outline">${ssrInterpolate(maskEmail(__props.comment.email))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.comment.isAdmin) {
        _push(ssrRenderComponent(_component_a_tag, {
          bordered: false,
          color: "red"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`管理员`);
            } else {
              return [
                createTextVNode("管理员")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-sm text-on-surface-variant leading-relaxed mb-3 break-words">`);
      if (__props.depth >= 2 && __props.parentComment) {
        _push(`<span class="text-primary mr-1">@${ssrInterpolate(__props.parentComment.username)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.comment.content)}</p>`);
      if (__props.comment.website) {
        _push(`<a${ssrRenderAttr("href", __props.comment.website)} class="text-xs text-primary hover:underline mb-2 inline-block" rel="noopener noreferrer" target="_blank">${ssrInterpolate(__props.comment.website)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4 text-[11px] text-outline font-medium"><span>${ssrInterpolate(formatDateTime(__props.comment.createTime))}</span><button class="text-gray-400 hover:underline cursor-pointer"> 回复 </button></div>`);
      if (showReplyForm.value) {
        _push(`<div class="mt-6">`);
        if (!__props.isLoggedIn) {
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">名称</label><input${ssrRenderAttr("value", localReplyForm.value.username)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="name" type="text"></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">邮箱</label><input${ssrRenderAttr("value", localReplyForm.value.email)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="email@address.com" type="email"></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">头像链接</label><input${ssrRenderAttr("value", localReplyForm.value.avatarUrl)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="https://image.url" type="url"></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">网站链接</label><input${ssrRenderAttr("value", localReplyForm.value.website)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="https://yoursite.com" type="url"></div></div>`);
        } else {
          _push(`<div class="mb-4"><div class="flex items-center gap-3 mb-4 p-3 bg-primary/5 rounded-lg"><span class="text-sm font-medium text-on-background">${ssrInterpolate(__props.currentUser?.nickname || __props.currentUser?.username)}</span></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">网站链接</label><input${ssrRenderAttr("value", localReplyForm.value.website)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="https://yoursite.com" type="url"></div></div>`);
        }
        _push(`<div class="mb-4"><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">回复 @${ssrInterpolate(__props.comment.username)}</label><textarea class="antd-input w-full p-3 text-sm min-h-[80px] rounded-md border-[1.6px] border-gray-200" placeholder="写下你的回复...">${ssrInterpolate(localReplyForm.value.content)}</textarea></div><div class="flex justify-end gap-2"><button class="bg-gray-200 px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity">关闭 </button><button${ssrIncludeBooleanAttr(__props.submitting) ? " disabled" : ""} class="bg-primary text-white px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">${ssrInterpolate(__props.submitting ? "提交中..." : "提交回复")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.comment.children && __props.comment.children.length > 0) {
        _push(`<div class="pt-6 space-y-6"><!--[-->`);
        ssrRenderList(__props.comment.children, (child) => {
          _push(ssrRenderComponent(CommentItem, {
            key: child.id,
            "active-reply-id": __props.activeReplyId,
            comment: child,
            "current-user": __props.currentUser,
            depth: __props.depth + 1,
            "is-logged-in": __props.isLoggedIn,
            "parent-comment": __props.comment,
            submitting: __props.submitting,
            onReply: ($event) => _ctx.$emit("reply", $event),
            onCloseReply: ($event) => _ctx.$emit("close-reply"),
            onSubmitReply: ($event) => _ctx.$emit("submit-reply", $event)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/CommentItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CommentItem = Object.assign(_sfc_main$2, { __name: "ArticleCommentItem" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "commentList",
  __ssrInlineRender: true,
  props: {
    blogId: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute$1();
    const isLoggedIn = ref(false);
    const currentUser = ref(null);
    const commentList = ref([]);
    const loading = ref(true);
    const submitting = ref(false);
    const activeReplyId = ref(null);
    const totalComments = computed(() => {
      let count = 0;
      const countComments = (comments) => {
        for (const comment of comments) {
          count++;
          if (comment.children && comment.children.length > 0) {
            countComments(comment.children);
          }
        }
      };
      countComments(commentList.value);
      return count;
    });
    const commentForm = ref({
      username: "",
      email: "",
      avatarUrl: "",
      website: "",
      content: ""
    });
    const replyForm = ref({
      username: "",
      email: "",
      avatarUrl: "",
      website: "",
      content: ""
    });
    const isValidArticleId = (id) => {
      const num = Number(id);
      return !isNaN(num) && num > 0 && Number.isFinite(num) && String(id).trim() !== "";
    };
    const fetchCommentList = async () => {
      loading.value = true;
      try {
        const articleId = props.blogId || Number(route.params.id);
        if (!articleId || !isValidArticleId(articleId)) return;
        const result = await commentApi.getCommentList(articleId);
        if (result && result.success && result.data) {
          commentList.value = result.data || [];
        } else {
          commentList.value = [];
        }
      } catch (error) {
        console.error("获取评论列表失败:", error);
        api$1.error(error.message || "获取评论列表失败");
        commentList.value = [];
      } finally {
        loading.value = false;
      }
    };
    const toggleReplyForm = (commentId) => {
      if (activeReplyId.value === commentId) {
        activeReplyId.value = null;
      } else {
        activeReplyId.value = commentId;
        replyForm.value = {
          username: "",
          email: "",
          avatarUrl: "",
          website: "",
          content: ""
        };
      }
    };
    const closeReplyForm = () => {
      activeReplyId.value = null;
      replyForm.value = {
        username: "",
        email: "",
        avatarUrl: "",
        website: "",
        content: ""
      };
    };
    const handleSubmitReply = async (data) => {
      if (!data.content.trim()) {
        api$1.warning("请输入回复内容");
        return;
      }
      if (!data.username.trim()) {
        api$1.warning("请输入名称");
        return;
      }
      if (!data.email.trim()) {
        api$1.warning("请输入邮箱");
        return;
      }
      submitting.value = true;
      try {
        const articleId = props.blogId || Number(route.params.id);
        if (!articleId || !isValidArticleId(articleId)) {
          api$1.error("无效的文章ID");
          return;
        }
        const result = await commentApi.submitComment({
          blogId: articleId,
          parentId: data.parentId,
          username: data.username,
          email: data.email,
          avatarUrl: data.avatarUrl,
          website: data.website,
          content: data.content
        });
        if (result && result.success) {
          api$1.success(result.data?.message || "回复提交成功");
          closeReplyForm();
          await fetchCommentList();
        } else {
          api$1.error(result?.errorMsg || "回复提交失败");
        }
      } catch (error) {
        console.error("提交回复失败:", error);
        api$1.error(error.message || "回复提交失败");
      } finally {
        submitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h3 class="text-2xl p-6 font-headline font-bold text-on-background mb-8 border-b pb-2 border-outline-variant/10"> 评论 <span class="text-base font-normal text-gray-400">(${ssrInterpolate(totalComments.value)})</span></h3><div class="mb-12 p-5">`);
      if (!isLoggedIn.value) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">名称</label><input${ssrRenderAttr("value", commentForm.value.username)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="name" type="text"></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">邮箱</label><input${ssrRenderAttr("value", commentForm.value.email)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="email@address.com" type="email"></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">头像链接</label><input${ssrRenderAttr("value", commentForm.value.avatarUrl)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="https://image.url" type="url"></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">网站链接</label><input${ssrRenderAttr("value", commentForm.value.website)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="https://yoursite.com" type="url"></div></div>`);
      } else {
        _push(`<div class="mb-4"><div class="flex items-center gap-3 mb-4 p-3 bg-primary/5 rounded-lg"><span class="text-sm font-medium text-on-background">${ssrInterpolate(currentUser.value?.nickname || currentUser.value?.username)}</span><span class="text-xs text-secondary">(已登录)</span></div><div><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">网站链接</label><input${ssrRenderAttr("value", commentForm.value.website)} class="antd-input w-full px-3 py-2 text-sm rounded-md border-[1.6px] border-gray-200" placeholder="https://yoursite.com" type="url"></div></div>`);
      }
      _push(`<div class="mb-4"><label class="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-0.5">评论内容</label><textarea class="antd-input w-full p-3 text-sm min-h-[100px] rounded-md border-[1.6px] border-gray-200" placeholder="Write a comment...">${ssrInterpolate(commentForm.value.content)}</textarea></div><div class="flex justify-end"><button${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="bg-primary text-white px-8 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">${ssrInterpolate(submitting.value ? "提交中..." : "提交评论")}</button></div></div>`);
      if (loading.value) {
        _push(`<div class="space-y-6"><!--[-->`);
        ssrRenderList(2, (i) => {
          _push(`<div class="py-6 border-b border-outline-variant/10"><div class="flex gap-4"><div class="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div><div class="flex-1 space-y-3"><div class="h-4 w-32 bg-gray-200 rounded animate-pulse"></div><div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div><div class="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (commentList.value.length > 0) {
        _push(`<div class="space-y-6 md:px-6"><!--[-->`);
        ssrRenderList(commentList.value, (comment) => {
          _push(ssrRenderComponent(CommentItem, {
            key: comment.id,
            "active-reply-id": activeReplyId.value,
            comment,
            "current-user": currentUser.value,
            depth: 0,
            "is-logged-in": isLoggedIn.value,
            submitting: submitting.value,
            onReply: (c) => toggleReplyForm(c.id),
            onCloseReply: closeReplyForm,
            onSubmitReply: handleSubmitReply
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-12 text-gray-400"><p>暂无评论，快来抢沙发吧~</p></div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/commentList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ArticleCommentList" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const siteStore = useSiteStore();
    const coverImageLoading = ref(true);
    const isValidArticleId = (id) => {
      const num = Number(id);
      return !isNaN(num) && num > 0 && Number.isFinite(num);
    };
    const { data: apiResult, error: fetchError, pending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `article-${route.params.id}`,
      async () => {
        if (!isValidArticleId(route.params.id)) {
          throw createError({
            statusCode: 404,
            statusMessage: "Invalid article ID"
          });
        }
        return await articleApi.getPublicArticleDetail(route.params.id);
      },
      {
        server: true,
        lazy: false,
        watch: [() => route.params.id]
      }
    )), __temp = await __temp, __restore(), __temp);
    const article = computed(() => {
      if (apiResult.value) {
        const result = apiResult.value;
        if (result && result.success !== false && result.data) {
          return result.data;
        }
      }
      return null;
    });
    const error = computed(() => {
      if (fetchError.value) {
        const err = fetchError.value;
        if (err?.statusCode === 404) {
          return "文章不存在";
        }
        return "获取文章详情失败";
      }
      const result = apiResult.value;
      if (result && result.success === false) {
        return result.errorMsg || "文章不存在或已下架";
      }
      return null;
    });
    const articleTags = computed(() => {
      if (!article.value?.tags) return [];
      return article.value.tags.split(",").map((tag) => tag.trim()).filter(Boolean);
    });
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}年${month}月${day}日`;
    };
    const highlightCode = (attempt = 0) => {
      let container = (void 0).querySelector(".prose-sm");
      if (!container) {
        container = (void 0).querySelector('[class*="prose"]');
      }
      if (!container) {
        container = (void 0).querySelector("article");
      }
      if (!container) {
        const allPre = (void 0).querySelectorAll("pre");
        if (allPre.length > 0) {
          allPre.forEach((pre) => {
            let code = pre.querySelector("code");
            if (!code) {
              code = (void 0).createElement("code");
              code.innerHTML = pre.innerHTML;
              pre.innerHTML = "";
              pre.appendChild(code);
            }
            hljs.highlightElement(code);
          });
          return;
        }
      }
      if (!container) {
        if (attempt < 3) {
          setTimeout(() => highlightCode(attempt + 1), 100);
        }
        return;
      }
      const codeBlocks = container.querySelectorAll("pre code");
      if (codeBlocks.length === 0) {
        const preBlocks = container.querySelectorAll("pre");
        preBlocks.forEach((pre) => {
          let code = pre.querySelector("code");
          if (!code) {
            code = (void 0).createElement("code");
            code.innerHTML = pre.innerHTML;
            pre.innerHTML = "";
            pre.appendChild(code);
          }
          hljs.highlightElement(code);
        });
      } else {
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        });
      }
    };
    const contentRef = ref(null);
    let imageProcessingComplete = false;
    let isProcessingImages = false;
    const setupContentImageLoading = () => {
      if (!contentRef.value) {
        console.log("[Article Page] contentRef is null");
        return;
      }
      if (isProcessingImages) {
        console.log("[Article Page] 图片处理正在进行中，跳过");
        return;
      }
      isProcessingImages = true;
      const images = contentRef.value.querySelectorAll("img");
      console.log("[Article Page] 找到图片数量:", images.length);
      if (images.length === 0) {
        console.log("[Article Page] 没有图片需要处理");
        imageProcessingComplete = true;
        isProcessingImages = false;
        return;
      }
      images.forEach((img) => {
        img.dataset.hasSkeleton = "false";
      });
      images.forEach((img) => {
        const parent = img.parentElement;
        if (!parent) return;
        const wrapper = (void 0).createElement("div");
        wrapper.className = "relative w-full my-8 overflow-hidden rounded-lg bg-gray-200 animate-pulse";
        wrapper.style.minHeight = "200px";
        const originalWidth = img.getAttribute("width");
        const originalHeight = img.getAttribute("height");
        img.style.opacity = "0";
        img.style.transition = "opacity 0.3s ease";
        img.style.display = "block";
        if (originalWidth && originalHeight) {
          img.style.width = originalWidth + "px";
          img.style.height = originalHeight + "px";
        } else {
          img.style.width = "100%";
          img.style.maxWidth = "800px";
          img.style.height = "auto";
        }
        parent.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        img.dataset.hasSkeleton = "true";
        let isHandled = false;
        const onLoad = () => {
          if (isHandled) return;
          isHandled = true;
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onError);
          img.style.opacity = "1";
          wrapper.className = "w-full my-8 overflow-hidden rounded-lg";
          wrapper.style.minHeight = "";
          console.log("[Article Page] 图片加载成功:", img.src);
        };
        const onError = () => {
          if (isHandled) return;
          isHandled = true;
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onError);
          console.log("[Article Page] 图片加载失败:", img.src);
          img.style.display = "none";
          wrapper.className = "relative my-8 overflow-hidden rounded-lg border-2 border-dashed border-red-400 bg-red-50 flex items-center justify-center";
          wrapper.style.minHeight = "200px";
          wrapper.textContent = "图片加载失败";
          wrapper.style.color = "#ef4444";
          wrapper.style.fontSize = "14px";
        };
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError);
        if (img.complete && img.naturalWidth > 0) {
          onLoad();
        }
      });
      imageProcessingComplete = true;
      isProcessingImages = false;
      console.log("[Article Page] 所有图片处理完成");
    };
    watch(() => article.value?.htmlContent, async (newContent) => {
      console.log("[Article Page] htmlContent 变化, 长度:", newContent?.length);
      if (newContent) {
        coverImageLoading.value = true;
        imageProcessingComplete = false;
        await nextTick();
        setTimeout(() => {
          if (!imageProcessingComplete) {
            console.log("[Article Page] 执行代码高亮和图片处理 (watch)");
            highlightCode(0);
            setupContentImageLoading();
          }
        }, 50);
      }
    }, { immediate: true });
    const articleDescription = computed(() => {
      if (!article.value?.htmlContent) return "";
      const text = article.value.htmlContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      return text.length > 200 ? text.substring(0, 200) + "..." : text;
    });
    useHead({
      title: () => article.value ? `${article.value.title} - ${siteStore.siteName}` : "加载中...",
      meta: [
        {
          name: "description",
          content: () => article.value?.categoryName ? `${article.value.categoryName} - ${articleDescription.value}` : articleDescription.value
        },
        {
          name: "keywords",
          content: () => article.value?.tags || ""
        }
      ]
    });
    useSeoMeta({
      title: () => article.value ? `${article.value.title} - ${siteStore.siteName}` : "加载中...",
      description: () => articleDescription.value,
      ogTitle: () => article.value?.title || "",
      ogDescription: () => articleDescription.value,
      ogImage: () => article.value?.coverImage || "",
      articleAuthor: () => article.value?.authorNickname || "",
      articlePublishedTime: () => article.value?.createTime || ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_article_comment_list = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="my-24"></div><div class="mx-auto max-w-4xl w-auto px-4 md:px-8">`);
      if (unref(pending)) {
        _push(`<div class="mt-40"><div class="h-8 w-48 bg-gray-200 rounded mb-4"></div><div class="h-12 w-3/4 bg-gray-200 rounded mb-6"></div><div class="space-y-3"><div class="h-4 w-full bg-gray-200 rounded"></div><div class="h-4 w-5/6 bg-gray-200 rounded"></div><div class="h-4 w-4/5 bg-gray-200 rounded"></div><div class="h-4 w-full bg-gray-200 rounded"></div><div class="h-4 w-3/4 bg-gray-200 rounded"></div></div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-20"><div class="text-6xl mb-4">404</div><div class="text-xl text-gray-500 mb-6">${ssrInterpolate(error.value)}</div><button class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"> 返回首页 </button></div>`);
      } else {
        _push(`<div><article class="bg-white/80 backdrop-blur-sm rounded-xl px-2 py-6 md:p-10 shadow-sm"><header class="mb-8 pb-6 border-b border-outline-variant/15"><div class="flex items-center gap-3 mb-4">`);
        if (article.value.categoryName) {
          _push(`<span class="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">${ssrInterpolate(article.value.categoryName)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (article.value.isTop) {
          _push(`<span class="text-xs uppercase tracking-widest font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full"> 置顶 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h1 class="text-2xl md:text-4xl font-bold text-on-background mb-4 leading-tight">${ssrInterpolate(article.value.title)}</h1><div class="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant"><div class="flex items-center gap-2"><span>${ssrInterpolate(article.value.authorNickname)}</span></div><span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> ${ssrInterpolate(formatDate(article.value.createTime))}</span><span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> ${ssrInterpolate(article.value.commentCount)} 评论 </span></div>`);
        if (article.value.tags) {
          _push(`<div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(articleTags.value, (tag) => {
            _push(`<span class="text-xs px-2 py-1 bg-surface-container-low text-on-surface-variant rounded">${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header>`);
        if (article.value.coverImage) {
          _push(`<div class="mb-8 rounded-lg overflow-hidden relative">`);
          if (coverImageLoading.value) {
            _push(`<div class="w-full h-64 md:h-80 bg-gray-200 animate-pulse rounded-lg absolute inset-0"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<img${ssrRenderAttr("alt", article.value.title)} class="${ssrRenderClass([{ "opacity-0": coverImageLoading.value }, "w-full h-64 md:h-80 object-cover transition-opacity duration-300"])}"${ssrRenderAttr("src", article.value.coverImage)}></div>`);
        } else {
          _push(`<!---->`);
        }
        if (article.value.htmlContent) {
          _push(`<div class="article-content prose-sm max-w-none prose-h1:text-3xl prose-h1:mb-8 prose-h1:font-bold prose-h1:text-gray-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-semibold prose-h2:text-gray-800 prose-h2:pt-2 prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:font-medium prose-h3:text-gray-700 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:my-5 prose-p:text-[15.5px] prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:py-0 prose-blockquote:my-6 prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-ul:space-y-1.5 prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6 prose-ol:space-y-1.5 prose-li:text-gray-600 prose-li:pl-1 prose-li:marker:text-gray-400 prose-a:text-blue-600 d prose-a:underline prose-a:underline-offset-2 prose-a:decoration-blue-300 hover:prose-a:text-blue-700 hover:prose-a:decoration-2 prose-img:rounded-md prose-img:mx-auto prose-img:!m-0 prose-img:border prose-img:border-gray-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:font-mono prose-code:border prose-code:border-gray-200 prose-pre:rounded-lg prose-pre:my-7 prose-pre:overflow-x-auto prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 prose-pre code:bg-transparent code:text-gray-200 code:border-0 prose-pre code:p-0 prose-table:w-full prose-table:text-sm prose-table:overflow-hidden prose-table:my-8 prose-table:rounded-lg prose-table:border prose-table:border-separate prose-table:border-spacing-0 prose-table:border-gray-200 prose-table:shadow-sm prose-thead:bg-gray-50 prose-th:px-5 prose-th:py-3.5 prose-th:text-left prose-th:font-semibold prose-th:text-gray-700 prose-th:border-b prose-th:border-b-gray-300 prose-td:px-5 prose-td:py-3.5 prose-td:text-gray-600 prose-tr:border-b prose-tr:border-gray-100 prose-tr:hover:bg-gray-50/50 prose-tr:transition-colors prose-tr:duration-150 prose-th:first-child:rounded-tl-lg prose-th:last-child:rounded-tr-lg prose-tr:last-child prose-td:first-child:rounded-bl-lg prose-tr:last-child prose-td:last-child:rounded-br-lg prose-hr:my-8 prose-hr:border-gray-200 line-numbers selection:bg-blue-100 prose-strong:font-semibold prose-strong:text-gray-800 prose-em:italic first:prose-p:mt-0 last:prose-p:mb-0">${article.value.htmlContent ?? ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<footer class="mt-12 pt-6 border-t border-outline-variant/15"><div class="flex items-center justify-between"><button class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> 返回首页 </button></div></footer></article><div class="mt-8 pb-12 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">`);
        _push(ssrRenderComponent(_component_article_comment_list, {
          "blog-id": article.value.id
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BtF1Y9WR.mjs.map
