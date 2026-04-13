import { createVNode, defineComponent, ref, reactive, withAsyncContext, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, computed, watch, shallowRef, watchEffect, Fragment, getCurrentInstance, provide, inject, nextTick, toRaw, Transition, withDirectives, TransitionGroup, vShow, cloneVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_1, x as service, u as useConfigInject, d as useProviderSize, e as useProviderDisabled, h as useInjectGlobalForm, c as classNames, w as warning$1, f as filterEmpty, v as useInjectDisabled, g as genComponentStyleHook, m as merge, P as PropTypes, k as functionType, b as booleanType, n as stringType, s as someType, o as anyType, p as objectType, t as tuple, a as useLocaleReceiver, l as localeValues, q as eventType, r as resetComponent, j as warning, i as isValidElement } from './request-BU3wK0UY.mjs';
import { I as Icon, u as useSiteStore, a as useAsyncData, b as api$1, L as LoadingOutlined, C as CloseCircleFilled, E as ExclamationCircleFilled, c as CheckCircleFilled, g as getTransitionGroupProps, d as getTransitionProps } from './siteStore-MquY96fb.mjs';
import { u as useHead, a as useSeoMeta } from './composables-CXKIgu2I.mjs';
import _objectSpread$3 from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import cloneDeep from 'lodash-es/cloneDeep.js';
import { _ as __nuxt_component_0, u as useProvideFormItemContext, F as FormItemInputContext, a as useInjectFormItemContext, g as getMergedStatus, b as useStyle$1, c as getStatusClassNames, N as NoFormStatus, d as useResponsiveObserver, r as responsiveArray, B as BaseInput$1, R as ResizeObserver, e as FormItemRest, S as SearchOutlined } from './index-BPay6gtQ.mjs';
import RawAsyncValidator from 'async-validator';
import find from 'lodash-es/find.js';
import { B as Button, z as zoomIn, _ as __nuxt_component_1$1 } from './index-36ErndQZ.mjs';
import isEqual from 'lodash-es/isEqual.js';
import compute from 'compute-scroll-into-view';
import { i as initDefaultProps } from './initDefaultProps-C-dWF3aS.mjs';
import intersection from 'lodash-es/intersection.js';
import debounce from 'lodash-es/debounce.js';
import omit$1 from 'lodash-es/omit.js';
import { u as useCompactItemContext, o as omit, N as NoCompactStyle, c as cloneElement, w as wrapperRaf } from './firstNotUndefined-D8bvNvh_.mjs';
import isPlainObject from 'lodash-es/isPlainObject.js';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import 'axios';
import './server.mjs';
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
import 'pinia';
import 'vue-router';
import 'resize-observer-polyfill';
import 'dom-align';
import 'lodash-es';

// This icon file is generated automatically.
var QuestionCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, "name": "question-circle", "theme": "outlined" };

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QuestionCircleOutlined = function QuestionCircleOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$2({}, p, {
    "icon": QuestionCircleOutlined$1
  }), null);
};

QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';
QuestionCircleOutlined.inheritAttrs = false;

function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }
  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
      top = _ref.top,
      left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: 'start',
    inline: 'nearest'
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(isTargetAttached ? compute(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(compute(target, computeOptions), computeOptions.behavior);
}

// This icon file is generated automatically.
var EyeOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EyeOutlined = function EyeOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": EyeOutlined$1
  }), null);
};

EyeOutlined.displayName = 'EyeOutlined';
EyeOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var EyeInvisibleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": EyeInvisibleOutlined$1
  }), null);
};

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
EyeInvisibleOutlined.inheritAttrs = false;

