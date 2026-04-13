import { CalendarOutlined, CommentOutlined } from '@ant-design/icons-vue';
import { _ as __nuxt_component_0 } from './nuxt-link-D8DAAlKw.mjs';
import { defineComponent, ref, withAsyncContext, watch, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, isRef, cloneVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { a as articleApi } from './articleApi-chdHA1Xm.mjs';
import { u as useSiteStore, a as useAsyncData, b as api$1, L as LoadingOutlined } from './siteStore-MquY96fb.mjs';
import { u as useHead, a as useSeoMeta } from './composables-CXKIgu2I.mjs';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import { _ as __nuxt_component_1$1, u as useConfigInject, f as filterEmpty, c as classNames, g as genComponentStyleHook, m as merge, P as PropTypes, t as tuple, b as booleanType, r as resetComponent } from './request-BU3wK0UY.mjs';
import { i as initDefaultProps } from './initDefaultProps-C-dWF3aS.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
import { T as Tag } from './index-CRGFAAMW.mjs';
import { _ as __nuxt_component_0$1 } from './index-BPay6gtQ.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import 'axios';
import './firstNotUndefined-D8bvNvh_.mjs';
import 'dom-align';
import 'lodash-es';
import 'resize-observer-polyfill';

const timelineItemProps = () => ({
  prefixCls: String,
  color: String,
  dot: PropTypes.any,
  pending: booleanType(),
  position: PropTypes.oneOf(tuple("left", "right", "")).def(""),
  label: PropTypes.any
});
const __nuxt_component_1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATimelineItem",
  props: initDefaultProps(timelineItemProps(), {
    color: "blue",
    pending: false
  }),
  slots: Object,
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("timeline", props);
    const itemClassName = computed(() => ({
      [`${prefixCls.value}-item`]: true,
      [`${prefixCls.value}-item-pending`]: props.pending
    }));
    const customColor = computed(() => /blue|red|green|gray/.test(props.color || "") ? void 0 : props.color || "blue");
    const dotClassName = computed(() => ({
      [`${prefixCls.value}-item-head`]: true,
      [`${prefixCls.value}-item-head-${props.color || "blue"}`]: !customColor.value
    }));
    return () => {
      var _a, _b, _c;
      const {
        label = (_a = slots.label) === null || _a === void 0 ? void 0 : _a.call(slots),
        dot = (_b = slots.dot) === null || _b === void 0 ? void 0 : _b.call(slots)
      } = props;
      return createVNode("li", {
        "class": itemClassName.value
      }, [label && createVNode("div", {
        "class": `${prefixCls.value}-item-label`
      }, [label]), createVNode("div", {
        "class": `${prefixCls.value}-item-tail`
      }, null), createVNode("div", {
        "class": [dotClassName.value, !!dot && `${prefixCls.value}-item-head-custom`],
        "style": {
          borderColor: customColor.value,
          color: customColor.value
        }
      }, [dot]), createVNode("div", {
        "class": `${prefixCls.value}-item-content`
      }, [(_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots)])]);
    };
  }
});
const genTimelineStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      margin: 0,
      padding: 0,
      listStyle: "none",
      [`${componentCls}-item`]: {
        position: "relative",
        margin: 0,
        paddingBottom: token.timeLineItemPaddingBottom,
        fontSize: token.fontSize,
        listStyle: "none",
        "&-tail": {
          position: "absolute",
          insetBlockStart: token.timeLineItemHeadSize,
          insetInlineStart: (token.timeLineItemHeadSize - token.timeLineItemTailWidth) / 2,
          height: `calc(100% - ${token.timeLineItemHeadSize}px)`,
          borderInlineStart: `${token.timeLineItemTailWidth}px ${token.lineType} ${token.colorSplit}`
        },
        "&-pending": {
          [`${componentCls}-item-head`]: {
            fontSize: token.fontSizeSM,
            backgroundColor: "transparent"
          },
          [`${componentCls}-item-tail`]: {
            display: "none"
          }
        },
        "&-head": {
          position: "absolute",
          width: token.timeLineItemHeadSize,
          height: token.timeLineItemHeadSize,
          backgroundColor: token.colorBgContainer,
          border: `${token.timeLineHeadBorderWidth}px ${token.lineType} transparent`,
          borderRadius: "50%",
          "&-blue": {
            color: token.colorPrimary,
            borderColor: token.colorPrimary
          },
          "&-red": {
            color: token.colorError,
            borderColor: token.colorError
          },
          "&-green": {
            color: token.colorSuccess,
            borderColor: token.colorSuccess
          },
          "&-gray": {
            color: token.colorTextDisabled,
            borderColor: token.colorTextDisabled
          }
        },
        "&-head-custom": {
          position: "absolute",
          insetBlockStart: token.timeLineItemHeadSize / 2,
          insetInlineStart: token.timeLineItemHeadSize / 2,
          width: "auto",
          height: "auto",
          marginBlockStart: 0,
          paddingBlock: token.timeLineItemCustomHeadPaddingVertical,
          lineHeight: 1,
          textAlign: "center",
          border: 0,
          borderRadius: 0,
          transform: `translate(-50%, -50%)`
        },
        "&-content": {
          position: "relative",
          insetBlockStart: -(token.fontSize * token.lineHeight - token.fontSize) + token.lineWidth,
          marginInlineStart: token.margin + token.timeLineItemHeadSize,
          marginInlineEnd: 0,
          marginBlockStart: 0,
          marginBlockEnd: 0,
          wordBreak: "break-word"
        },
        "&-last": {
          [`> ${componentCls}-item-tail`]: {
            display: "none"
          },
          [`> ${componentCls}-item-content`]: {
            minHeight: token.controlHeightLG * 1.2
          }
        }
      },
      [`&${componentCls}-alternate,
        &${componentCls}-right,
        &${componentCls}-label`]: {
        [`${componentCls}-item`]: {
          "&-tail, &-head, &-head-custom": {
            insetInlineStart: "50%"
          },
          "&-head": {
            marginInlineStart: `-${token.marginXXS}px`,
            "&-custom": {
              marginInlineStart: token.timeLineItemTailWidth / 2
            }
          },
          "&-left": {
            [`${componentCls}-item-content`]: {
              insetInlineStart: `calc(50% - ${token.marginXXS}px)`,
              width: `calc(50% - ${token.marginSM}px)`,
              textAlign: "start"
            }
          },
          "&-right": {
            [`${componentCls}-item-content`]: {
              width: `calc(50% - ${token.marginSM}px)`,
              margin: 0,
              textAlign: "end"
            }
          }
        }
      },
      [`&${componentCls}-right`]: {
        [`${componentCls}-item-right`]: {
          [`${componentCls}-item-tail,
            ${componentCls}-item-head,
            ${componentCls}-item-head-custom`]: {
            insetInlineStart: `calc(100% - ${(token.timeLineItemHeadSize + token.timeLineItemTailWidth) / 2}px)`
          },
          [`${componentCls}-item-content`]: {
            width: `calc(100% - ${token.timeLineItemHeadSize + token.marginXS}px)`
          }
        }
      },
      [`&${componentCls}-pending
        ${componentCls}-item-last
        ${componentCls}-item-tail`]: {
        display: "block",
        height: `calc(100% - ${token.margin}px)`,
        borderInlineStart: `${token.timeLineItemTailWidth}px dotted ${token.colorSplit}`
      },
      [`&${componentCls}-reverse
        ${componentCls}-item-last
        ${componentCls}-item-tail`]: {
        display: "none"
      },
      [`&${componentCls}-reverse ${componentCls}-item-pending`]: {
        [`${componentCls}-item-tail`]: {
          insetBlockStart: token.margin,
          display: "block",
          height: `calc(100% - ${token.margin}px)`,
          borderInlineStart: `${token.timeLineItemTailWidth}px dotted ${token.colorSplit}`
        },
        [`${componentCls}-item-content`]: {
          minHeight: token.controlHeightLG * 1.2
        }
      },
      [`&${componentCls}-label`]: {
        [`${componentCls}-item-label`]: {
          position: "absolute",
          insetBlockStart: -(token.fontSize * token.lineHeight - token.fontSize) + token.timeLineItemTailWidth,
          width: `calc(50% - ${token.marginSM}px)`,
          textAlign: "end"
        },
        [`${componentCls}-item-right`]: {
          [`${componentCls}-item-label`]: {
            insetInlineStart: `calc(50% + ${token.marginSM}px)`,
            width: `calc(50% - ${token.marginSM}px)`,
            textAlign: "start"
          }
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${componentCls}-item-head-custom`]: {
          transform: `translate(50%, -50%)`
        }
      }
    })
  };
};
const useStyle = genComponentStyleHook("Timeline", (token) => {
  const timeLineToken = merge(token, {
    timeLineItemPaddingBottom: token.padding * 1.25,
    timeLineItemHeadSize: 10,
    timeLineItemCustomHeadPaddingVertical: token.paddingXXS,
    timeLinePaddingInlineEnd: 2,
    timeLineItemTailWidth: token.lineWidthBold,
    timeLineHeadBorderWidth: token.wireframe ? token.lineWidthBold : token.lineWidth * 3
  });
  return [genTimelineStyle(timeLineToken)];
});
const timelineProps = () => ({
  prefixCls: String,
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending: PropTypes.any,
  pendingDot: PropTypes.any,
  reverse: booleanType(),
  mode: PropTypes.oneOf(tuple("left", "alternate", "right", ""))
});
const Timeline = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATimeline",
  inheritAttrs: false,
  props: initDefaultProps(timelineProps(), {
    reverse: false,
    mode: ""
  }),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("timeline", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const getPositionCls = (ele, idx) => {
      const eleProps = ele.props || {};
      if (props.mode === "alternate") {
        if (eleProps.position === "right") return `${prefixCls.value}-item-right`;
        if (eleProps.position === "left") return `${prefixCls.value}-item-left`;
        return idx % 2 === 0 ? `${prefixCls.value}-item-left` : `${prefixCls.value}-item-right`;
      }
      if (props.mode === "left") return `${prefixCls.value}-item-left`;
      if (props.mode === "right") return `${prefixCls.value}-item-right`;
      if (eleProps.position === "right") return `${prefixCls.value}-item-right`;
      return "";
    };
    return () => {
      var _a, _b, _c;
      const {
        pending = (_a = slots.pending) === null || _a === void 0 ? void 0 : _a.call(slots),
        pendingDot = (_b = slots.pendingDot) === null || _b === void 0 ? void 0 : _b.call(slots),
        reverse,
        mode
      } = props;
      const pendingNode = typeof pending === "boolean" ? null : pending;
      const children = filterEmpty((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
      const pendingItem = pending ? createVNode(__nuxt_component_1, {
        "pending": !!pending,
        "dot": pendingDot || createVNode(LoadingOutlined, null, null)
      }, {
        default: () => [pendingNode]
      }) : null;
      if (pendingItem) {
        children.push(pendingItem);
      }
      const timeLineItems = reverse ? children.reverse() : children;
      const itemsCount = timeLineItems.length;
      const lastCls = `${prefixCls.value}-item-last`;
      const items = timeLineItems.map((ele, idx) => {
        const pendingClass = idx === itemsCount - 2 ? lastCls : "";
        const readyClass = idx === itemsCount - 1 ? lastCls : "";
        return cloneVNode(ele, {
          class: classNames([!reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
        });
      });
      const hasLabelItem = timeLineItems.some((item) => {
        var _a2, _b2;
        return !!(((_a2 = item.props) === null || _a2 === void 0 ? void 0 : _a2.label) || ((_b2 = item.children) === null || _b2 === void 0 ? void 0 : _b2.label));
      });
      const classString = classNames(prefixCls.value, {
        [`${prefixCls.value}-pending`]: !!pending,
        [`${prefixCls.value}-reverse`]: !!reverse,
        [`${prefixCls.value}-${mode}`]: !!mode && !hasLabelItem,
        [`${prefixCls.value}-label`]: hasLabelItem,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl"
      }, attrs.class, hashId.value);
      return wrapSSR(createVNode("ul", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": classString
      }), [items]));
    };
  }
});
Timeline.Item = __nuxt_component_1;
Timeline.install = function(app) {
  app.component(Timeline.name, Timeline);
  app.component(__nuxt_component_1.name, __nuxt_component_1);
  return app;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const siteStore = useSiteStore();
    const articleList = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(7);
    const total = ref(0);
    const loading = ref(true);
    const { data: serverData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "article-list",
      async () => {
        const categoryId = route.query.categoryId ? Number(route.query.categoryId) : void 0;
        return await articleApi.getPublicArticleList({
          currentPage: 1,
          pageSize: pageSize.value,
          keyword: "",
          categoryId
        });
      },
      {
        // 服务端每次请求都重新获取
        getCachedData: (key, nuxtApp) => {
          return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    const serverResponse = serverData.value;
    if (serverResponse && serverResponse.success !== false) {
      articleList.value = serverResponse?.data?.records || [];
      total.value = serverResponse?.data?.total || 0;
    }
    loading.value = false;
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}/${month}/${day}`;
    };
    const fetchArticleList = async () => {
      loading.value = true;
      try {
        const categoryId = route.query.categoryId ? Number(route.query.categoryId) : void 0;
        const result = await articleApi.getPublicArticleList({
          currentPage: currentPage.value,
          pageSize: pageSize.value,
          keyword: "",
          categoryId
        });
        if (result && result.data) {
          articleList.value = result.data.records || [];
          total.value = result.data.total || 0;
        } else {
          articleList.value = [];
          total.value = 0;
        }
      } catch (error) {
        console.error("获取文章列表失败:", error);
        api$1.error(error.message || "获取文章列表失败");
        articleList.value = [];
      } finally {
        loading.value = false;
      }
    };
    const handlePageChange = (page) => {
      currentPage.value = page;
      fetchArticleList();
    };
    watch(() => route.query.categoryId, async () => {
      currentPage.value = 1;
      await fetchArticleList();
    });
    useHead({
      title: () => `${siteStore.siteName} - 首页`,
      meta: [
        { name: "description", content: () => siteStore.siteDescription },
        { name: "keywords", content: () => `博客,${siteStore.siteName},技术文章,生活分享` }
      ]
    });
    useSeoMeta({
      title: () => `${siteStore.siteName} - 首页`,
      description: () => siteStore.siteDescription,
      ogTitle: () => siteStore.siteName,
      ogDescription: () => siteStore.siteDescription,
      ogSiteName: () => siteStore.siteName
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_timeline = Timeline;
      const _component_a_timeline_item = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_a_tag = Tag;
      const _component_a_empty = __nuxt_component_1$1;
      const _component_a_pagination = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="md:my-36 my-24"></div><div class="mx-auto max-w-2xl px-3">`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center"><div class="flex flex-col gap-6 w-full"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="flex flex-col sm:flex-row bg-white mb-8 gap-6"><div class="flex-1 min-w-0 flex flex-col h-40"><div class="flex flex-row mb-2 gap-2"><div class="h-6 w-24 bg-gray-100 rounded animate-pulse"></div><div class="h-6 w-16 bg-gray-100 rounded animate-pulse"></div></div><div class="my-2 h-6 w-3/4 bg-gray-100 rounded animate-pulse"></div><div class="flex-1 space-y-2"><div class="h-4 w-full bg-gray-100 rounded animate-pulse"></div><div class="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else if (unref(articleList).length > 0) {
        _push(ssrRenderComponent(_component_a_timeline, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(articleList), (article) => {
                _push2(ssrRenderComponent(_component_a_timeline_item, {
                  key: article.id,
                  color: article.isTop ? "red" : "blue"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `/article/${article.id}`,
                        class: "timeline-content group block pb-8 px-3"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<h3 class="text-lg font-bold text-on-background group-hover:text-primary transition-colors mb-1"${_scopeId3}>${ssrInterpolate(article.title)}</h3><div class="flex pt-1 items-center mb-1"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_a_tag, {
                              bordered: false,
                              color: "blue"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(article.categoryName || "未分类")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(article.categoryName || "未分类"), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_a_tag, { bordered: false }, {
                              icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(CalendarOutlined), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(CalendarOutlined))
                                  ];
                                }
                              }),
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` ${ssrInterpolate(formatDate(article.createTime))}`);
                                } else {
                                  return [
                                    createTextVNode(" " + toDisplayString(formatDate(article.createTime)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_a_tag, { bordered: false }, {
                              icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(CommentOutlined), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(CommentOutlined))
                                  ];
                                }
                              }),
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` ${ssrInterpolate(article.commentCount)}条评论 `);
                                } else {
                                  return [
                                    createTextVNode(" " + toDisplayString(article.commentCount) + "条评论 ", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (article.isTop) {
                              _push4(ssrRenderComponent(_component_a_tag, {
                                bordered: false,
                                color: "red"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` 置顶 `);
                                  } else {
                                    return [
                                      createTextVNode(" 置顶 ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><p class="text-sm pt-2 text-on-surface-variant line-clamp-2 leading-relaxed"${_scopeId3}>${ssrInterpolate(article.summary || "暂无摘要")}</p><p class="text-blue-400 pt-2 flex items-center"${_scopeId3}>Read more <span class="mt-[3px]"${_scopeId3}><svg class="relative mt-px overflow-visible ml-2.5 text-sky-300" fill="none" height="6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 3 6" width="3"${_scopeId3}><path d="M0 0L3 3L0 6"${_scopeId3}></path></svg></span></p>`);
                          } else {
                            return [
                              createVNode("h3", { class: "text-lg font-bold text-on-background group-hover:text-primary transition-colors mb-1" }, toDisplayString(article.title), 1),
                              createVNode("div", { class: "flex pt-1 items-center mb-1" }, [
                                createVNode(_component_a_tag, {
                                  bordered: false,
                                  color: "blue"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(article.categoryName || "未分类"), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_a_tag, { bordered: false }, {
                                  icon: withCtx(() => [
                                    createVNode(unref(CalendarOutlined))
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" " + toDisplayString(formatDate(article.createTime)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_a_tag, { bordered: false }, {
                                  icon: withCtx(() => [
                                    createVNode(unref(CommentOutlined))
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" " + toDisplayString(article.commentCount) + "条评论 ", 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                article.isTop ? (openBlock(), createBlock(_component_a_tag, {
                                  key: 0,
                                  bordered: false,
                                  color: "red"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 置顶 ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("p", { class: "text-sm pt-2 text-on-surface-variant line-clamp-2 leading-relaxed" }, toDisplayString(article.summary || "暂无摘要"), 1),
                              createVNode("p", { class: "text-blue-400 pt-2 flex items-center" }, [
                                createTextVNode("Read more "),
                                createVNode("span", { class: "mt-[3px]" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "relative mt-px overflow-visible ml-2.5 text-sky-300",
                                    fill: "none",
                                    height: "6",
                                    stroke: "currentColor",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    viewBox: "0 0 3 6",
                                    width: "3"
                                  }, [
                                    createVNode("path", { d: "M0 0L3 3L0 6" })
                                  ]))
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          to: `/article/${article.id}`,
                          class: "timeline-content group block pb-8 px-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "text-lg font-bold text-on-background group-hover:text-primary transition-colors mb-1" }, toDisplayString(article.title), 1),
                            createVNode("div", { class: "flex pt-1 items-center mb-1" }, [
                              createVNode(_component_a_tag, {
                                bordered: false,
                                color: "blue"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(article.categoryName || "未分类"), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_a_tag, { bordered: false }, {
                                icon: withCtx(() => [
                                  createVNode(unref(CalendarOutlined))
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" " + toDisplayString(formatDate(article.createTime)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_a_tag, { bordered: false }, {
                                icon: withCtx(() => [
                                  createVNode(unref(CommentOutlined))
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" " + toDisplayString(article.commentCount) + "条评论 ", 1)
                                ]),
                                _: 2
                              }, 1024),
                              article.isTop ? (openBlock(), createBlock(_component_a_tag, {
                                key: 0,
                                bordered: false,
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 置顶 ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            createVNode("p", { class: "text-sm pt-2 text-on-surface-variant line-clamp-2 leading-relaxed" }, toDisplayString(article.summary || "暂无摘要"), 1),
                            createVNode("p", { class: "text-blue-400 pt-2 flex items-center" }, [
                              createTextVNode("Read more "),
                              createVNode("span", { class: "mt-[3px]" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "relative mt-px overflow-visible ml-2.5 text-sky-300",
                                  fill: "none",
                                  height: "6",
                                  stroke: "currentColor",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  viewBox: "0 0 3 6",
                                  width: "3"
                                }, [
                                  createVNode("path", { d: "M0 0L3 3L0 6" })
                                ]))
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(articleList), (article) => {
                  return openBlock(), createBlock(_component_a_timeline_item, {
                    key: article.id,
                    color: article.isTop ? "red" : "blue"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: `/article/${article.id}`,
                        class: "timeline-content group block pb-8 px-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "text-lg font-bold text-on-background group-hover:text-primary transition-colors mb-1" }, toDisplayString(article.title), 1),
                          createVNode("div", { class: "flex pt-1 items-center mb-1" }, [
                            createVNode(_component_a_tag, {
                              bordered: false,
                              color: "blue"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(article.categoryName || "未分类"), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_a_tag, { bordered: false }, {
                              icon: withCtx(() => [
                                createVNode(unref(CalendarOutlined))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" " + toDisplayString(formatDate(article.createTime)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_a_tag, { bordered: false }, {
                              icon: withCtx(() => [
                                createVNode(unref(CommentOutlined))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" " + toDisplayString(article.commentCount) + "条评论 ", 1)
                              ]),
                              _: 2
                            }, 1024),
                            article.isTop ? (openBlock(), createBlock(_component_a_tag, {
                              key: 0,
                              bordered: false,
                              color: "red"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 置顶 ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "text-sm pt-2 text-on-surface-variant line-clamp-2 leading-relaxed" }, toDisplayString(article.summary || "暂无摘要"), 1),
                          createVNode("p", { class: "text-blue-400 pt-2 flex items-center" }, [
                            createTextVNode("Read more "),
                            createVNode("span", { class: "mt-[3px]" }, [
                              (openBlock(), createBlock("svg", {
                                class: "relative mt-px overflow-visible ml-2.5 text-sky-300",
                                fill: "none",
                                height: "6",
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                viewBox: "0 0 3 6",
                                width: "3"
                              }, [
                                createVNode("path", { d: "M0 0L3 3L0 6" })
                              ]))
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_a_empty, {
          key: "empty",
          description: "暂无文章"
        }, null, _parent));
      }
      if (unref(total) > 0) {
        _push(`<div class="mt-6 flex justify-center">`);
        _push(ssrRenderComponent(_component_a_pagination, {
          current: unref(currentPage),
          "onUpdate:current": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
          "page-size": unref(pageSize),
          "show-size-changer": false,
          total: unref(total),
          "show-less-items": "",
          onChange: handlePageChange
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DFi-V03m.mjs.map