const genCollapseMotion = (token) => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  const originClass = node.className;
  return ` ${originClass} `.indexOf(` ${className} `) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = `${node.className} ${className}`;
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      const originClass = node.className;
      node.className = ` ${originClass} `.replace(` ${className} `, " ");
    }
  }
}
const collapseMotion = function() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse";
  let appear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return {
    name,
    appear,
    css: true,
    onBeforeEnter: (node) => {
      node.style.height = "0px";
      node.style.opacity = "0";
      addClass(node, name);
    },
    onEnter: (node) => {
      nextTick(() => {
        node.style.height = `${node.scrollHeight}px`;
        node.style.opacity = "1";
      });
    },
    onAfterEnter: (node) => {
      if (node) {
        removeClass(node, name);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: (node) => {
      addClass(node, name);
      node.style.height = `${node.offsetHeight}px`;
      node.style.opacity = null;
    },
    onLeave: (node) => {
      setTimeout(() => {
        node.style.height = "0px";
        node.style.opacity = "0";
      });
    },
    onAfterLeave: (node) => {
      if (node) {
        removeClass(node, name);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
const useFlexGapSupport = (() => {
  const flexible = shallowRef(false);
  return flexible;
});
const RowContextKey = /* @__PURE__ */ Symbol("rowContextKey");
const useProvideRow = (state) => {
  provide(RowContextKey, state);
};
const useInjectRow = () => {
  return inject(RowContextKey, {
    gutter: computed(() => void 0),
    wrap: computed(() => void 0),
    supportFlexGap: computed(() => void 0)
  });
};
const genGridRowStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around ": {
        justifyContent: "space-around"
      },
      "&-space-evenly ": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
};
const genGridColStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "none"
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineEnd: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "block",
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: _extends({}, genGridStyle(token, sizeCls))
});
const useRowStyle = genComponentStyleHook("Grid", (token) => [genGridRowStyle(token)]);
const useColStyle = genComponentStyleHook("Grid", (token) => {
  const gridToken = merge(token, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = {
    "-sm": gridToken.screenSMMin,
    "-md": gridToken.screenMDMin,
    "-lg": gridToken.screenLGMin,
    "-xl": gridToken.screenXLMin,
    "-xxl": gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ""), genGridStyle(gridToken, "-xs"), Object.keys(gridMediaSizesMap).map((key) => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => _extends(_extends({}, pre), cur), {})];
});
const rowProps = () => ({
  align: someType([String, Object]),
  justify: someType([String, Object]),
  prefixCls: String,
  gutter: someType([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
});
const ARow = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: false,
  props: rowProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("row", props);
    const [wrapSSR, hashId] = useRowStyle(prefixCls);
    useResponsiveObserver();
    const screens = ref({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    });
    const curScreens = ref({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false
    });
    const mergePropsByScreen = (oriProp) => {
      return computed(() => {
        if (typeof props[oriProp] === "string") {
          return props[oriProp];
        }
        if (typeof props[oriProp] !== "object") {
          return "";
        }
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (!curScreens.value[breakpoint]) continue;
          const curVal = props[oriProp][breakpoint];
          if (curVal !== void 0) {
            return curVal;
          }
        }
        return "";
      });
    };
    const mergeAlign = mergePropsByScreen("align");
    const mergeJustify = mergePropsByScreen("justify");
    const supportFlexGap = useFlexGapSupport();
    const gutter = computed(() => {
      const results = [void 0, void 0];
      const {
        gutter: gutter2 = 0
      } = props;
      const normalizedGutter = Array.isArray(gutter2) ? gutter2 : [gutter2, void 0];
      normalizedGutter.forEach((g, index) => {
        if (typeof g === "object") {
          for (let i = 0; i < responsiveArray.length; i++) {
            const breakpoint = responsiveArray[i];
            if (screens.value[breakpoint] && g[breakpoint] !== void 0) {
              results[index] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index] = g;
        }
      });
      return results;
    });
    useProvideRow({
      gutter,
      supportFlexGap,
      wrap: computed(() => props.wrap)
    });
    const classes = computed(() => classNames(prefixCls.value, {
      [`${prefixCls.value}-no-wrap`]: props.wrap === false,
      [`${prefixCls.value}-${mergeJustify.value}`]: mergeJustify.value,
      [`${prefixCls.value}-${mergeAlign.value}`]: mergeAlign.value,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl"
    }, attrs.class, hashId.value));
    const rowStyle = computed(() => {
      const gt = gutter.value;
      const style = {};
      const horizontalGutter = gt[0] != null && gt[0] > 0 ? `${gt[0] / -2}px` : void 0;
      const verticalGutter = gt[1] != null && gt[1] > 0 ? `${gt[1] / -2}px` : void 0;
      if (horizontalGutter) {
        style.marginLeft = horizontalGutter;
        style.marginRight = horizontalGutter;
      }
      if (supportFlexGap.value) {
        style.rowGap = `${gt[1]}px`;
      } else if (verticalGutter) {
        style.marginTop = verticalGutter;
        style.marginBottom = verticalGutter;
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread$3(_objectSpread$3({}, attrs), {}, {
        "class": classes.value,
        "style": _extends(_extends({}, rowStyle.value), attrs.style)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
function toArray$1(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function get(entity, path) {
  let current = entity;
  for (let i = 0; i < path.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path[i]];
  }
  return current;
}
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  const [path, ...restPath] = paths;
  let clone;
  if (!entity && typeof path === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = [...entity];
  } else {
    clone = _extends({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  let removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function getNamePath(path) {
  return toArray$1(path);
}
function getValue(store, namePath) {
  const value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  let removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  const newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some((path) => matchNamePath(path, namePath));
}
function isObject(obj) {
  return typeof obj === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function internalSetValues(store, values) {
  const newStore = Array.isArray(store) ? [...store] : _extends({}, store);
  if (!values) {
    return newStore;
  }
  Object.keys(values).forEach((key) => {
    const prevValue = newStore[key];
    const value = values[key];
    const recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : value;
  });
  return newStore;
}
function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }
  return restValues.reduce((current, newStore) => internalSetValues(current, newStore), store);
}
function cloneByNamePathList(store, namePathList) {
  let newStore = {};
  namePathList.forEach((namePath) => {
    const value = getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }
  return namePath.every((nameUnit, i) => changedNamePath[i] === nameUnit);
}
const typeTemplate = "'${name}' is not a valid ${type}";
const defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
const AsyncValidator = RawAsyncValidator;
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, (str) => {
    const key = str.slice(2, -1);
    return kv[key];
  });
}
function validateRule(name, value, rule, options, messageVariables) {
  return __awaiter(this, void 0, void 0, function* () {
    const cloneRule = _extends({}, rule);
    delete cloneRule.ruleIndex;
    delete cloneRule.trigger;
    let subRuleField = null;
    if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
      subRuleField = cloneRule.defaultField;
      delete cloneRule.defaultField;
    }
    const validator = new AsyncValidator({
      [name]: [cloneRule]
    });
    const messages = setValues({}, defaultValidateMessages, options.validateMessages);
    validator.messages(messages);
    let result = [];
    try {
      yield Promise.resolve(validator.validate({
        [name]: value
      }, _extends({}, options)));
    } catch (errObj) {
      if (errObj.errors) {
        result = errObj.errors.map((_ref, index) => {
          let {
            message
          } = _ref;
          return (
            // Wrap VueNode with `key`
            isValidElement(message) ? cloneVNode(message, {
              key: `error_${index}`
            }) : message
          );
        });
      } else {
        console.error(errObj);
        result = [messages.default()];
      }
    }
    if (!result.length && subRuleField) {
      const subResults = yield Promise.all(value.map((subValue, i) => validateRule(`${name}.${i}`, subValue, subRuleField, options, messageVariables)));
      return subResults.reduce((prev, errors) => [...prev, ...errors], []);
    }
    const kv = _extends(_extends(_extends({}, rule), {
      name,
      enum: (rule.enum || []).join(", ")
    }), messageVariables);
    const fillVariableResult = result.map((error) => {
      if (typeof error === "string") {
        return replaceMessage(error, kv);
      }
      return error;
    });
    return fillVariableResult;
  });
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  const name = namePath.join(".");
  const filledRules = rules.map((currentRule, ruleIndex) => {
    const originValidatorFunc = currentRule.validator;
    const cloneRule = _extends(_extends({}, currentRule), {
      ruleIndex
    });
    if (originValidatorFunc) {
      cloneRule.validator = (rule, val, callback) => {
        let hasPromise = false;
        const wrappedCallback = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Promise.resolve().then(() => {
            if (!hasPromise) {
              callback(...args);
            }
          });
        };
        const promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
        if (hasPromise) {
          promise.then(() => {
            callback();
          }).catch((err) => {
            callback(err || " ");
          });
        }
      };
    }
    return cloneRule;
  }).sort((_ref2, _ref3) => {
    let {
      warningOnly: w1,
      ruleIndex: i1
    } = _ref2;
    let {
      warningOnly: w2,
      ruleIndex: i2
    } = _ref3;
    if (!!w1 === !!w2) {
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  let summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
      for (let i = 0; i < filledRules.length; i += 1) {
        const rule = filledRules[i];
        const errors = yield validateRule(name, value, rule, options, messageVariables);
        if (errors.length) {
          reject([{
            errors,
            rule
          }]);
          return;
        }
      }
      resolve([]);
    }));
  } else {
    const rulePromises = filledRules.map((rule) => validateRule(name, value, rule, options, messageVariables).then((errors) => ({
      errors,
      rule
    })));
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then((errors) => {
      return Promise.reject(errors);
    });
  }
  summaryPromise.catch((e) => e);
  return summaryPromise;
}
function finishOnAllFailed(rulePromises) {
  return __awaiter(this, void 0, void 0, function* () {
    return Promise.all(rulePromises).then((errorsList) => {
      const errors = [].concat(...errorsList);
      return errors;
    });
  });
}
function finishOnFirstFailed(rulePromises) {
  return __awaiter(this, void 0, void 0, function* () {
    let count = 0;
    return new Promise((resolve) => {
      rulePromises.forEach((promise) => {
        promise.then((ruleError) => {
          if (ruleError.errors.length) {
            resolve([ruleError]);
          }
          count += 1;
          if (count === rulePromises.length) {
            resolve([]);
          }
        });
      });
    });
  });
}
const FormContextKey = /* @__PURE__ */ Symbol("formContextKey");
const useProvideForm = (state) => {
  provide(FormContextKey, state);
};
const useInjectForm = () => {
  return inject(FormContextKey, {
    name: computed(() => void 0),
    labelAlign: computed(() => "right"),
    vertical: computed(() => false),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addField: (_eventKey, _field) => {
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeField: (_eventKey) => {
    },
    model: computed(() => void 0),
    rules: computed(() => void 0),
    colon: computed(() => void 0),
    labelWrap: computed(() => void 0),
    labelCol: computed(() => void 0),
    requiredMark: computed(() => false),
    validateTrigger: computed(() => void 0),
    onValidate: () => {
    },
    validateMessages: computed(() => defaultValidateMessages)
  });
};
const FormItemPrefixContextKey = /* @__PURE__ */ Symbol("formItemPrefixContextKey");
const useProvideFormItemPrefix = (state) => {
  provide(FormItemPrefixContextKey, state);
};
const useInjectFormItemPrefix = () => {
  return inject(FormItemPrefixContextKey, {
    prefixCls: computed(() => "")
  });
};
function parseFlex(flex) {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const colProps = () => ({
  span: [String, Number],
  order: [String, Number],
  offset: [String, Number],
  push: [String, Number],
  pull: [String, Number],
  xs: {
    type: [String, Number, Object],
    default: void 0
  },
  sm: {
    type: [String, Number, Object],
    default: void 0
  },
  md: {
    type: [String, Number, Object],
    default: void 0
  },
  lg: {
    type: [String, Number, Object],
    default: void 0
  },
  xl: {
    type: [String, Number, Object],
    default: void 0
  },
  xxl: {
    type: [String, Number, Object],
    default: void 0
  },
  prefixCls: String,
  flex: [String, Number]
});
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
const Col = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: false,
  props: colProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      gutter,
      supportFlexGap,
      wrap
    } = useInjectRow();
    const {
      prefixCls,
      direction
    } = useConfigInject("col", props);
    const [wrapSSR, hashId] = useColStyle(prefixCls);
    const classes = computed(() => {
      const {
        span,
        order,
        offset,
        push,
        pull
      } = props;
      const pre = prefixCls.value;
      let sizeClassObj = {};
      sizes.forEach((size) => {
        let sizeProps = {};
        const propSize = props[size];
        if (typeof propSize === "number") {
          sizeProps.span = propSize;
        } else if (typeof propSize === "object") {
          sizeProps = propSize || {};
        }
        sizeClassObj = _extends(_extends({}, sizeClassObj), {
          [`${pre}-${size}-${sizeProps.span}`]: sizeProps.span !== void 0,
          [`${pre}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
          [`${pre}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
          [`${pre}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
          [`${pre}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
          [`${pre}-rtl`]: direction.value === "rtl"
        });
      });
      return classNames(pre, {
        [`${pre}-${span}`]: span !== void 0,
        [`${pre}-order-${order}`]: order,
        [`${pre}-offset-${offset}`]: offset,
        [`${pre}-push-${push}`]: push,
        [`${pre}-pull-${pull}`]: pull
      }, sizeClassObj, attrs.class, hashId.value);
    });
    const mergedStyle = computed(() => {
      const {
        flex
      } = props;
      const gutterVal = gutter.value;
      const style = {};
      if (gutterVal && gutterVal[0] > 0) {
        const horizontalGutter = `${gutterVal[0] / 2}px`;
        style.paddingLeft = horizontalGutter;
        style.paddingRight = horizontalGutter;
      }
      if (gutterVal && gutterVal[1] > 0 && !supportFlexGap.value) {
        const verticalGutter = `${gutterVal[1] / 2}px`;
        style.paddingTop = verticalGutter;
        style.paddingBottom = verticalGutter;
      }
      if (flex) {
        style.flex = parseFlex(flex);
        if (wrap.value === false && !style.minWidth) {
          style.minWidth = 0;
        }
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread$3(_objectSpread$3({}, attrs), {}, {
        "class": classes.value,
        "style": [mergedStyle.value, attrs.style]
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const FormItemLabel = (props, _ref) => {
  let {
    slots,
    emit,
    attrs
  } = _ref;
  var _a, _b, _c, _d, _e;
  const {
    prefixCls,
    htmlFor,
    labelCol,
    labelAlign,
    colon,
    required,
    requiredMark
  } = _extends(_extends({}, props), attrs);
  const [formLocale] = useLocaleReceiver("Form");
  const label = (_a = props.label) !== null && _a !== void 0 ? _a : (_b = slots.label) === null || _b === void 0 ? void 0 : _b.call(slots);
  if (!label) return null;
  const {
    vertical,
    labelAlign: contextLabelAlign,
    labelCol: contextLabelCol,
    labelWrap,
    colon: contextColon
  } = useInjectForm();
  const mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  const mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = classNames(labelClsBasic, mergedLabelAlign === "left" && `${labelClsBasic}-left`, mergedLabelCol.class, {
    [`${labelClsBasic}-wrap`]: !!labelWrap.value
  });
  let labelChildren = label;
  const computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  const haveColon = computedColon && !vertical.value;
  if (haveColon && typeof label === "string" && label.trim() !== "") {
    labelChildren = label.replace(/[:|：]\s*$/, "");
  }
  if (props.tooltip || slots.tooltip) {
    const tooltipNode = createVNode("span", {
      "class": `${prefixCls}-item-tooltip`
    }, [createVNode(__nuxt_component_1$1, {
      "title": props.tooltip
    }, {
      default: () => [createVNode(QuestionCircleOutlined, null, null)]
    })]);
    labelChildren = createVNode(Fragment, null, [labelChildren, slots.tooltip ? (_c = slots.tooltip) === null || _c === void 0 ? void 0 : _c.call(slots, {
      class: `${prefixCls}-item-tooltip`
    }) : tooltipNode]);
  }
  if (requiredMark === "optional" && !required) {
    labelChildren = createVNode(Fragment, null, [labelChildren, createVNode("span", {
      "class": `${prefixCls}-item-optional`
    }, [((_d = formLocale.value) === null || _d === void 0 ? void 0 : _d.optional) || ((_e = localeValues.Form) === null || _e === void 0 ? void 0 : _e.optional)])]);
  }
  const labelClassName = classNames({
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-required-mark-optional`]: requiredMark === "optional",
    [`${prefixCls}-item-no-colon`]: !computedColon
  });
  return createVNode(Col, _objectSpread$3(_objectSpread$3({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: () => [createVNode("label", {
      "for": htmlFor,
      "class": labelClassName,
      "title": typeof label === "string" ? label : "",
      "onClick": (e) => emit("click", e)
    }, [labelChildren])]
  });
};
FormItemLabel.displayName = "FormItemLabel";
FormItemLabel.inheritAttrs = false;
const genFormValidateMotionStyle = (token) => {
  const {
    componentCls
  } = token;
  const helpCls = `${componentCls}-show-help`;
  const helpItemCls = `${componentCls}-show-help-item`;
  return {
    [helpCls]: {
      // Explain holder
      transition: `opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [helpItemCls]: {
        overflow: "hidden",
        transition: `height ${token.motionDurationSlow} ${token.motionEaseInOut},
                     opacity ${token.motionDurationSlow} ${token.motionEaseInOut},
                     transform ${token.motionDurationSlow} ${token.motionEaseInOut} !important`,
        [`&${helpItemCls}-appear, &${helpItemCls}-enter`]: {
          transform: `translateY(-5px)`,
          opacity: 0,
          [`&-active`]: {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${helpItemCls}-leave-active`]: {
          transform: `translateY(-5px)`
        }
      }
    }
  };
};
const resetForm = (token) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: token.marginLG,
    padding: 0,
    color: token.colorTextDescription,
    fontSize: token.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
  },
  label: {
    fontSize: token.fontSize
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  [`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]: {
    outline: 0,
    boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }
});
const genFormSize = (token, height) => {
  const {
    formItemCls
  } = token;
  return {
    [formItemCls]: {
      [`${formItemCls}-label > label`]: {
        height
      },
      [`${formItemCls}-control-input`]: {
        minHeight: height
      }
    }
  };
};
const genFormStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [token.componentCls]: _extends(_extends(_extends({}, resetComponent(token)), resetForm(token)), {
      [`${componentCls}-text`]: {
        display: "inline-block",
        paddingInlineEnd: token.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": _extends({}, genFormSize(token, token.controlHeightSM)),
      "&-large": _extends({}, genFormSize(token, token.controlHeightLG))
    })
  };
};
const genFormItemStyle = (token) => {
  const {
    formItemCls,
    iconCls,
    componentCls,
    rootPrefixCls
  } = token;
  return {
    [formItemCls]: _extends(_extends({}, resetComponent(token)), {
      marginBottom: token.marginLG,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${rootPrefixCls}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${formItemCls}-split`]: {
          color: token.colorError
        }
      },
      "&-has-error": {
        [`${formItemCls}-split`]: {
          color: token.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${formItemCls}-label`]: {
        display: "inline-block",
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: `${token.lineHeight} - 0.25em`,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: token.controlHeight,
          color: token.colorTextHeading,
          fontSize: token.fontSize,
          [`> ${iconCls}`]: {
            fontSize: token.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${formItemCls}-required:not(${formItemCls}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: token.marginXXS,
            color: token.colorError,
            fontSize: token.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-optional`]: {
            display: "inline-block",
            marginInlineStart: token.marginXXS,
            color: token.colorTextDescription,
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-tooltip`]: {
            color: token.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: token.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: token.marginXXS / 2,
            marginInlineEnd: token.marginXS
          },
          [`&${formItemCls}-no-colon::after`]: {
            content: '" "'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${formItemCls}-control`]: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${rootPrefixCls}-col-'"]):not([class*="' ${rootPrefixCls}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: token.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [formItemCls]: {
        "&-explain, &-extra": {
          clear: "both",
          color: token.colorTextDescription,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: token.controlHeightSM,
          transition: `color ${token.motionDurationMid} ${token.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: token.colorError
          },
          "&-warning": {
            color: token.colorWarning
          }
        }
      },
      [`&-with-help ${formItemCls}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${formItemCls}-feedback-icon`]: {
        fontSize: token.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: zoomIn,
        animationDuration: token.motionDurationMid,
        animationTimingFunction: token.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: token.colorSuccess
        },
        "&-error": {
          color: token.colorError
        },
        "&-warning": {
          color: token.colorWarning
        },
        "&-validating": {
          color: token.colorPrimary
        }
      }
    })
  };
};
const genHorizontalStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    rootPrefixCls
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      [`${formItemCls}-label`]: {
        flexGrow: 0
      },
      [`${formItemCls}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // https://github.com/ant-design/ant-design/issues/32980
      [`${formItemCls}-label.${rootPrefixCls}-col-24 + ${formItemCls}-control`]: {
        minWidth: "unset"
      }
    }
  };
};
const genInlineStyle = (token) => {
  const {
    componentCls,
    formItemCls
  } = token;
  return {
    [`${componentCls}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [formItemCls]: {
        flex: "none",
        flexWrap: "nowrap",
        marginInlineEnd: token.margin,
        marginBottom: 0,
        "&-with-help": {
          marginBottom: token.marginLG
        },
        [`> ${formItemCls}-label,
        > ${formItemCls}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${formItemCls}-label`]: {
          flex: "none"
        },
        [`${componentCls}-text`]: {
          display: "inline-block"
        },
        [`${formItemCls}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
};
const makeVerticalLayoutLabel = (token) => ({
  margin: 0,
  padding: `0 0 ${token.paddingXS}px`,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      display: "none"
    }
  }
});
const makeVerticalLayout = (token) => {
  const {
    componentCls,
    formItemCls
  } = token;
  return {
    [`${formItemCls} ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    [componentCls]: {
      [formItemCls]: {
        flexWrap: "wrap",
        [`${formItemCls}-label,
          ${formItemCls}-control`]: {
          flex: "0 0 100%",
          maxWidth: "100%"
        }
      }
    }
  };
};
const genVerticalStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    rootPrefixCls
  } = token;
  return {
    [`${componentCls}-vertical`]: {
      [formItemCls]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${componentCls}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${componentCls}-vertical ${formItemCls}-label,
      .${rootPrefixCls}-col-24${formItemCls}-label,
      .${rootPrefixCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    [`@media (max-width: ${token.screenXSMax}px)`]: [makeVerticalLayout(token), {
      [componentCls]: {
        [`.${rootPrefixCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    }],
    [`@media (max-width: ${token.screenSMMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${token.screenMDMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${token.screenLGMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    }
  };
};
const useStyle = genComponentStyleHook("Form", (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const formToken = merge(token, {
    formItemCls: `${token.componentCls}-item`,
    rootPrefixCls
  });
  return [genFormStyle(formToken), genFormItemStyle(formToken), genFormValidateMotionStyle(formToken), genHorizontalStyle(formToken), genInlineStyle(formToken), genVerticalStyle(formToken), genCollapseMotion(formToken), zoomIn];
});
const ErrorList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ErrorList",
  inheritAttrs: false,
  props: ["errors", "help", "onErrorVisibleChanged", "helpStatus", "warnings"],
  setup(props, _ref) {
    let {
      attrs
    } = _ref;
    const {
      prefixCls,
      status
    } = useInjectFormItemPrefix();
    const baseClassName = computed(() => `${prefixCls.value}-item-explain`);
    const visible = computed(() => !!(props.errors && props.errors.length));
    const innerStatus = ref(status.value);
    const [, hashId] = useStyle(prefixCls);
    watch([visible, status], () => {
      if (visible.value) {
        innerStatus.value = status.value;
      }
    });
    return () => {
      var _a, _b;
      const colMItem = collapseMotion(`${prefixCls.value}-show-help-item`);
      const transitionGroupProps = getTransitionGroupProps(`${prefixCls.value}-show-help-item`, colMItem);
      transitionGroupProps.role = "alert";
      transitionGroupProps.class = [hashId.value, baseClassName.value, attrs.class, `${prefixCls.value}-show-help`];
      return createVNode(Transition, _objectSpread$3(_objectSpread$3({}, getTransitionProps(`${prefixCls.value}-show-help`)), {}, {
        "onAfterEnter": () => props.onErrorVisibleChanged(true),
        "onAfterLeave": () => props.onErrorVisibleChanged(false)
      }), {
        default: () => [withDirectives(createVNode(TransitionGroup, _objectSpread$3(_objectSpread$3({}, transitionGroupProps), {}, {
          "tag": "div"
        }), {
          default: () => [(_b = props.errors) === null || _b === void 0 ? void 0 : _b.map((error, index) => createVNode("div", {
            "key": index,
            "class": innerStatus.value ? `${baseClassName.value}-${innerStatus.value}` : ""
          }, [error]))]
        }), [[vShow, !!((_a = props.errors) === null || _a === void 0 ? void 0 : _a.length)]])]
      });
    };
  }
});
const FormItemInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  slots: Object,
  inheritAttrs: false,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status", "marginBottom", "onErrorVisibleChanged"],
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const formContext = useInjectForm();
    const {
      wrapperCol: contextWrapperCol
    } = formContext;
    const subFormContext = _extends({}, formContext);
    delete subFormContext.labelCol;
    delete subFormContext.wrapperCol;
    useProvideForm(subFormContext);
    useProvideFormItemPrefix({
      prefixCls: computed(() => props.prefixCls),
      status: computed(() => props.status)
    });
    return () => {
      var _a, _b, _c;
      const {
        prefixCls,
        wrapperCol,
        marginBottom,
        onErrorVisibleChanged,
        help = (_a = slots.help) === null || _a === void 0 ? void 0 : _a.call(slots),
        errors = filterEmpty((_b = slots.errors) === null || _b === void 0 ? void 0 : _b.call(slots)),
        // hasFeedback,
        // status,
        extra = (_c = slots.extra) === null || _c === void 0 ? void 0 : _c.call(slots)
      } = props;
      const baseClassName = `${prefixCls}-item`;
      const mergedWrapperCol = wrapperCol || (contextWrapperCol === null || contextWrapperCol === void 0 ? void 0 : contextWrapperCol.value) || {};
      const className = classNames(`${baseClassName}-control`, mergedWrapperCol.class);
      return createVNode(Col, _objectSpread$3(_objectSpread$3({}, mergedWrapperCol), {}, {
        "class": className
      }), {
        default: () => {
          var _a2;
          return createVNode(Fragment, null, [createVNode("div", {
            "class": `${baseClassName}-control-input`
          }, [createVNode("div", {
            "class": `${baseClassName}-control-input-content`
          }, [(_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots)])]), marginBottom !== null || errors.length ? createVNode("div", {
            "style": {
              display: "flex",
              flexWrap: "nowrap"
            }
          }, [createVNode(ErrorList, {
            "errors": errors,
            "help": help,
            "class": `${baseClassName}-explain-connected`,
            "onErrorVisibleChanged": onErrorVisibleChanged
          }, null), !!marginBottom && createVNode("div", {
            "style": {
              width: 0,
              height: `${marginBottom}px`
            }
          }, null)]) : null, extra ? createVNode("div", {
            "class": `${baseClassName}-extra`
          }, [extra]) : null]);
        }
      });
    };
  }
});
function useDebounce(value) {
  const cacheValue = shallowRef(value.value.slice());
  let timeout = null;
  watchEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cacheValue.value = value.value;
    }, value.value.length ? 0 : 10);
  });
  return cacheValue;
}
tuple("success", "warning", "error", "validating", "");
const iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined
};
function getPropByPath$1(obj, namePathList, strict) {
  let tempObj = obj;
  const keyArr = namePathList;
  let i = 0;
  try {
    for (let len = keyArr.length; i < len - 1; ++i) {
      if (!tempObj && !strict) break;
      const key = keyArr[i];
      if (key in tempObj) {
        tempObj = tempObj[key];
      } else {
        if (strict) {
          throw Error("please transfer a valid name path to form item!");
        }
        break;
      }
    }
    if (strict && !tempObj) {
      throw Error("please transfer a valid name path to form item!");
    }
  } catch (error) {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : void 0
  };
}
const formItemProps = () => ({
  htmlFor: String,
  prefixCls: String,
  label: PropTypes.any,
  help: PropTypes.any,
  extra: PropTypes.any,
  labelCol: {
    type: Object
  },
  wrapperCol: {
    type: Object
  },
  hasFeedback: {
    type: Boolean,
    default: false
  },
  colon: {
    type: Boolean,
    default: void 0
  },
  labelAlign: String,
  prop: {
    type: [String, Number, Array]
  },
  name: {
    type: [String, Number, Array]
  },
  rules: [Array, Object],
  autoLink: {
    type: Boolean,
    default: true
  },
  required: {
    type: Boolean,
    default: void 0
  },
  validateFirst: {
    type: Boolean,
    default: void 0
  },
  validateStatus: PropTypes.oneOf(tuple("", "success", "warning", "error", "validating")),
  validateTrigger: {
    type: [String, Array]
  },
  messageVariables: {
    type: Object
  },
  hidden: Boolean,
  noStyle: Boolean,
  tooltip: String
});
let indexGuid = 0;
const defaultItemNamePrefixCls = "form_item";
const __nuxt_component_3 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: false,
  __ANT_NEW_FORM_ITEM: true,
  props: formItemProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose
    } = _ref;
    warning$1(props.prop === void 0);
    const eventKey = `form-item-${++indexGuid}`;
    const {
      prefixCls
    } = useConfigInject("form", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const itemRef = shallowRef();
    const formContext = useInjectForm();
    const fieldName = computed(() => props.name || props.prop);
    const errors = shallowRef([]);
    const validateDisabled = shallowRef(false);
    const inputRef = shallowRef();
    const namePath = computed(() => {
      const val = fieldName.value;
      return getNamePath(val);
    });
    const fieldId = computed(() => {
      if (!namePath.value.length) {
        return void 0;
      } else {
        const formName = formContext.name.value;
        const mergedId = namePath.value.join("_");
        return formName ? `${formName}_${mergedId}` : `${defaultItemNamePrefixCls}_${mergedId}`;
      }
    });
    const getNewFieldValue = () => {
      const model = formContext.model.value;
      if (!model || !fieldName.value) {
        return;
      } else {
        return getPropByPath$1(model, namePath.value, true).v;
      }
    };
    const fieldValue = computed(() => getNewFieldValue());
    const initialValue = shallowRef(cloneDeep(fieldValue.value));
    const mergedValidateTrigger = computed(() => {
      let validateTrigger = props.validateTrigger !== void 0 ? props.validateTrigger : formContext.validateTrigger.value;
      validateTrigger = validateTrigger === void 0 ? "change" : validateTrigger;
      return toArray$1(validateTrigger);
    });
    const rulesRef = computed(() => {
      let formRules = formContext.rules.value;
      const selfRules = props.rules;
      const requiredRule = props.required !== void 0 ? {
        required: !!props.required,
        trigger: mergedValidateTrigger.value
      } : [];
      const prop = getPropByPath$1(formRules, namePath.value);
      formRules = formRules ? prop.o[prop.k] || prop.v : [];
      const rules = [].concat(selfRules || formRules || []);
      if (find(rules, (rule) => rule.required)) {
        return rules;
      } else {
        return rules.concat(requiredRule);
      }
    });
    const isRequired2 = computed(() => {
      const rules = rulesRef.value;
      let isRequired3 = false;
      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired3 = true;
            return false;
          }
          return true;
        });
      }
      return isRequired3 || props.required;
    });
    const validateState = shallowRef();
    watchEffect(() => {
      validateState.value = props.validateStatus;
    });
    const messageVariables = computed(() => {
      let variables = {};
      if (typeof props.label === "string") {
        variables.label = props.label;
      } else if (props.name) {
        variables.label = String(props.name);
      }
      if (props.messageVariables) {
        variables = _extends(_extends({}, variables), props.messageVariables);
      }
      return variables;
    });
    const validateRules$1 = (options) => {
      if (namePath.value.length === 0) {
        return;
      }
      const {
        validateFirst = false
      } = props;
      const {
        triggerName
      } = options || {};
      let filteredRules = rulesRef.value;
      if (triggerName) {
        filteredRules = filteredRules.filter((rule) => {
          const {
            trigger
          } = rule;
          if (!trigger && !mergedValidateTrigger.value.length) {
            return true;
          }
          const triggerList = toArray$1(trigger || mergedValidateTrigger.value);
          return triggerList.includes(triggerName);
        });
      }
      if (!filteredRules.length) {
        return Promise.resolve();
      }
      const promise = validateRules(namePath.value, fieldValue.value, filteredRules, _extends({
        validateMessages: formContext.validateMessages.value
      }, options), validateFirst, messageVariables.value);
      validateState.value = "validating";
      errors.value = [];
      promise.catch((e) => e).then(function() {
        let results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (validateState.value === "validating") {
          const res = results.filter((result) => result && result.errors.length);
          validateState.value = res.length ? "error" : "success";
          errors.value = res.map((r) => r.errors);
          formContext.onValidate(fieldName.value, !errors.value.length, errors.value.length ? toRaw(errors.value[0]) : null);
        }
      });
      return promise;
    };
    const onFieldBlur = () => {
      validateRules$1({
        triggerName: "blur"
      });
    };
    const onFieldChange = () => {
      if (validateDisabled.value) {
        validateDisabled.value = false;
        return;
      }
      validateRules$1({
        triggerName: "change"
      });
    };
    const clearValidate = () => {
      validateState.value = props.validateStatus;
      validateDisabled.value = false;
      errors.value = [];
    };
    const resetField = () => {
      var _a;
      validateState.value = props.validateStatus;
      validateDisabled.value = true;
      errors.value = [];
      const model = formContext.model.value || {};
      const value = fieldValue.value;
      const prop = getPropByPath$1(model, namePath.value, true);
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat((_a = initialValue.value) !== null && _a !== void 0 ? _a : []);
      } else {
        prop.o[prop.k] = initialValue.value;
      }
      nextTick(() => {
        validateDisabled.value = false;
      });
    };
    const htmlFor = computed(() => {
      return props.htmlFor === void 0 ? fieldId.value : props.htmlFor;
    });
    const onLabelClick = () => {
      const id = htmlFor.value;
      if (!id || !inputRef.value) {
        return;
      }
      const control = inputRef.value.$el.querySelector(`[id="${id}"]`);
      if (control && control.focus) {
        control.focus();
      }
    };
    expose({
      onFieldBlur,
      onFieldChange,
      clearValidate,
      resetField
    });
    useProvideFormItemContext({
      id: fieldId,
      onFieldBlur: () => {
        if (props.autoLink) {
          onFieldBlur();
        }
      },
      onFieldChange: () => {
        if (props.autoLink) {
          onFieldChange();
        }
      },
      clearValidate
    }, computed(() => {
      return !!(props.autoLink && formContext.model.value && fieldName.value);
    }));
    let registered = false;
    watch(fieldName, (val) => {
      if (val) {
        if (!registered) {
          registered = true;
          formContext.addField(eventKey, {
            fieldValue,
            fieldId,
            fieldName,
            resetField,
            clearValidate,
            namePath,
            validateRules: validateRules$1,
            rules: rulesRef
          });
        }
      } else {
        registered = false;
        formContext.removeField(eventKey);
      }
    }, {
      immediate: true
    });
    const debounceErrors = useDebounce(errors);
    const mergedValidateStatus = computed(() => {
      if (props.validateStatus !== void 0) {
        return props.validateStatus;
      } else if (debounceErrors.value.length) {
        return "error";
      }
      return validateState.value;
    });
    const itemClassName = computed(() => ({
      [`${prefixCls.value}-item`]: true,
      [hashId.value]: true,
      // Status
      [`${prefixCls.value}-item-has-feedback`]: mergedValidateStatus.value && props.hasFeedback,
      [`${prefixCls.value}-item-has-success`]: mergedValidateStatus.value === "success",
      [`${prefixCls.value}-item-has-warning`]: mergedValidateStatus.value === "warning",
      [`${prefixCls.value}-item-has-error`]: mergedValidateStatus.value === "error",
      [`${prefixCls.value}-item-is-validating`]: mergedValidateStatus.value === "validating",
      [`${prefixCls.value}-item-hidden`]: props.hidden
    }));
    const formItemInputContext = reactive({});
    FormItemInputContext.useProvide(formItemInputContext);
    watchEffect(() => {
      let feedbackIcon;
      if (props.hasFeedback) {
        const IconNode = mergedValidateStatus.value && iconMap[mergedValidateStatus.value];
        feedbackIcon = IconNode ? createVNode("span", {
          "class": classNames(`${prefixCls.value}-item-feedback-icon`, `${prefixCls.value}-item-feedback-icon-${mergedValidateStatus.value}`)
        }, [createVNode(IconNode, null, null)]) : null;
      }
      _extends(formItemInputContext, {
        status: mergedValidateStatus.value,
        hasFeedback: props.hasFeedback,
        feedbackIcon,
        isFormItemInput: true
      });
    });
    const marginBottom = shallowRef(null);
    const showMarginOffset = shallowRef(false);
    const onErrorVisibleChanged = (nextVisible) => {
      if (!nextVisible) {
        marginBottom.value = null;
      }
    };
    return () => {
      var _a, _b;
      if (props.noStyle) return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      const help = (_b = props.help) !== null && _b !== void 0 ? _b : slots.help ? filterEmpty(slots.help()) : null;
      const withHelp = !!(help !== void 0 && help !== null && Array.isArray(help) && help.length || debounceErrors.value.length);
      showMarginOffset.value = withHelp;
      return wrapSSR(createVNode("div", {
        "class": [itemClassName.value, withHelp ? `${prefixCls.value}-item-with-help` : "", attrs.class],
        "ref": itemRef
      }, [createVNode(ARow, _objectSpread$3(_objectSpread$3({}, attrs), {}, {
        "class": `${prefixCls.value}-item-row`,
        "key": "row"
      }), {
        default: () => {
          var _a2, _b2;
          return createVNode(Fragment, null, [createVNode(FormItemLabel, _objectSpread$3(_objectSpread$3({}, props), {}, {
            "htmlFor": htmlFor.value,
            "required": isRequired2.value,
            "requiredMark": formContext.requiredMark.value,
            "prefixCls": prefixCls.value,
            "onClick": onLabelClick,
            "label": props.label
          }), {
            label: slots.label,
            tooltip: slots.tooltip
          }), createVNode(FormItemInput, _objectSpread$3(_objectSpread$3({}, props), {}, {
            "errors": help !== void 0 && help !== null ? toArray$1(help) : debounceErrors.value,
            "marginBottom": marginBottom.value,
            "prefixCls": prefixCls.value,
            "status": mergedValidateStatus.value,
            "ref": inputRef,
            "help": help,
            "extra": (_a2 = props.extra) !== null && _a2 !== void 0 ? _a2 : (_b2 = slots.extra) === null || _b2 === void 0 ? void 0 : _b2.call(slots),
            "onErrorVisibleChanged": onErrorVisibleChanged
          }), {
            default: slots.default
          })]);
        }
      }), !!marginBottom.value && createVNode("div", {
        "class": `${prefixCls.value}-margin-offset`,
        "style": {
          marginBottom: `-${marginBottom.value}px`
        }
      }, null)]));
    };
  }
});
function allPromiseFinish(promiseList) {
  let hasError = false;
  let count = promiseList.length;
  const results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.catch((e) => {
        hasError = true;
        return e;
      }).then((result) => {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
function isRequired(rules) {
  let isRequired2 = false;
  if (rules && rules.length) {
    rules.every((rule) => {
      if (rule.required) {
        isRequired2 = true;
        return false;
      }
      return true;
    });
  }
  return isRequired2;
}
function toArray(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  const keyArr = path.split(".");
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    const key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error("please transfer a valid name path to validate!");
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
    isValid: tempObj && keyArr[i] in tempObj
  };
}
function useForm(modelRef) {
  let rulesRef = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ref({});
  let options = arguments.length > 2 ? arguments[2] : void 0;
  const initialModel = cloneDeep(unref(modelRef));
  const validateInfos = reactive({});
  const rulesKeys = shallowRef([]);
  const resetFields = (newValues) => {
    _extends(unref(modelRef), _extends(_extends({}, cloneDeep(initialModel)), newValues));
    nextTick(() => {
      Object.keys(validateInfos).forEach((key) => {
        validateInfos[key] = {
          autoLink: false,
          required: isRequired(unref(rulesRef)[key])
        };
      });
    });
  };
  const filterRules = function() {
    let rules = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let trigger = arguments.length > 1 ? arguments[1] : void 0;
    if (!trigger.length) {
      return rules;
    } else {
      return rules.filter((rule) => {
        const triggerList = toArray(rule.trigger || "change");
        return intersection(triggerList, trigger).length;
      });
    }
  };
  let lastValidatePromise = null;
  const validateFields = function(names) {
    let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let strict = arguments.length > 2 ? arguments[2] : void 0;
    const promiseList = [];
    const values = {};
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const prop = getPropByPath(unref(modelRef), name, strict);
      if (!prop.isValid) continue;
      values[name] = prop.v;
      const rules = filterRules(unref(rulesRef)[name], toArray(option && option.trigger));
      if (rules.length) {
        promiseList.push(validateField(name, prop.v, rules, option || {}).then(() => ({
          name,
          errors: [],
          warnings: []
        })).catch((ruleErrors) => {
          const mergedErrors = [];
          const mergedWarnings = [];
          ruleErrors.forEach((_ref) => {
            let {
              rule: {
                warningOnly
              },
              errors
            } = _ref;
            if (warningOnly) {
              mergedWarnings.push(...errors);
            } else {
              mergedErrors.push(...errors);
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    }
    const summaryPromise = allPromiseFinish(promiseList);
    lastValidatePromise = summaryPromise;
    const returnPromise = summaryPromise.then(() => {
      if (lastValidatePromise === summaryPromise) {
        return Promise.resolve(values);
      }
      return Promise.reject([]);
    }).catch((results) => {
      const errorList = results.filter((result) => result && result.errors.length);
      return errorList.length ? Promise.reject({
        values,
        errorFields: errorList,
        outOfDate: lastValidatePromise !== summaryPromise
      }) : Promise.resolve(values);
    });
    returnPromise.catch((e) => e);
    return returnPromise;
  };
  const validateField = function(name, value, rules) {
    let option = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const promise = validateRules([name], value, rules, _extends({
      validateMessages: defaultValidateMessages
    }, option), !!option.validateFirst);
    if (!validateInfos[name]) {
      return promise.catch((e) => e);
    }
    validateInfos[name].validateStatus = "validating";
    promise.catch((e) => e).then(function() {
      let results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var _a;
      if (validateInfos[name].validateStatus === "validating") {
        const res = results.filter((result) => result && result.errors.length);
        validateInfos[name].validateStatus = res.length ? "error" : "success";
        validateInfos[name].help = res.length ? res.map((r) => r.errors) : null;
        (_a = options === null || options === void 0 ? void 0 : options.onValidate) === null || _a === void 0 ? void 0 : _a.call(options, name, !res.length, res.length ? toRaw(validateInfos[name].help[0]) : null);
      }
    });
    return promise;
  };
  const validate = (names, option) => {
    let keys = [];
    let strict = true;
    if (!names) {
      strict = false;
      keys = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys = names;
    } else {
      keys = [names];
    }
    const promises = validateFields(keys, option || {}, strict);
    promises.catch((e) => e);
    return promises;
  };
  const clearValidate = (names) => {
    let keys = [];
    if (!names) {
      keys = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys = names;
    } else {
      keys = [names];
    }
    keys.forEach((key) => {
      validateInfos[key] && _extends(validateInfos[key], {
        validateStatus: "",
        help: null
      });
    });
  };
  const mergeValidateInfo = (items) => {
    const info = {
      autoLink: false
    };
    const help = [];
    const infos = Array.isArray(items) ? items : [items];
    for (let i = 0; i < infos.length; i++) {
      const arg = infos[i];
      if ((arg === null || arg === void 0 ? void 0 : arg.validateStatus) === "error") {
        info.validateStatus = "error";
        arg.help && help.push(arg.help);
      }
      info.required = info.required || (arg === null || arg === void 0 ? void 0 : arg.required);
    }
    info.help = help;
    return info;
  };
  let oldModel = initialModel;
  let isFirstTime = true;
  const modelFn = (model) => {
    const names = [];
    rulesKeys.value.forEach((key) => {
      const prop = getPropByPath(model, key, false);
      const oldProp = getPropByPath(oldModel, key, false);
      const isFirstValidation = isFirstTime && (options === null || options === void 0 ? void 0 : options.immediate) && prop.isValid;
      if (isFirstValidation || !isEqual(prop.v, oldProp.v)) {
        names.push(key);
      }
    });
    validate(names, {
      trigger: "change"
    });
    isFirstTime = false;
    oldModel = cloneDeep(toRaw(model));
  };
  const debounceOptions = options === null || options === void 0 ? void 0 : options.debounce;
  let first = true;
  watch(rulesRef, () => {
    rulesKeys.value = rulesRef ? Object.keys(unref(rulesRef)) : [];
    if (!first && options && options.validateOnRuleChange) {
      validate();
    }
    first = false;
  }, {
    deep: true,
    immediate: true
  });
  watch(rulesKeys, () => {
    const newValidateInfos = {};
    rulesKeys.value.forEach((key) => {
      newValidateInfos[key] = _extends({}, validateInfos[key], {
        autoLink: false,
        required: isRequired(unref(rulesRef)[key])
      });
      delete validateInfos[key];
    });
    for (const key in validateInfos) {
      if (Object.prototype.hasOwnProperty.call(validateInfos, key)) {
        delete validateInfos[key];
      }
    }
    _extends(validateInfos, newValidateInfos);
  }, {
    immediate: true
  });
  watch(modelRef, debounceOptions && debounceOptions.wait ? debounce(modelFn, debounceOptions.wait, omit$1(debounceOptions, ["wait"])) : modelFn, {
    immediate: options && !!options.immediate,
    deep: true
  });
  return {
    modelRef,
    rulesRef,
    initialModel,
    validateInfos,
    resetFields,
    validate,
    validateField,
    mergeValidateInfo,
    clearValidate
  };
}
const formProps = () => ({
  layout: PropTypes.oneOf(tuple("horizontal", "inline", "vertical")),
  labelCol: objectType(),
  wrapperCol: objectType(),
  colon: booleanType(),
  labelAlign: stringType(),
  labelWrap: booleanType(),
  prefixCls: String,
  requiredMark: someType([String, Boolean]),
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark: booleanType(),
  model: PropTypes.object,
  rules: objectType(),
  validateMessages: objectType(),
  validateOnRuleChange: booleanType(),
  // 提交失败自动滚动到第一个错误字段
  scrollToFirstError: anyType(),
  onSubmit: functionType(),
  name: String,
  validateTrigger: someType([String, Array]),
  size: stringType(),
  disabled: booleanType(),
  onValuesChange: functionType(),
  onFieldsChange: functionType(),
  onFinish: functionType(),
  onFinishFailed: functionType(),
  onValidate: functionType()
});
function isEqualName(name1, name2) {
  return isEqual(toArray$1(name1), toArray$1(name2));
}
const Form = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: false,
  props: initDefaultProps(formProps(), {
    layout: "horizontal",
    hideRequiredMark: false,
    colon: true
  }),
  Item: __nuxt_component_3,
  useForm,
  // emits: ['finishFailed', 'submit', 'finish', 'validate'],
  setup(props, _ref) {
    let {
      emit,
      slots,
      expose,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction,
      form: contextForm,
      size,
      disabled
    } = useConfigInject("form", props);
    const requiredMark = computed(() => props.requiredMark === "" || props.requiredMark);
    const mergedRequiredMark = computed(() => {
      var _a;
      if (requiredMark.value !== void 0) {
        return requiredMark.value;
      }
      if (contextForm && ((_a = contextForm.value) === null || _a === void 0 ? void 0 : _a.requiredMark) !== void 0) {
        return contextForm.value.requiredMark;
      }
      if (props.hideRequiredMark) {
        return false;
      }
      return true;
    });
    useProviderSize(size);
    useProviderDisabled(disabled);
    const mergedColon = computed(() => {
      var _a, _b;
      return (_a = props.colon) !== null && _a !== void 0 ? _a : (_b = contextForm.value) === null || _b === void 0 ? void 0 : _b.colon;
    });
    const {
      validateMessages: globalValidateMessages
    } = useInjectGlobalForm();
    const validateMessages = computed(() => {
      return _extends(_extends(_extends({}, defaultValidateMessages), globalValidateMessages.value), props.validateMessages);
    });
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const formClassName = computed(() => classNames(prefixCls.value, {
      [`${prefixCls.value}-${props.layout}`]: true,
      [`${prefixCls.value}-hide-required-mark`]: mergedRequiredMark.value === false,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-${size.value}`]: size.value
    }, hashId.value));
    const lastValidatePromise = ref();
    const fields = {};
    const addField = (eventKey, field) => {
      fields[eventKey] = field;
    };
    const removeField = (eventKey) => {
      delete fields[eventKey];
    };
    const getFieldsByNameList = (nameList) => {
      const provideNameList = !!nameList;
      const namePathList = provideNameList ? toArray$1(nameList).map(getNamePath) : [];
      if (!provideNameList) {
        return Object.values(fields);
      } else {
        return Object.values(fields).filter((field) => namePathList.findIndex((namePath) => isEqualName(namePath, field.fieldName.value)) > -1);
      }
    };
    const resetFields = (name) => {
      if (!props.model) {
        return;
      }
      getFieldsByNameList(name).forEach((field) => {
        field.resetField();
      });
    };
    const clearValidate = (name) => {
      getFieldsByNameList(name).forEach((field) => {
        field.clearValidate();
      });
    };
    const handleFinishFailed = (errorInfo) => {
      const {
        scrollToFirstError
      } = props;
      emit("finishFailed", errorInfo);
      if (scrollToFirstError && errorInfo.errorFields.length) {
        let scrollToFieldOptions = {};
        if (typeof scrollToFirstError === "object") {
          scrollToFieldOptions = scrollToFirstError;
        }
        scrollToField(errorInfo.errorFields[0].name, scrollToFieldOptions);
      }
    };
    const validate = function() {
      return validateField(...arguments);
    };
    const scrollToField = function(name) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const fields2 = getFieldsByNameList(name ? [name] : void 0);
      if (fields2.length) {
        const fieldId = fields2[0].fieldId.value;
        const node = fieldId ? (void 0).getElementById(fieldId) : null;
        if (node) {
          scrollIntoView(node, _extends({
            scrollMode: "if-needed",
            block: "nearest"
          }, options));
        }
      }
    };
    const getFieldsValue = function() {
      let nameList = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (nameList === true) {
        const allNameList = [];
        Object.values(fields).forEach((_ref2) => {
          let {
            namePath
          } = _ref2;
          allNameList.push(namePath.value);
        });
        return cloneByNamePathList(props.model, allNameList);
      } else {
        return cloneByNamePathList(props.model, nameList);
      }
    };
    const validateFields = (nameList, options) => {
      if (!props.model) {
        return Promise.reject("Form `model` is required for validateFields to work.");
      }
      const provideNameList = !!nameList;
      const namePathList = provideNameList ? toArray$1(nameList).map(getNamePath) : [];
      const promiseList = [];
      Object.values(fields).forEach((field) => {
        var _a;
        if (!provideNameList) {
          namePathList.push(field.namePath.value);
        }
        if (!((_a = field.rules) === null || _a === void 0 ? void 0 : _a.value.length)) {
          return;
        }
        const fieldNamePath = field.namePath.value;
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
          const promise = field.validateRules(_extends({
            validateMessages: validateMessages.value
          }, options));
          promiseList.push(promise.then(() => ({
            name: fieldNamePath,
            errors: [],
            warnings: []
          })).catch((ruleErrors) => {
            const mergedErrors = [];
            const mergedWarnings = [];
            ruleErrors.forEach((_ref3) => {
              let {
                rule: {
                  warningOnly
                },
                errors
              } = _ref3;
              if (warningOnly) {
                mergedWarnings.push(...errors);
              } else {
                mergedErrors.push(...errors);
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      const summaryPromise = allPromiseFinish(promiseList);
      lastValidatePromise.value = summaryPromise;
      const returnPromise = summaryPromise.then(() => {
        if (lastValidatePromise.value === summaryPromise) {
          return Promise.resolve(getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      }).catch((results) => {
        const errorList = results.filter((result) => result && result.errors.length);
        return Promise.reject({
          values: getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: lastValidatePromise.value !== summaryPromise
        });
      });
      returnPromise.catch((e) => e);
      return returnPromise;
    };
    const validateField = function() {
      return validateFields(...arguments);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();
      emit("submit", e);
      if (props.model) {
        const res = validateFields();
        res.then((values) => {
          emit("finish", values);
        }).catch((errors) => {
          handleFinishFailed(errors);
        });
      }
    };
    expose({
      resetFields,
      clearValidate,
      validateFields,
      getFieldsValue,
      validate,
      scrollToField
    });
    useProvideForm({
      model: computed(() => props.model),
      name: computed(() => props.name),
      labelAlign: computed(() => props.labelAlign),
      labelCol: computed(() => props.labelCol),
      labelWrap: computed(() => props.labelWrap),
      wrapperCol: computed(() => props.wrapperCol),
      vertical: computed(() => props.layout === "vertical"),
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      validateTrigger: computed(() => props.validateTrigger),
      rules: computed(() => props.rules),
      addField,
      removeField,
      onValidate: (name, status, errors) => {
        emit("validate", name, status, errors);
      },
      validateMessages
    });
    watch(() => props.rules, () => {
      if (props.validateOnRuleChange) {
        validateFields();
      }
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("form", _objectSpread$3(_objectSpread$3({}, attrs), {}, {
        "onSubmit": handleSubmit,
        "class": [formClassName.value, attrs.class]
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
Form.useInjectFormItemContext = useInjectFormItemContext;
Form.ItemRest = FormItemRest;
Form.install = function(app) {
  app.component(Form.name, Form);
  app.component(Form.Item.name, Form.Item);
  app.component(FormItemRest.name, FormItemRest);
  return app;
};
const isValid$1 = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasPrefixSuffix(propsAndSlots) {
  return isValid$1(propsAndSlots.prefix) || isValid$1(propsAndSlots.suffix) || isValid$1(propsAndSlots.allowClear);
}
function hasAddon$1(propsAndSlots) {
  return isValid$1(propsAndSlots.addonBefore) || isValid$1(propsAndSlots.addonAfter);
}
function fixControlledValue(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  const event = e;
  if (e.type === "click") {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    const currentTarget = target.cloneNode(true);
    event.target = currentTarget;
    event.currentTarget = currentTarget;
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
const commonInputProps = () => {
  return {
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
    clearIcon: PropTypes.any,
    affixWrapperClassName: String,
    groupClassName: String,
    wrapperClassName: String,
    inputClassName: String,
    allowClear: {
      type: Boolean,
      default: void 0
    }
  };
};
const baseInputProps = () => {
  return _extends(_extends({}, commonInputProps()), {
    value: {
      type: [String, Number, Symbol],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Symbol],
      default: void 0
    },
    inputElement: PropTypes.any,
    prefixCls: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    triggerFocus: Function,
    readonly: {
      type: Boolean,
      default: void 0
    },
    handleReset: Function,
    hidden: {
      type: Boolean,
      default: void 0
    }
  });
};
const inputProps$1 = () => _extends(_extends({}, baseInputProps()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: stringType("text"),
  name: String,
  size: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  lazy: {
    type: Boolean,
    default: true
  },
  maxlength: Number,
  loading: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  showCount: {
    type: [Boolean, Object]
  },
  htmlSize: Number,
  onPressEnter: Function,
  onKeydown: Function,
  onKeyup: Function,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function,
  "onUpdate:value": Function,
  onCompositionstart: Function,
  onCompositionend: Function,
  valueModifiers: Object,
  hidden: {
    type: Boolean,
    default: void 0
  },
  status: String
});
const BaseInput = defineComponent({
  name: "BaseInput",
  inheritAttrs: false,
  props: baseInputProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const containerRef = ref();
    const onInputMouseDown = (e) => {
      var _a;
      if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        const {
          triggerFocus: triggerFocus2
        } = props;
        triggerFocus2 === null || triggerFocus2 === void 0 ? void 0 : triggerFocus2();
      }
    };
    const getClearIcon = () => {
      var _a;
      const {
        allowClear,
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix,
        prefixCls
      } = props;
      if (!allowClear) {
        return null;
      }
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      const iconNode = ((_a = slots.clearIcon) === null || _a === void 0 ? void 0 : _a.call(slots)) || "*";
      return createVNode("span", {
        "onClick": handleReset,
        "onMousedown": (e) => e.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button",
        "tabindex": -1
      }, [iconNode]);
    };
    return () => {
      var _a, _b;
      const {
        focused,
        value,
        disabled,
        allowClear,
        readonly,
        hidden,
        prefixCls,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        inputElement,
        affixWrapperClassName,
        wrapperClassName,
        groupClassName
      } = props;
      let element = cloneElement(inputElement, {
        value,
        hidden
      });
      if (hasPrefixSuffix({
        prefix,
        suffix,
        allowClear
      })) {
        const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
        const affixWrapperCls = classNames(affixWrapperPrefixCls, {
          [`${affixWrapperPrefixCls}-disabled`]: disabled,
          [`${affixWrapperPrefixCls}-focused`]: focused,
          [`${affixWrapperPrefixCls}-readonly`]: readonly,
          [`${affixWrapperPrefixCls}-input-with-clear-btn`]: suffix && allowClear && value
        }, !hasAddon$1({
          addonAfter,
          addonBefore
        }) && attrs.class, affixWrapperClassName);
        const suffixNode = (suffix || allowClear) && createVNode("span", {
          "class": `${prefixCls}-suffix`
        }, [getClearIcon(), suffix]);
        element = createVNode("span", {
          "class": affixWrapperCls,
          "style": attrs.style,
          "hidden": !hasAddon$1({
            addonAfter,
            addonBefore
          }) && hidden,
          "onMousedown": onInputMouseDown,
          "ref": containerRef
        }, [prefix && createVNode("span", {
          "class": `${prefixCls}-prefix`
        }, [prefix]), cloneElement(inputElement, {
          style: null,
          value,
          hidden: null
        }), suffixNode]);
      }
      if (hasAddon$1({
        addonAfter,
        addonBefore
      })) {
        const wrapperCls = `${prefixCls}-group`;
        const addonCls = `${wrapperCls}-addon`;
        const mergedWrapperClassName = classNames(`${prefixCls}-wrapper`, wrapperCls, wrapperClassName);
        const mergedGroupClassName = classNames(`${prefixCls}-group-wrapper`, attrs.class, groupClassName);
        return createVNode("span", {
          "class": mergedGroupClassName,
          "style": attrs.style,
          "hidden": hidden
        }, [createVNode("span", {
          "class": mergedWrapperClassName
        }, [addonBefore && createVNode("span", {
          "class": addonCls
        }, [addonBefore]), cloneElement(element, {
          style: null,
          hidden: null
        }), addonAfter && createVNode("span", {
          "class": addonCls
        }, [addonAfter])])]);
      }
      return element;
    };
  }
});
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const VcInput = defineComponent({
  name: "VCInput",
  inheritAttrs: false,
  props: inputProps$1(),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const stateValue = shallowRef(props.value === void 0 ? props.defaultValue : props.value);
    const focused = shallowRef(false);
    const inputRef = shallowRef();
    const rootRef = shallowRef();
    watch(() => props.value, () => {
      stateValue.value = props.value;
    });
    watch(() => props.disabled, () => {
      if (props.disabled) {
        focused.value = false;
      }
    });
    const focus = (option) => {
      if (inputRef.value) {
        triggerFocus(inputRef.value.input, option);
      }
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction) => {
      var _a;
      (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: computed(() => {
        var _a;
        return (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.input;
      }),
      stateValue,
      setSelectionRange,
      select
    });
    const triggerChange = (e) => {
      emit("change", e);
    };
    const setValue2 = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a;
          if (inputRef.value.input.value !== stateValue.value) {
            (_a = rootRef.value) === null || _a === void 0 ? void 0 : _a.$forceUpdate();
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleChange = (e) => {
      const {
        value
      } = e.target;
      if (stateValue.value === value) return;
      const newVal = e.target.value;
      resolveOnChange(inputRef.value.input, e, triggerChange);
      setValue2(newVal);
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    const handleFocus = (e) => {
      focused.value = true;
      emit("focus", e);
    };
    const handleBlur = (e) => {
      focused.value = false;
      emit("blur", e);
    };
    const handleReset = (e) => {
      resolveOnChange(inputRef.value.input, e, triggerChange);
      setValue2("", () => {
        focus();
      });
    };
    const getInputElement = () => {
      var _a, _b;
      const {
        addonBefore = slots.addonBefore,
        addonAfter = slots.addonAfter,
        disabled,
        valueModifiers = {},
        htmlSize,
        autocomplete,
        prefixCls,
        inputClassName,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        allowClear,
        type = "text"
      } = props;
      const otherProps = omit(props, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers",
        "showCount",
        "affixWrapperClassName",
        "groupClassName",
        "inputClassName",
        "wrapperClassName"
      ]);
      const inputProps2 = _extends(_extends(_extends({}, otherProps), attrs), {
        autocomplete,
        onChange: handleChange,
        onInput: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeydown: handleKeyDown,
        class: classNames(prefixCls, {
          [`${prefixCls}-disabled`]: disabled
        }, inputClassName, !hasAddon$1({
          addonAfter,
          addonBefore
        }) && !hasPrefixSuffix({
          prefix,
          suffix,
          allowClear
        }) && attrs.class),
        ref: inputRef,
        key: "ant-input",
        size: htmlSize,
        type,
        lazy: props.lazy
      });
      if (valueModifiers.lazy) {
        delete inputProps2.onInput;
      }
      if (!inputProps2.autofocus) {
        delete inputProps2.autofocus;
      }
      const inputNode = createVNode(BaseInput$1, omit(inputProps2, ["size"]), null);
      return inputNode;
    };
    const getSuffix = () => {
      var _a;
      const {
        maxlength,
        suffix = (_a = slots.suffix) === null || _a === void 0 ? void 0 : _a.call(slots),
        showCount,
        prefixCls
      } = props;
      const hasMaxLength = Number(maxlength) > 0;
      if (suffix || showCount) {
        const valueLength = [...fixControlledValue(stateValue.value)].length;
        const dataCount = typeof showCount === "object" ? showCount.formatter({
          count: valueLength,
          maxlength
        }) : `${valueLength}${hasMaxLength ? ` / ${maxlength}` : ""}`;
        return createVNode(Fragment, null, [!!showCount && createVNode("span", {
          "class": classNames(`${prefixCls}-show-count-suffix`, {
            [`${prefixCls}-show-count-has-suffix`]: !!suffix
          })
        }, [dataCount]), suffix]);
      }
      return null;
    };
    return () => {
      const {
        prefixCls,
        disabled
      } = props, rest = __rest$3(props, ["prefixCls", "disabled"]);
      return createVNode(BaseInput, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, rest), attrs), {}, {
        "ref": rootRef,
        "prefixCls": prefixCls,
        "inputElement": getInputElement(),
        "handleReset": handleReset,
        "value": fixControlledValue(stateValue.value),
        "focused": focused.value,
        "triggerFocus": focus,
        "suffix": getSuffix(),
        "disabled": disabled
      }), slots);
    };
  }
});
const inputProps = () => {
  return omit(inputProps$1(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]);
};
const textAreaProps = () => _extends(_extends({}, omit(inputProps(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
  rows: Number,
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: {
    type: Function
  },
  onCompositionstart: eventType(),
  onCompositionend: eventType(),
  valueModifiers: Object
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Input = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInput",
  inheritAttrs: false,
  props: inputProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = ref();
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props.status));
    const {
      direction,
      prefixCls,
      size,
      autocomplete
    } = useConfigInject("input", props);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const mergedSize = computed(() => {
      return compactSize.value || size.value;
    });
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const disabled = useInjectDisabled();
    const focus = (option) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus(option);
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction2) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction2);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: inputRef,
      setSelectionRange,
      select
    });
    const removePasswordTimeoutRef = ref([]);
    const removePasswordTimeout = () => {
      removePasswordTimeoutRef.value.push(setTimeout(() => {
        var _a, _b, _c, _d;
        if (((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.value) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.value) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
          (_d = inputRef.value) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
        }
      }));
    };
    const handleBlur = (e) => {
      removePasswordTimeout();
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    const handleFocus = (e) => {
      removePasswordTimeout();
      emit("focus", e);
    };
    const triggerChange = (e) => {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const {
        hasFeedback,
        feedbackIcon
      } = formItemInputContext;
      const {
        allowClear,
        bordered = true,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = (_c = slots.addonAfter) === null || _c === void 0 ? void 0 : _c.call(slots),
        addonBefore = (_d = slots.addonBefore) === null || _d === void 0 ? void 0 : _d.call(slots),
        id = (_e = formItemContext.id) === null || _e === void 0 ? void 0 : _e.value
      } = props, rest = __rest$2(props, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]);
      const suffixNode = (hasFeedback || suffix) && createVNode(Fragment, null, [suffix, hasFeedback && feedbackIcon]);
      const prefixClsValue = prefixCls.value;
      const inputHasPrefixSuffix = hasPrefixSuffix({
        prefix,
        suffix
      }) || !!hasFeedback;
      const clearIcon = slots.clearIcon || (() => createVNode(CloseCircleFilled, null, null));
      return wrapSSR(createVNode(VcInput, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, attrs), omit(rest, ["onUpdate:value", "onChange", "onInput"])), {}, {
        "onChange": triggerChange,
        "id": id,
        "disabled": (_f = props.disabled) !== null && _f !== void 0 ? _f : disabled.value,
        "ref": inputRef,
        "prefixCls": prefixClsValue,
        "autocomplete": autocomplete.value,
        "onBlur": handleBlur,
        "onFocus": handleFocus,
        "prefix": prefix,
        "suffix": suffixNode,
        "allowClear": allowClear,
        "addonAfter": addonAfter && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonAfter]
          })]
        }),
        "addonBefore": addonBefore && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonBefore]
          })]
        }),
        "class": [attrs.class, compactItemClassnames.value],
        "inputClassName": classNames({
          [`${prefixClsValue}-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-borderless`]: !bordered
        }, !inputHasPrefixSuffix && getStatusClassNames(prefixClsValue, mergedStatus.value), hashId.value),
        "affixWrapperClassName": classNames({
          [`${prefixClsValue}-affix-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-affix-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-affix-wrapper-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-affix-wrapper-borderless`]: !bordered
        }, getStatusClassNames(`${prefixClsValue}-affix-wrapper`, mergedStatus.value, hasFeedback), hashId.value),
        "wrapperClassName": classNames({
          [`${prefixClsValue}-group-rtl`]: direction.value === "rtl"
        }, hashId.value),
        "groupClassName": classNames({
          [`${prefixClsValue}-group-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-group-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-group-wrapper-rtl`]: direction.value === "rtl"
        }, getStatusClassNames(`${prefixClsValue}-group-wrapper`, mergedStatus.value, hasFeedback), hashId.value)
      }), _extends(_extends({}, slots), {
        clearIcon
      })));
    };
  }
});
const Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputGroup",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction,
      getPrefixCls
    } = useConfigInject("input-group", props);
    const formItemInputContext = FormItemInputContext.useInject();
    FormItemInputContext.useProvide(formItemInputContext, {
      isFormItemInput: false
    });
    const inputPrefixCls = computed(() => getPrefixCls("input"));
    const [wrapSSR, hashId] = useStyle$1(inputPrefixCls);
    const cls = computed(() => {
      const pre = prefixCls.value;
      return {
        [`${pre}`]: true,
        [hashId.value]: true,
        [`${pre}-lg`]: props.size === "large",
        [`${pre}-sm`]: props.size === "small",
        [`${pre}-compact`]: props.compact,
        [`${pre}-rtl`]: direction.value === "rtl"
      };
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("span", _objectSpread$3(_objectSpread$3({}, attrs), {}, {
        "class": classNames(cls.value, attrs.class)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Search = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    inputPrefixCls: String,
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: PropTypes.any,
    onSearch: {
      type: Function
    }
  }),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = shallowRef();
    const composedRef = shallowRef(false);
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const onChange = (e) => {
      emit("update:value", e.target.value);
      if (e && e.target && e.type === "click") {
        emit("search", e.target.value, e);
      }
      emit("change", e);
    };
    const onMousedown = (e) => {
      var _a;
      if ((void 0).activeElement === ((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input)) {
        e.preventDefault();
      }
    };
    const onSearch = (e) => {
      var _a, _b;
      emit("search", (_b = (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.stateValue, e);
    };
    const onPressEnter = (e) => {
      if (composedRef.value || props.loading) {
        return;
      }
      onSearch(e);
    };
    const handleOnCompositionStart = (e) => {
      composedRef.value = true;
      emit("compositionstart", e);
    };
    const handleOnCompositionEnd = (e) => {
      composedRef.value = false;
      emit("compositionend", e);
    };
    const {
      prefixCls,
      getPrefixCls,
      direction,
      size
    } = useConfigInject("input-search", props);
    const inputPrefixCls = computed(() => getPrefixCls("input", props.inputPrefixCls));
    return () => {
      var _a, _b, _c, _d;
      const {
        disabled,
        loading,
        addonAfter = (_a = slots.addonAfter) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots)
      } = props, restProps = __rest$1(props, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton = (_d = (_c = slots.enterButton) === null || _c === void 0 ? void 0 : _c.call(slots)) !== null && _d !== void 0 ? _d : false
      } = props;
      enterButton = enterButton || enterButton === "";
      const searchIcon = typeof enterButton === "boolean" ? createVNode(SearchOutlined, null, null) : null;
      const btnClassName = `${prefixCls.value}-button`;
      const enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      let button;
      const isAntdButton = enterButtonAsElement.type && isPlainObject(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;
      if (isAntdButton || enterButtonAsElement.tagName === "button") {
        button = cloneElement(enterButtonAsElement, _extends({
          onMousedown,
          onClick: onSearch,
          key: "enterButton"
        }, isAntdButton ? {
          class: btnClassName,
          size: size.value
        } : {}), false);
      } else {
        const iconOnly = searchIcon && !enterButton;
        button = createVNode(Button, {
          "class": btnClassName,
          "type": enterButton ? "primary" : void 0,
          "size": size.value,
          "disabled": disabled,
          "key": "enterButton",
          "onMousedown": onMousedown,
          "onClick": onSearch,
          "loading": loading,
          "icon": iconOnly ? searchIcon : null
        }, {
          default: () => [iconOnly ? null : searchIcon || enterButton]
        });
      }
      if (addonAfter) {
        button = [button, addonAfter];
      }
      const cls = classNames(prefixCls.value, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [`${prefixCls.value}-${size.value}`]: !!size.value,
        [`${prefixCls.value}-with-button`]: !!enterButton
      }, attrs.class);
      return createVNode(Input, _objectSpread$3(_objectSpread$3(_objectSpread$3({
        "ref": inputRef
      }, omit(restProps, ["onUpdate:value", "onSearch", "enterButton"])), attrs), {}, {
        "onPressEnter": onPressEnter,
        "onCompositionstart": handleOnCompositionStart,
        "onCompositionend": handleOnCompositionEnd,
        "size": size.value,
        "prefixCls": inputPrefixCls.value,
        "addonAfter": button,
        "suffix": suffix,
        "onChange": onChange,
        "class": cls,
        "disabled": disabled
      }), slots);
    };
  }
});
const isValid = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasAddon(propsAndSlots) {
  return isValid(propsAndSlots.addonBefore) || isValid(propsAndSlots.addonAfter);
}
const ClearableInputType = ["text", "input"];
const ClearableLabeledInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    inputType: PropTypes.oneOf(tuple("text", "input")),
    value: anyType(),
    defaultValue: anyType(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: anyType(),
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: anyType(),
    prefix: anyType(),
    addonBefore: anyType(),
    addonAfter: anyType(),
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: true
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean,
    status: String,
    hashId: String
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const statusContext = FormItemInputContext.useInject();
    const renderClearIcon = (prefixCls) => {
      const {
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix
      } = props;
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      return createVNode(CloseCircleFilled, {
        "onClick": handleReset,
        "onMousedown": (e) => e.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button"
      }, null);
    };
    const renderTextAreaWithClearIcon = (prefixCls, element) => {
      const {
        value,
        allowClear,
        direction,
        bordered,
        hidden,
        status: customStatus,
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        hashId
      } = props;
      const {
        status: contextStatus,
        hasFeedback
      } = statusContext;
      if (!allowClear) {
        return cloneElement(element, {
          value,
          disabled: props.disabled
        });
      }
      const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, `${prefixCls}-affix-wrapper-textarea-with-clear-btn`, getStatusClassNames(`${prefixCls}-affix-wrapper`, getMergedStatus(contextStatus, customStatus), hasFeedback), {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        // className will go to addon wrapper
        [`${attrs.class}`]: !hasAddon({
          addonAfter,
          addonBefore
        }) && attrs.class
      }, hashId);
      return createVNode("span", {
        "class": affixWrapperCls,
        "style": attrs.style,
        "hidden": hidden
      }, [cloneElement(element, {
        style: null,
        value,
        disabled: props.disabled
      }), renderClearIcon(prefixCls)]);
    };
    return () => {
      var _a;
      const {
        prefixCls,
        inputType,
        element = (_a = slots.element) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      if (inputType === ClearableInputType[0]) {
        return renderTextAreaWithClearIcon(prefixCls, element);
      }
      return null;
    };
  }
});
const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`;
const SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
const computedStyleCache = {};
let hiddenTextarea;
function calculateNodeStyling(node) {
  let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  const style = (void 0).getComputedStyle(node);
  const boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const sizingStyle = SIZING_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  let maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = (void 0).createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    (void 0).body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode, useCache);
  hiddenTextarea.setAttribute("style", `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  let minHeight = void 0;
  let maxHeight = void 0;
  let overflowY;
  let height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  const style = {
    height: `${height}px`,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style.minHeight = `${minHeight}px`;
  }
  if (maxHeight) {
    style.maxHeight = `${maxHeight}px`;
  }
  return style;
}
const RESIZE_START = 0;
const RESIZE_MEASURING = 1;
const RESIZE_STABLE = 2;
const ResizableTextArea = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizableTextArea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props, _ref) {
    let {
      attrs,
      emit,
      expose
    } = _ref;
    const textAreaRef = ref();
    const textareaStyles = ref({});
    const resizeStatus = ref(RESIZE_STABLE);
    const fixFirefoxAutoScroll = () => {
      try {
        if (textAreaRef.value && (void 0).activeElement === textAreaRef.value.input) {
          const currentStart = textAreaRef.value.getSelectionStart();
          const currentEnd = textAreaRef.value.getSelectionEnd();
          const scrollTop = textAreaRef.value.getScrollTop();
          textAreaRef.value.setSelectionRange(currentStart, currentEnd);
          textAreaRef.value.setScrollTop(scrollTop);
        }
      } catch (e) {
      }
    };
    const minRows = ref();
    const maxRows = ref();
    watchEffect(() => {
      const autoSize = props.autoSize || props.autosize;
      if (autoSize) {
        minRows.value = autoSize.minRows;
        maxRows.value = autoSize.maxRows;
      } else {
        minRows.value = void 0;
        maxRows.value = void 0;
      }
    });
    const needAutoSize = computed(() => !!(props.autoSize || props.autosize));
    const startResize = () => {
      resizeStatus.value = RESIZE_START;
    };
    watch([() => props.value, minRows, maxRows, needAutoSize], () => {
      if (needAutoSize.value) {
        startResize();
      }
    }, {
      immediate: true
    });
    const autoSizeStyle = ref();
    watch([resizeStatus, textAreaRef], () => {
      if (!textAreaRef.value) return;
      if (resizeStatus.value === RESIZE_START) {
        resizeStatus.value = RESIZE_MEASURING;
      } else if (resizeStatus.value === RESIZE_MEASURING) {
        const textareaStyles2 = calculateAutoSizeStyle(textAreaRef.value.input, false, minRows.value, maxRows.value);
        resizeStatus.value = RESIZE_STABLE;
        autoSizeStyle.value = textareaStyles2;
      } else {
        fixFirefoxAutoScroll();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const instance = getCurrentInstance();
    const resizeRafRef = ref();
    const cleanRaf = () => {
      wrapperRaf.cancel(resizeRafRef.value);
    };
    const onInternalResize = (size) => {
      if (resizeStatus.value === RESIZE_STABLE) {
        emit("resize", size);
        if (needAutoSize.value) {
          cleanRaf();
          resizeRafRef.value = wrapperRaf(() => {
            startResize();
          });
        }
      }
    };
    const resizeTextarea = () => {
      startResize();
    };
    expose({
      resizeTextarea,
      textArea: computed(() => {
        var _a;
        return (_a = textAreaRef.value) === null || _a === void 0 ? void 0 : _a.input;
      }),
      instance
    });
    warning(props.autosize === void 0);
    const renderTextArea = () => {
      const {
        prefixCls,
        disabled
      } = props;
      const otherProps = omit(props, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "maxlength", "valueModifiers"]);
      const cls = classNames(prefixCls, attrs.class, {
        [`${prefixCls}-disabled`]: disabled
      });
      const mergedAutoSizeStyle = needAutoSize.value ? autoSizeStyle.value : null;
      const style = [attrs.style, textareaStyles.value, mergedAutoSizeStyle];
      const textareaProps = _extends(_extends(_extends({}, otherProps), attrs), {
        style,
        class: cls
      });
      if (resizeStatus.value === RESIZE_START || resizeStatus.value === RESIZE_MEASURING) {
        style.push({
          overflowX: "hidden",
          overflowY: "hidden"
        });
      }
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return createVNode(ResizeObserver, {
        "onResize": onInternalResize,
        "disabled": !needAutoSize.value
      }, {
        default: () => [createVNode(BaseInput$1, _objectSpread$3(_objectSpread$3({}, textareaProps), {}, {
          "ref": textAreaRef,
          "tag": "textarea"
        }), null)]
      });
    };
    return () => {
      return renderTextArea();
    };
  }
});
function fixEmojiLength(value, maxLength) {
  return [...value || ""].slice(0, maxLength).join("");
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ([...preValue || ""].length < triggerValue.length && [...triggerValue || ""].length > maxLength) {
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
const __nuxt_component_5 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATextarea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props, _ref) {
    let {
      attrs,
      expose,
      emit
    } = _ref;
    var _a;
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props.status));
    const stateValue = shallowRef((_a = props.value) !== null && _a !== void 0 ? _a : props.defaultValue);
    const resizableTextArea = shallowRef();
    const mergedValue = shallowRef("");
    const {
      prefixCls,
      size,
      direction
    } = useConfigInject("input", props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const disabled = useInjectDisabled();
    const showCount = computed(() => {
      return props.showCount === "" || props.showCount || false;
    });
    const hasMaxLength = computed(() => Number(props.maxlength) > 0);
    const compositing = shallowRef(false);
    const oldCompositionValueRef = shallowRef();
    const oldSelectionStartRef = shallowRef(0);
    const onInternalCompositionStart = (e) => {
      compositing.value = true;
      oldCompositionValueRef.value = mergedValue.value;
      oldSelectionStartRef.value = e.currentTarget.selectionStart;
      emit("compositionstart", e);
    };
    const onInternalCompositionEnd = (e) => {
      var _a2;
      compositing.value = false;
      let triggerValue = e.currentTarget.value;
      if (hasMaxLength.value) {
        const isCursorInEnd = oldSelectionStartRef.value >= props.maxlength + 1 || oldSelectionStartRef.value === ((_a2 = oldCompositionValueRef.value) === null || _a2 === void 0 ? void 0 : _a2.length);
        triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.value, triggerValue, props.maxlength);
      }
      if (triggerValue !== mergedValue.value) {
        setValue2(triggerValue);
        resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      }
      emit("compositionend", e);
    };
    const instance = getCurrentInstance();
    watch(() => props.value, () => {
      var _a2;
      if ("value" in instance.vnode.props || {}) {
        stateValue.value = (_a2 = props.value) !== null && _a2 !== void 0 ? _a2 : "";
      }
    });
    const focus = (option) => {
      var _a2;
      triggerFocus((_a2 = resizableTextArea.value) === null || _a2 === void 0 ? void 0 : _a2.textArea, option);
    };
    const blur = () => {
      var _a2, _b;
      (_b = (_a2 = resizableTextArea.value) === null || _a2 === void 0 ? void 0 : _a2.textArea) === null || _b === void 0 ? void 0 : _b.blur();
    };
    const setValue2 = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a2, _b, _c;
          if (resizableTextArea.value.textArea.value !== mergedValue.value) {
            (_c = (_a2 = resizableTextArea.value) === null || _a2 === void 0 ? void 0 : (_b = _a2.instance).update) === null || _c === void 0 ? void 0 : _c.call(_b);
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    const onBlur = (e) => {
      const {
        onBlur: onBlur2
      } = props;
      onBlur2 === null || onBlur2 === void 0 ? void 0 : onBlur2(e);
      formItemContext.onFieldBlur();
    };
    const triggerChange = (e) => {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    const handleReset = (e) => {
      resolveOnChange(resizableTextArea.value.textArea, e, triggerChange);
      setValue2("", () => {
        focus();
      });
    };
    const handleChange = (e) => {
      let triggerValue = e.target.value;
      if (stateValue.value === triggerValue) return;
      if (hasMaxLength.value) {
        const target = e.target;
        const isCursorInEnd = target.selectionStart >= props.maxlength + 1 || target.selectionStart === triggerValue.length || !target.selectionStart;
        triggerValue = setTriggerValue(isCursorInEnd, mergedValue.value, triggerValue, props.maxlength);
      }
      resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      setValue2(triggerValue);
    };
    const renderTextArea = () => {
      var _a2, _b;
      const {
        class: customClass
      } = attrs;
      const {
        bordered = true
      } = props;
      const resizeProps = _extends(_extends(_extends({}, omit(props, ["allowClear"])), attrs), {
        class: [{
          [`${prefixCls.value}-borderless`]: !bordered,
          [`${customClass}`]: customClass && !showCount.value,
          [`${prefixCls.value}-sm`]: size.value === "small",
          [`${prefixCls.value}-lg`]: size.value === "large"
        }, getStatusClassNames(prefixCls.value, mergedStatus.value), hashId.value],
        disabled: disabled.value,
        showCount: null,
        prefixCls: prefixCls.value,
        onInput: handleChange,
        onChange: handleChange,
        onBlur,
        onKeydown: handleKeyDown,
        onCompositionstart: onInternalCompositionStart,
        onCompositionend: onInternalCompositionEnd
      });
      if ((_a2 = props.valueModifiers) === null || _a2 === void 0 ? void 0 : _a2.lazy) {
        delete resizeProps.onInput;
      }
      return createVNode(ResizableTextArea, _objectSpread$3(_objectSpread$3({}, resizeProps), {}, {
        "id": (_b = resizeProps === null || resizeProps === void 0 ? void 0 : resizeProps.id) !== null && _b !== void 0 ? _b : formItemContext.id.value,
        "ref": resizableTextArea,
        "maxlength": props.maxlength,
        "lazy": props.lazy
      }), null);
    };
    expose({
      focus,
      blur,
      resizableTextArea
    });
    watchEffect(() => {
      let val = fixControlledValue(stateValue.value);
      if (!compositing.value && hasMaxLength.value && (props.value === null || props.value === void 0)) {
        val = fixEmojiLength(val, props.maxlength);
      }
      mergedValue.value = val;
    });
    return () => {
      var _a2;
      const {
        maxlength,
        bordered = true,
        hidden
      } = props;
      const {
        style,
        class: customClass
      } = attrs;
      const inputProps2 = _extends(_extends(_extends({}, props), attrs), {
        prefixCls: prefixCls.value,
        inputType: "text",
        handleReset,
        direction: direction.value,
        bordered,
        style: showCount.value ? void 0 : style,
        hashId: hashId.value,
        disabled: (_a2 = props.disabled) !== null && _a2 !== void 0 ? _a2 : disabled.value
      });
      let textareaNode = createVNode(ClearableLabeledInput, _objectSpread$3(_objectSpread$3({}, inputProps2), {}, {
        "value": mergedValue.value,
        "status": props.status
      }), {
        element: renderTextArea
      });
      if (showCount.value || formItemInputContext.hasFeedback) {
        const valueLength = [...mergedValue.value].length;
        let dataCount = "";
        if (typeof showCount.value === "object") {
          dataCount = showCount.value.formatter({
            value: mergedValue.value,
            count: valueLength,
            maxlength
          });
        } else {
          dataCount = `${valueLength}${hasMaxLength.value ? ` / ${maxlength}` : ""}`;
        }
        textareaNode = createVNode("div", {
          "hidden": hidden,
          "class": classNames(`${prefixCls.value}-textarea`, {
            [`${prefixCls.value}-textarea-rtl`]: direction.value === "rtl",
            [`${prefixCls.value}-textarea-show-count`]: showCount.value,
            [`${prefixCls.value}-textarea-in-form-item`]: formItemInputContext.isFormItemInput
          }, `${prefixCls.value}-textarea-show-count`, customClass, hashId.value),
          "style": style,
          "data-count": typeof dataCount !== "object" ? dataCount : void 0
        }, [textareaNode, formItemInputContext.hasFeedback && createVNode("span", {
          "class": `${prefixCls.value}-textarea-suffix`
        }, [formItemInputContext.feedbackIcon])]);
      }
      return wrapSSR(textareaNode);
    };
  }
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const ActionMap = {
  click: "onClick",
  hover: "onMouseover"
};
const defaultIconRender = (visible) => visible ? createVNode(EyeOutlined, null, null) : createVNode(EyeInvisibleOutlined, null, null);
const Password = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    "onUpdate:visible": Function,
    iconRender: Function
  }),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const visible = shallowRef(false);
    const onVisibleChange = () => {
      const {
        disabled
      } = props;
      if (disabled) {
        return;
      }
      visible.value = !visible.value;
      emit("update:visible", visible.value);
    };
    watchEffect(() => {
      if (props.visible !== void 0) {
        visible.value = !!props.visible;
      }
    });
    const inputRef = shallowRef();
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const getIcon = (prefixCls2) => {
      const {
        action,
        iconRender = slots.iconRender || defaultIconRender
      } = props;
      const iconTrigger = ActionMap[action] || "";
      const icon = iconRender(visible.value);
      const iconProps = {
        [iconTrigger]: onVisibleChange,
        class: `${prefixCls2}-icon`,
        key: "passwordIcon",
        onMousedown: (e) => {
          e.preventDefault();
        },
        onMouseup: (e) => {
          e.preventDefault();
        }
      };
      return cloneElement(isValidElement(icon) ? icon : createVNode("span", null, [icon]), iconProps);
    };
    const {
      prefixCls,
      getPrefixCls
    } = useConfigInject("input-password", props);
    const inputPrefixCls = computed(() => getPrefixCls("input", props.inputPrefixCls));
    const renderPassword = () => {
      const {
        size,
        visibilityToggle
      } = props, restProps = __rest(props, ["size", "visibilityToggle"]);
      const suffixIcon = visibilityToggle && getIcon(prefixCls.value);
      const inputClassName = classNames(prefixCls.value, attrs.class, {
        [`${prefixCls.value}-${size}`]: !!size
      });
      const omittedProps = _extends(_extends(_extends({}, omit(restProps, ["suffix", "iconRender", "action"])), attrs), {
        type: visible.value ? "text" : "password",
        class: inputClassName,
        prefixCls: inputPrefixCls.value,
        suffix: suffixIcon
      });
      if (size) {
        omittedProps.size = size;
      }
      return createVNode(Input, _objectSpread$3({
        "ref": inputRef
      }, omittedProps), slots);
    };
    return () => {
      return renderPassword();
    };
  }
});
Input.Group = Group;
Input.Search = Search;
Input.TextArea = __nuxt_component_5;
Input.Password = Password;
Input.install = function(app) {
  app.component(Input.name, Input);
  app.component(Input.Group.name, Input.Group);
  app.component(Input.Search.name, Input.Search);
  app.component(Input.TextArea.name, Input.TextArea);
  app.component(Input.Password.name, Input.Password);
  return app;
};
const PUBLIC_FRIEND_LINK_BASE_PATH = "/api/public/friend-link";
const friendLinkApi = {
  /**
   * 提交友链申请
   * @param {Object} params - 友链参数
   * @param {string} params.name - 链接名称（必填）
   * @param {string} params.url - URL地址（必填，必须为 http/https 协议）
   * @param {string} [params.summary] - 简介
   * @param {string} [params.imageUrl] - 站点图片URL（必须为 http/https 协议）
   * @returns {Promise} 返回友链提交结果
   */
  submitFriendLink: async ({ name, url, summary, imageUrl }) => {
    return service.post(`${PUBLIC_FRIEND_LINK_BASE_PATH}`, {
      name,
      url,
      ...summary && { summary },
      ...imageUrl && { imageUrl }
    });
  },
  /**
   * 获取已通过审核的友链列表
   * @param {Object} params - 分页参数
   * @param {number} params.currentPage - 当前页码（从1开始）
   * @param {number} params.pageSize - 每页数量
   * @returns {Promise} 返回友链分页列表
   */
  getFriendLinkList: async ({ currentPage, pageSize }) => {
    return service.post(`${PUBLIC_FRIEND_LINK_BASE_PATH}/list`, {
      currentPage,
      pageSize
    });
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "friendsLink",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const siteStore = useSiteStore();
    const friendLinkList = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(12);
    const total = ref(0);
    const loading = ref(true);
    const formRef = ref();
    const submitting = ref(false);
    const formData = ref({
      name: "",
      url: "",
      summary: "",
      imageUrl: ""
    });
    const imageErrorMap = reactive({});
    const imageLoadedMap = reactive({});
    const { data: serverData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "friend-link-list",
      async () => {
        return await friendLinkApi.getFriendLinkList({
          currentPage: 1,
          pageSize: pageSize.value
        });
      }
    )), __temp = await __temp, __restore(), __temp);
    if (serverData.value && serverData.value.data) {
      friendLinkList.value = serverData.value.data.records || [];
      total.value = serverData.value.data.total || 0;
    }
    loading.value = false;
    const fetchFriendLinkList = async () => {
      loading.value = true;
      try {
        const result = await friendLinkApi.getFriendLinkList({
          currentPage: currentPage.value,
          pageSize: pageSize.value
        });
        if (result && result.data) {
          friendLinkList.value = result.data.records || [];
          total.value = result.data.total || 0;
        } else {
          friendLinkList.value = [];
          total.value = 0;
        }
      } catch (error) {
        console.error("获取友链列表失败:", error);
        api$1.error(error.message || "获取友链列表失败");
        friendLinkList.value = [];
        total.value = 0;
      } finally {
        loading.value = false;
      }
    };
    const handlePageChange = (page) => {
      currentPage.value = page;
      fetchFriendLinkList();
    };
    const handleSubmit = async () => {
      submitting.value = true;
      try {
        await friendLinkApi.submitFriendLink({
          name: formData.value.name,
          url: formData.value.url,
          summary: formData.value.summary,
          imageUrl: formData.value.imageUrl
        });
        api$1.success("外链提交成功，待审核后显示");
        formData.value = {
          name: "",
          url: "",
          summary: "",
          imageUrl: ""
        };
        formRef.value?.resetFields();
      } catch (error) {
        console.error("提交友链失败:", error);
        api$1.error(error.message || "外链提交失败");
      } finally {
        submitting.value = false;
      }
    };
    useHead({
      title: `友链 - ${siteStore.siteName}`,
      meta: [
        { name: "description", content: `${siteStore.siteName}的友链页面，汇集优质技术博客和网站链接` }
      ]
    });
    useSeoMeta({
      title: `友链 - ${siteStore.siteName}`,
      description: `${siteStore.siteName}的友链页面，汇集优质技术博客和网站链接`,
      ogTitle: `友链 - ${siteStore.siteName}`,
      ogDescription: `${siteStore.siteName}的友链页面，汇集优质技术博客和网站链接`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_pagination = __nuxt_component_0;
      const _component_a_empty = __nuxt_component_1;
      const _component_a_form = Form;
      const _component_a_form_item = __nuxt_component_3;
      const _component_a_input = Input;
      const _component_a_textarea = __nuxt_component_5;
      const _component_a_button = Button;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-32 px-4 max-w-3xl mx-auto" }, _attrs))}><div class="mb-10"><h1 class="text-4xl font-extrabold text-on-surface tracking-tighter mb-2">朋友们</h1><p class="text-secondary text-sm font-medium tracking-wide uppercase opacity-70">Curation of Excellent Technical Blogs &amp; Links</p></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="block p-4 bg-surface-container/50 border border-outline-variant/15 rounded-lg animate-pulse"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0"></div><div class="min-w-0 flex-1"><div class="h-4 w-24 bg-gray-200 rounded mb-2"></div><div class="h-3 w-40 bg-gray-200 rounded"></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(friendLinkList).length > 0) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(unref(friendLinkList), (link) => {
          _push(`<a${ssrRenderAttr("href", link.url)} class="group block p-4 bg-transparent border border-outline-variant/15 rounded-lg transition-all duration-300" rel="noopener noreferrer" target="_blank"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex-shrink-0 border border-outline-variant/10 text-gray-400">`);
          if (link.imageUrl) {
            _push(`<!--[-->`);
            if (unref(imageLoadedMap)[link.name]) {
              _push(`<img${ssrRenderAttr("alt", link.name)}${ssrRenderAttr("src", link.imageUrl)} class="w-full h-full object-cover transition-all">`);
            } else if (unref(imageErrorMap)[link.name]) {
              _push(`<div class="w-full h-full flex flex-col items-center justify-center bg-surface-container-highest/50"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg><span class="text-[8px] text-gray-400 mt-0.5">404</span></div>`);
            } else {
              _push(`<img${ssrRenderAttr("alt", link.name)}${ssrRenderAttr("src", link.imageUrl)} class="w-full h-full object-cover transition-all hidden">`);
            }
            if (!unref(imageLoadedMap)[link.name] && !unref(imageErrorMap)[link.name]) {
              _push(`<div class="w-full h-full flex flex-col items-center justify-center bg-surface-container-highest/50"><svg class="w-5 h-5 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<div class="w-full h-full flex items-center justify-center text-on-surface-variant text-xs">${ssrInterpolate(link.name.charAt(0).toUpperCase())}</div>`);
          }
          _push(`</div><div class="min-w-0"><h3 class="font-bold text-on-surface text-sm truncate group-hover:text-primary transition-colors">${ssrInterpolate(link.name)}</h3><p class="text-secondary text-xs truncate leading-relaxed">${ssrInterpolate(link.summary || "暂无简介")}</p></div></div></a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading) && unref(friendLinkList).length > 0 && unref(total) > unref(pageSize)) {
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
      if (!unref(loading) && unref(friendLinkList).length === 0) {
        _push(ssrRenderComponent(_component_a_empty, {
          class: "mt-12",
          description: "暂无友链"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-16 bg-surface-container-low p-8 rounded-lg"><h2 class="font-bold text-lg mb-4 text-on-surface">申请须知</h2><p class="text-on-surface-variant text-sm leading-relaxed max-w-2xl"> 请提前添加本站，我将会很快处理。 如果你的站点打不开或者被墙了我将会定期移除， 如果更换了域名请告诉我你之前的域名和更换后的域名以方便我调整。 若长时间未审核or评论不了，请加QQ：3209174373，只换个人博客。 </p><p class="text-on-surface-variant text-sm leading-relaxed max-w-2xl mt-2"> 我的网站：名称 ${ssrInterpolate(unref(siteStore).siteName)}、域名 ${ssrInterpolate(unref(siteStore).siteDomain || "待配置")} 、描述 ${ssrInterpolate(unref(siteStore).siteDescription || "待配置")}</p></div><div class="mt-16 bg-transparent border border-outline-variant/15 px-8 pt-8 pb-2 rounded-lg"><h2 class="font-bold text-lg mb-6 text-on-surface">申请友链</h2>`);
      _push(ssrRenderComponent(_component_a_form, {
        ref_key: "formRef",
        ref: formRef,
        layout: "vertical",
        model: unref(formData),
        onFinish: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_form_item, {
              rules: [{ required: true, message: "请输入站点名称" }],
              label: "名称",
              name: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(formData).name,
                    "onUpdate:value": ($event) => unref(formData).name = $event,
                    placeholder: "请输入站点名称",
                    size: "large"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input, {
                      value: unref(formData).name,
                      "onUpdate:value": ($event) => unref(formData).name = $event,
                      placeholder: "请输入站点名称",
                      size: "large"
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, {
              rules: [{ required: true, message: "请输入URL地址" }],
              label: "URL",
              name: "url"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(formData).url,
                    "onUpdate:value": ($event) => unref(formData).url = $event,
                    placeholder: "https://example.com",
                    size: "large"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input, {
                      value: unref(formData).url,
                      "onUpdate:value": ($event) => unref(formData).url = $event,
                      placeholder: "https://example.com",
                      size: "large"
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, {
              label: "简介",
              name: "summary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_textarea, {
                    value: unref(formData).summary,
                    "onUpdate:value": ($event) => unref(formData).summary = $event,
                    rows: 3,
                    placeholder: "请输入站点简介"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_textarea, {
                      value: unref(formData).summary,
                      "onUpdate:value": ($event) => unref(formData).summary = $event,
                      rows: 3,
                      placeholder: "请输入站点简介"
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, {
              label: "站点图片",
              name: "imageUrl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(formData).imageUrl,
                    "onUpdate:value": ($event) => unref(formData).imageUrl = $event,
                    placeholder: "请输入头像或 Logo URL",
                    size: "large"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input, {
                      value: unref(formData).imageUrl,
                      "onUpdate:value": ($event) => unref(formData).imageUrl = $event,
                      placeholder: "请输入头像或 Logo URL",
                      size: "large"
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_button, {
                    loading: unref(submitting),
                    "html-type": "submit",
                    size: "large",
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(submitting) ? "提交中..." : "提交")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(submitting) ? "提交中..." : "提交"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_button, {
                      loading: unref(submitting),
                      "html-type": "submit",
                      size: "large",
                      type: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(submitting) ? "提交中..." : "提交"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_form_item, {
                rules: [{ required: true, message: "请输入站点名称" }],
                label: "名称",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: unref(formData).name,
                    "onUpdate:value": ($event) => unref(formData).name = $event,
                    placeholder: "请输入站点名称",
                    size: "large"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                rules: [{ required: true, message: "请输入URL地址" }],
                label: "URL",
                name: "url"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: unref(formData).url,
                    "onUpdate:value": ($event) => unref(formData).url = $event,
                    placeholder: "https://example.com",
                    size: "large"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                label: "简介",
                name: "summary"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_textarea, {
                    value: unref(formData).summary,
                    "onUpdate:value": ($event) => unref(formData).summary = $event,
                    rows: 3,
                    placeholder: "请输入站点简介"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                label: "站点图片",
                name: "imageUrl"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: unref(formData).imageUrl,
                    "onUpdate:value": ($event) => unref(formData).imageUrl = $event,
                    placeholder: "请输入头像或 Logo URL",
                    size: "large"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_button, {
                    loading: unref(submitting),
                    "html-type": "submit",
                    size: "large",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(submitting) ? "提交中..." : "提交"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/friendsLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=friendsLink-DL06jQjn.mjs.map
