import { _ as __nuxt_component_0$1 } from './nuxt-link-D8DAAlKw.mjs';
import { b as _export_sfc, u as useRoute, _ as __nuxt_component_1$1$1, d as useRuntimeConfig } from './server.mjs';
import { MenuOutlined, SearchOutlined, LoadingOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import { createVNode, defineComponent, withAsyncContext, unref, ref, reactive, watch, nextTick, Transition, withDirectives, vShow, inject, computed, withCtx, createTextVNode, toDisplayString, mergeProps, openBlock, createBlock, Fragment, renderList, createCommentVNode, withKeys, vModelText, shallowRef, watchEffect, useSSRContext, provide, isRef, render } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useConfigInject, g as genComponentStyleHook, c as classNames, k as functionType, S as getPropsSlot, z as flattenChildren, f as filterEmpty, P as PropTypes, p as objectType, n as stringType, R as withInstall, a as useLocaleReceiver, j as warning, U as contains, m as merge, V as useConfigContextInject, l as localeValues, r as resetComponent, K as Keyframe, b as booleanType, M as genFocusStyle, H as clearFix, x as service } from './request-BU3wK0UY.mjs';
import { useRouter } from 'vue-router';
import { a as articleApi } from './articleApi-chdHA1Xm.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectSpread$2 from '@babel/runtime/helpers/esm/objectSpread2';
import { w as wrapperRaf, c as cloneElement, P as Portal, p as pickAttrs, o as omit, K as KeyCode, b as useMergedState, i as initMotion, t as triggerVNodeUpdate } from './firstNotUndefined-D8bvNvh_.mjs';
import { i as initDefaultProps } from './initDefaultProps-C-dWF3aS.mjs';
import { I as Icon, u as useSiteStore, a as useAsyncData, d as getTransitionProps, j as isPresetColor, e as getTransitionName, h as CloseOutlined, m as useProvidePortal, E as ExclamationCircleFilled, C as CloseCircleFilled, c as CheckCircleFilled, n as InfoCircleFilled, l as genPresetColor, o as globalConfigForApi, p as ConfigProvider, q as getConfirmLocale } from './siteStore-MquY96fb.mjs';
import { _ as __nuxt_component_1$1, B as Button, c as convertLegacyProps, i as initZoomMotion } from './index-36ErndQZ.mjs';
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
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import 'axios';
import 'dom-align';
import 'lodash-es';

// This icon file is generated automatically.
var VerticalAlignTopOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" } }] }, "name": "vertical-align-top", "theme": "outlined" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VerticalAlignTopOutlined = function VerticalAlignTopOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": VerticalAlignTopOutlined$1
  }), null);
};

VerticalAlignTopOutlined.displayName = 'VerticalAlignTopOutlined';
VerticalAlignTopOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var FileTextOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, "name": "file-text", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FileTextOutlined = function FileTextOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": FileTextOutlined$1
  }), null);
};

FileTextOutlined.displayName = 'FileTextOutlined';
FileTextOutlined.inheritAttrs = false;

function throttleByAnimationFrame(fn) {
  let requestId;
  const later = (args) => () => {
    requestId = null;
    fn(...args);
  };
  const throttled = function() {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      requestId = wrapperRaf(later(args));
    }
  };
  throttled.cancel = () => {
    wrapperRaf.cancel(requestId);
    requestId = null;
  };
  return throttled;
}
function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj === obj.window;
}
function getScroll$1(target, top) {
  {
    return 0;
  }
}
function scrollTo(y) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    getContainer = () => void 0,
    callback,
    duration = 450
  } = options;
  const container = getContainer();
  const scrollTop = getScroll$1();
  const startTime = Date.now();
  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
    if (isWindow(container)) {
      container.scrollTo((void 0).scrollX, nextScrollTop);
    } else if (container instanceof Document) {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < duration) {
      wrapperRaf(frameFunc);
    } else if (typeof callback === "function") {
      callback();
    }
  };
  wrapperRaf(frameFunc);
}
const fadeIn = new Keyframe("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const fadeOut = new Keyframe("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
const initFadeMotion = function(token) {
  let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
function UnitNumber(_ref) {
  let {
    prefixCls,
    value,
    current,
    offset: offset2 = 0
  } = _ref;
  let style;
  if (offset2) {
    style = {
      position: "absolute",
      top: `${offset2}00%`,
      left: 0
    };
  }
  return createVNode("p", {
    "style": style,
    "class": classNames(`${prefixCls}-only-unit`, {
      current
    })
  }, [value]);
}
function getOffset$1(start, end, unit) {
  let index = start;
  let offset2 = 0;
  while ((index + 10) % 10 !== end) {
    index += unit;
    offset2 += unit;
  }
  return offset2;
}
const SingleNumber = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "SingleNumber",
  props: {
    prefixCls: String,
    value: String,
    count: Number
  },
  setup(props) {
    const originValue = computed(() => Number(props.value));
    const originCount = computed(() => Math.abs(props.count));
    const state = reactive({
      prevValue: originValue.value,
      prevCount: originCount.value
    });
    const onTransitionEnd = () => {
      state.prevValue = originValue.value;
      state.prevCount = originCount.value;
    };
    const timeout = ref();
    watch(originValue, () => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        onTransitionEnd();
      }, 1e3);
    }, {
      flush: "post"
    });
    return () => {
      let unitNodes;
      let offsetStyle = {};
      const value = originValue.value;
      if (state.prevValue === value || Number.isNaN(value) || Number.isNaN(state.prevValue)) {
        unitNodes = [UnitNumber(_extends(_extends({}, props), {
          current: true
        }))];
        offsetStyle = {
          transition: "none"
        };
      } else {
        unitNodes = [];
        const end = value + 10;
        const unitNumberList = [];
        for (let index = value; index <= end; index += 1) {
          unitNumberList.push(index);
        }
        const prevIndex = unitNumberList.findIndex((n) => n % 10 === state.prevValue);
        unitNodes = unitNumberList.map((n, index) => {
          const singleUnit = n % 10;
          return UnitNumber(_extends(_extends({}, props), {
            value: singleUnit,
            offset: index - prevIndex,
            current: index === prevIndex
          }));
        });
        const unit = state.prevCount < originCount.value ? 1 : -1;
        offsetStyle = {
          transform: `translateY(${-getOffset$1(state.prevValue, value, unit)}00%)`
        };
      }
      return createVNode("span", {
        "class": `${props.prefixCls}-only`,
        "style": offsetStyle,
        "onTransitionend": () => onTransitionEnd()
      }, [unitNodes]);
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
const scrollNumberProps = {
  prefixCls: String,
  count: PropTypes.any,
  component: String,
  title: PropTypes.any,
  show: Boolean
};
const ScrollNumber = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ScrollNumber",
  inheritAttrs: false,
  props: scrollNumberProps,
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("scroll-number", props);
    return () => {
      var _a;
      const _b = _extends(_extends({}, props), attrs), {
        prefixCls: customizePrefixCls,
        count,
        title,
        show,
        component: Tag = "sup",
        class: className,
        style
      } = _b, restProps = __rest$3(_b, ["prefixCls", "count", "title", "show", "component", "class", "style"]);
      const newProps = _extends(_extends({}, restProps), {
        style,
        "data-show": props.show,
        class: classNames(prefixCls.value, className),
        title
      });
      let numberNodes = count;
      if (count && Number(count) % 1 === 0) {
        const numberList = String(count).split("");
        numberNodes = numberList.map((num, i) => createVNode(SingleNumber, {
          "prefixCls": prefixCls.value,
          "count": Number(count),
          "value": num,
          "key": numberList.length - i
        }, null));
      }
      if (style && style.borderColor) {
        newProps.style = _extends(_extends({}, style), {
          boxShadow: `0 0 0 1px ${style.borderColor} inset`
        });
      }
      const children = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      if (children && children.length) {
        return cloneElement(children, {
          class: classNames(`${prefixCls.value}-custom-component`)
        }, false);
      }
      return createVNode(Tag, newProps, {
        default: () => [numberNodes]
      });
    };
  }
});
const antStatusProcessing = new Keyframe("antStatusProcessing", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(2.4)",
    opacity: 0
  }
});
const antZoomBadgeIn = new Keyframe("antZoomBadgeIn", {
  "0%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1) translate(50%, -50%)"
  }
});
const antZoomBadgeOut = new Keyframe("antZoomBadgeOut", {
  "0%": {
    transform: "scale(1) translate(50%, -50%)"
  },
  "100%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  }
});
const antNoWrapperZoomBadgeIn = new Keyframe("antNoWrapperZoomBadgeIn", {
  "0%": {
    transform: "scale(0)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)"
  }
});
const antNoWrapperZoomBadgeOut = new Keyframe("antNoWrapperZoomBadgeOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0)",
    opacity: 0
  }
});
const antBadgeLoadingCircle = new Keyframe("antBadgeLoadingCircle", {
  "0%": {
    transformOrigin: "50%"
  },
  "100%": {
    transform: "translate(50%, -50%) rotate(360deg)",
    transformOrigin: "50%"
  }
});
const genSharedBadgeStyle = (token) => {
  const {
    componentCls,
    iconCls,
    antCls,
    badgeFontHeight,
    badgeShadowSize,
    badgeHeightSm,
    motionDurationSlow,
    badgeStatusSize,
    marginXS,
    badgeRibbonOffset
  } = token;
  const numberPrefixCls = `${antCls}-scroll-number`;
  const ribbonPrefixCls = `${antCls}-ribbon`;
  const ribbonWrapperPrefixCls = `${antCls}-ribbon-wrapper`;
  const colorPreset = genPresetColor(token, (colorKey, _ref) => {
    let {
      darkColor
    } = _ref;
    return {
      [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
        background: darkColor,
        [`&:not(${componentCls}-count)`]: {
          color: darkColor
        }
      }
    };
  });
  const statusRibbonPreset = genPresetColor(token, (colorKey, _ref2) => {
    let {
      darkColor
    } = _ref2;
    return {
      [`&${ribbonPrefixCls}-color-${colorKey}`]: {
        background: darkColor,
        color: darkColor
      }
    };
  });
  return {
    [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
      position: "relative",
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1,
      [`${componentCls}-count`]: {
        zIndex: token.badgeZIndex,
        minWidth: token.badgeHeight,
        height: token.badgeHeight,
        color: token.badgeTextColor,
        fontWeight: token.badgeFontWeight,
        fontSize: token.badgeFontSize,
        lineHeight: `${token.badgeHeight}px`,
        whiteSpace: "nowrap",
        textAlign: "center",
        background: token.badgeColor,
        borderRadius: token.badgeHeight / 2,
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`,
        transition: `background ${token.motionDurationMid}`,
        a: {
          color: token.badgeTextColor
        },
        "a:hover": {
          color: token.badgeTextColor
        },
        "a:hover &": {
          background: token.badgeColorHover
        }
      },
      [`${componentCls}-count-sm`]: {
        minWidth: badgeHeightSm,
        height: badgeHeightSm,
        fontSize: token.badgeFontSizeSm,
        lineHeight: `${badgeHeightSm}px`,
        borderRadius: badgeHeightSm / 2
      },
      [`${componentCls}-multiple-words`]: {
        padding: `0 ${token.paddingXS}px`
      },
      [`${componentCls}-dot`]: {
        zIndex: token.badgeZIndex,
        width: token.badgeDotSize,
        minWidth: token.badgeDotSize,
        height: token.badgeDotSize,
        background: token.badgeColor,
        borderRadius: "100%",
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`
      },
      [`${componentCls}-dot${numberPrefixCls}`]: {
        transition: `background ${motionDurationSlow}`
      },
      [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        transform: "translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&${iconCls}-spin`]: {
          animationName: antBadgeLoadingCircle,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }
      },
      [`&${componentCls}-status`]: {
        lineHeight: "inherit",
        verticalAlign: "baseline",
        [`${componentCls}-status-dot`]: {
          position: "relative",
          top: -1,
          display: "inline-block",
          width: badgeStatusSize,
          height: badgeStatusSize,
          verticalAlign: "middle",
          borderRadius: "50%"
        },
        [`${componentCls}-status-success`]: {
          backgroundColor: token.colorSuccess
        },
        [`${componentCls}-status-processing`]: {
          overflow: "visible",
          color: token.colorPrimary,
          backgroundColor: token.colorPrimary,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            borderWidth: badgeShadowSize,
            borderStyle: "solid",
            borderColor: "inherit",
            borderRadius: "50%",
            animationName: antStatusProcessing,
            animationDuration: token.badgeProcessingDuration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            content: '""'
          }
        },
        [`${componentCls}-status-default`]: {
          backgroundColor: token.colorTextPlaceholder
        },
        [`${componentCls}-status-error`]: {
          backgroundColor: token.colorError
        },
        [`${componentCls}-status-warning`]: {
          backgroundColor: token.colorWarning
        },
        [`${componentCls}-status-text`]: {
          marginInlineStart: marginXS,
          color: token.colorText,
          fontSize: token.fontSize
        }
      }
    }), colorPreset), {
      [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
        animationName: antZoomBadgeIn,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`${componentCls}-zoom-leave`]: {
        animationName: antZoomBadgeOut,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`&${componentCls}-not-a-wrapper`]: {
        [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
          animationName: antNoWrapperZoomBadgeIn,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack
        },
        [`${componentCls}-zoom-leave`]: {
          animationName: antNoWrapperZoomBadgeOut,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack
        },
        [`&:not(${componentCls}-status)`]: {
          verticalAlign: "middle"
        },
        [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
          transform: "none"
        },
        [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
          position: "relative",
          top: "auto",
          display: "block",
          transformOrigin: "50% 50%"
        }
      },
      [`${numberPrefixCls}`]: {
        overflow: "hidden",
        [`${numberPrefixCls}-only`]: {
          position: "relative",
          display: "inline-block",
          height: token.badgeHeight,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseOutBack}`,
          WebkitTransformStyle: "preserve-3d",
          WebkitBackfaceVisibility: "hidden",
          [`> p${numberPrefixCls}-only-unit`]: {
            height: token.badgeHeight,
            margin: 0,
            WebkitTransformStyle: "preserve-3d",
            WebkitBackfaceVisibility: "hidden"
          }
        },
        [`${numberPrefixCls}-symbol`]: {
          verticalAlign: "top"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
          transform: "translate(-50%, -50%)"
        }
      }
    }),
    [`${ribbonWrapperPrefixCls}`]: {
      position: "relative"
    },
    [`${ribbonPrefixCls}`]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
      position: "absolute",
      top: marginXS,
      padding: `0 ${token.paddingXS}px`,
      color: token.colorPrimary,
      lineHeight: `${badgeFontHeight}px`,
      whiteSpace: "nowrap",
      backgroundColor: token.colorPrimary,
      borderRadius: token.borderRadiusSM,
      [`${ribbonPrefixCls}-text`]: {
        color: token.colorTextLightSolid
      },
      [`${ribbonPrefixCls}-corner`]: {
        position: "absolute",
        top: "100%",
        width: badgeRibbonOffset,
        height: badgeRibbonOffset,
        color: "currentcolor",
        border: `${badgeRibbonOffset / 2}px solid`,
        transform: token.badgeRibbonCornerTransform,
        transformOrigin: "top",
        filter: token.badgeRibbonCornerFilter
      }
    }), statusRibbonPreset), {
      [`&${ribbonPrefixCls}-placement-end`]: {
        insetInlineEnd: -badgeRibbonOffset,
        borderEndEndRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineEnd: 0,
          borderInlineEndColor: "transparent",
          borderBlockEndColor: "transparent"
        }
      },
      [`&${ribbonPrefixCls}-placement-start`]: {
        insetInlineStart: -badgeRibbonOffset,
        borderEndStartRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineStart: 0,
          borderBlockEndColor: "transparent",
          borderInlineStartColor: "transparent"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
};
const useStyle$3 = genComponentStyleHook("Badge", (token) => {
  const {
    fontSize,
    lineHeight,
    fontSizeSM,
    lineWidth,
    marginXS,
    colorBorderBg
  } = token;
  const badgeFontHeight = Math.round(fontSize * lineHeight);
  const badgeShadowSize = lineWidth;
  const badgeZIndex = "auto";
  const badgeHeight = badgeFontHeight - 2 * badgeShadowSize;
  const badgeTextColor = token.colorBgContainer;
  const badgeFontWeight = "normal";
  const badgeFontSize = fontSizeSM;
  const badgeColor = token.colorError;
  const badgeColorHover = token.colorErrorHover;
  const badgeHeightSm = fontSize;
  const badgeDotSize = fontSizeSM / 2;
  const badgeFontSizeSm = fontSizeSM;
  const badgeStatusSize = fontSizeSM / 2;
  const badgeToken = merge(token, {
    badgeFontHeight,
    badgeShadowSize,
    badgeZIndex,
    badgeHeight,
    badgeTextColor,
    badgeFontWeight,
    badgeFontSize,
    badgeColor,
    badgeColorHover,
    badgeShadowColor: colorBorderBg,
    badgeHeightSm,
    badgeDotSize,
    badgeFontSizeSm,
    badgeStatusSize,
    badgeProcessingDuration: "1.2s",
    badgeRibbonOffset: marginXS,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: "scaleY(0.75)",
    badgeRibbonCornerFilter: `brightness(75%)`
  });
  return [genSharedBadgeStyle(badgeToken)];
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const ribbonProps = () => ({
  prefix: String,
  color: {
    type: String
  },
  text: PropTypes.any,
  placement: {
    type: String,
    default: "end"
  }
});
const Ribbon = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ABadgeRibbon",
  inheritAttrs: false,
  props: ribbonProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("ribbon", props);
    const [wrapSSR, hashId] = useStyle$3(prefixCls);
    const colorInPreset = computed(() => isPresetColor(props.color, false));
    const ribbonCls = computed(() => [prefixCls.value, `${prefixCls.value}-placement-${props.placement}`, {
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-color-${props.color}`]: colorInPreset.value
    }]);
    return () => {
      var _a, _b;
      const {
        class: className,
        style
      } = attrs, restAttrs = __rest$2(attrs, ["class", "style"]);
      const colorStyle = {};
      const cornerColorStyle = {};
      if (props.color && !colorInPreset.value) {
        colorStyle.background = props.color;
        cornerColorStyle.color = props.color;
      }
      return wrapSSR(createVNode("div", _objectSpread$2({
        "class": `${prefixCls.value}-wrapper ${hashId.value}`
      }, restAttrs), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots), createVNode("div", {
        "class": [ribbonCls.value, className, hashId.value],
        "style": _extends(_extends({}, colorStyle), style)
      }, [createVNode("span", {
        "class": `${prefixCls.value}-text`
      }, [props.text || ((_b = slots.text) === null || _b === void 0 ? void 0 : _b.call(slots))]), createVNode("div", {
        "class": `${prefixCls.value}-corner`,
        "style": cornerColorStyle
      }, null)])]));
    };
  }
});
const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
const badgeProps = () => ({
  /** Number to show in badge */
  count: PropTypes.any.def(null),
  showZero: {
    type: Boolean,
    default: void 0
  },
  /** Max count to show */
  overflowCount: {
    type: Number,
    default: 99
  },
  /** whether to show red dot without number */
  dot: {
    type: Boolean,
    default: void 0
  },
  prefixCls: String,
  scrollNumberPrefixCls: String,
  status: {
    type: String
  },
  size: {
    type: String,
    default: "default"
  },
  color: String,
  text: PropTypes.any,
  offset: Array,
  numberStyle: {
    type: Object,
    default: void 0
  },
  title: String
});
const Badge = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ABadge",
  Ribbon,
  inheritAttrs: false,
  props: badgeProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("badge", props);
    const [wrapSSR, hashId] = useStyle$3(prefixCls);
    const numberedDisplayCount = computed(() => {
      return props.count > props.overflowCount ? `${props.overflowCount}+` : props.count;
    });
    const isZero = computed(() => numberedDisplayCount.value === "0" || numberedDisplayCount.value === 0);
    const ignoreCount = computed(() => props.count === null || isZero.value && !props.showZero);
    const hasStatus = computed(() => (props.status !== null && props.status !== void 0 || props.color !== null && props.color !== void 0) && ignoreCount.value);
    const showAsDot = computed(() => props.dot && !isZero.value);
    const mergedCount = computed(() => showAsDot.value ? "" : numberedDisplayCount.value);
    const isHidden = computed(() => {
      const isEmpty = mergedCount.value === null || mergedCount.value === void 0 || mergedCount.value === "";
      return (isEmpty || isZero.value && !props.showZero) && !showAsDot.value;
    });
    const livingCount = ref(props.count);
    const displayCount = ref(mergedCount.value);
    const isDotRef = ref(showAsDot.value);
    watch([() => props.count, mergedCount, showAsDot], () => {
      if (!isHidden.value) {
        livingCount.value = props.count;
        displayCount.value = mergedCount.value;
        isDotRef.value = showAsDot.value;
      }
    }, {
      immediate: true
    });
    const isInternalColor = computed(() => isPresetColor(props.color, false));
    const statusCls = computed(() => ({
      [`${prefixCls.value}-status-dot`]: hasStatus.value,
      [`${prefixCls.value}-status-${props.status}`]: !!props.status,
      [`${prefixCls.value}-color-${props.color}`]: isInternalColor.value
    }));
    const statusStyle = computed(() => {
      if (props.color && !isInternalColor.value) {
        return {
          background: props.color,
          color: props.color
        };
      } else {
        return {};
      }
    });
    const scrollNumberCls = computed(() => ({
      [`${prefixCls.value}-dot`]: isDotRef.value,
      [`${prefixCls.value}-count`]: !isDotRef.value,
      [`${prefixCls.value}-count-sm`]: props.size === "small",
      [`${prefixCls.value}-multiple-words`]: !isDotRef.value && displayCount.value && displayCount.value.toString().length > 1,
      [`${prefixCls.value}-status-${props.status}`]: !!props.status,
      [`${prefixCls.value}-color-${props.color}`]: isInternalColor.value
    }));
    return () => {
      var _a, _b;
      const {
        offset: offset2,
        title,
        color
      } = props;
      const style = attrs.style;
      const text = getPropsSlot(slots, props, "text");
      const pre = prefixCls.value;
      const count = livingCount.value;
      let children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      children = children.length ? children : null;
      const visible = !!(!isHidden.value || slots.count);
      const mergedStyle = (() => {
        if (!offset2) {
          return _extends({}, style);
        }
        const offsetStyle = {
          marginTop: isNumeric(offset2[1]) ? `${offset2[1]}px` : offset2[1]
        };
        if (direction.value === "rtl") {
          offsetStyle.left = `${parseInt(offset2[0], 10)}px`;
        } else {
          offsetStyle.right = `${-parseInt(offset2[0], 10)}px`;
        }
        return _extends(_extends({}, offsetStyle), style);
      })();
      const titleNode = title !== null && title !== void 0 ? title : typeof count === "string" || typeof count === "number" ? count : void 0;
      const statusTextNode = visible || !text ? null : createVNode("span", {
        "class": `${pre}-status-text`
      }, [text]);
      const displayNode = typeof count === "object" || count === void 0 && slots.count ? cloneElement(count !== null && count !== void 0 ? count : (_b = slots.count) === null || _b === void 0 ? void 0 : _b.call(slots), {
        style: mergedStyle
      }, false) : null;
      const badgeClassName = classNames(pre, {
        [`${pre}-status`]: hasStatus.value,
        [`${pre}-not-a-wrapper`]: !children,
        [`${pre}-rtl`]: direction.value === "rtl"
      }, attrs.class, hashId.value);
      if (!children && hasStatus.value) {
        const statusTextColor = mergedStyle.color;
        return wrapSSR(createVNode("span", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
          "class": badgeClassName,
          "style": mergedStyle
        }), [createVNode("span", {
          "class": statusCls.value,
          "style": statusStyle.value
        }, null), createVNode("span", {
          "style": {
            color: statusTextColor
          },
          "class": `${pre}-status-text`
        }, [text])]));
      }
      const transitionProps = getTransitionProps(children ? `${pre}-zoom` : "", {
        appear: false
      });
      let scrollNumberStyle = _extends(_extends({}, mergedStyle), props.numberStyle);
      if (color && !isInternalColor.value) {
        scrollNumberStyle = scrollNumberStyle || {};
        scrollNumberStyle.background = color;
      }
      return wrapSSR(createVNode("span", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
        "class": badgeClassName
      }), [children, createVNode(Transition, transitionProps, {
        default: () => [withDirectives(createVNode(ScrollNumber, {
          "prefixCls": props.scrollNumberPrefixCls,
          "show": visible,
          "class": scrollNumberCls.value,
          "count": displayCount.value,
          "title": titleNode,
          "style": scrollNumberStyle,
          "key": "scrollNumber"
        }, {
          default: () => [displayNode]
        }), [[vShow, visible]])]
      }), statusTextNode]));
    };
  }
});
Badge.install = function(app) {
  app.component(Badge.name, Badge);
  app.component(Ribbon.name, Ribbon);
  return app;
};
const genSharedDividerStyle = (token) => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      borderBlockStart: `${lineWidth}px solid ${colorSplit}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        margin: `0 ${token.dividerVerticalGutterMargin}px`,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${lineWidth}px solid ${colorSplit}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        margin: `${token.dividerHorizontalGutterMargin}px 0`
      },
      [`&-horizontal${componentCls}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${token.dividerHorizontalWithTextGutterMargin}px 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${colorSplit}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${lineWidth}px solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${componentCls}-with-text-left`]: {
        "&::before": {
          width: "5%"
        },
        "&::after": {
          width: "95%"
        }
      },
      [`&-horizontal${componentCls}-with-text-right`]: {
        "&::before": {
          width: "95%"
        },
        "&::after": {
          width: "5%"
        }
      },
      [`${componentCls}-inner-text`]: {
        display: "inline-block",
        padding: "0 1em"
      },
      "&-dashed": {
        background: "none",
        borderColor: colorSplit,
        borderStyle: "dashed",
        borderWidth: `${lineWidth}px 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${componentCls}-dashed`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${componentCls}-with-text`]: {
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.fontSize
      },
      [`&-horizontal${componentCls}-with-text-left${componentCls}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      [`&-horizontal${componentCls}-with-text-right${componentCls}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    })
  };
};
const useStyle$2 = genComponentStyleHook("Divider", (token) => {
  const dividerToken = merge(token, {
    dividerVerticalGutterMargin: token.marginXS,
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG
  });
  return [genSharedDividerStyle(dividerToken)];
}, {
  sizePaddingEdgeHorizontal: 0
});
const dividerProps = () => ({
  prefixCls: String,
  type: {
    type: String,
    default: "horizontal"
  },
  dashed: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String,
    default: "center"
  },
  plain: {
    type: Boolean,
    default: false
  },
  orientationMargin: [String, Number]
});
const Divider = defineComponent({
  name: "ADivider",
  inheritAttrs: false,
  compatConfig: {
    MODE: 3
  },
  props: dividerProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls: prefixClsRef,
      direction
    } = useConfigInject("divider", props);
    const [wrapSSR, hashId] = useStyle$2(prefixClsRef);
    const hasCustomMarginLeft = computed(() => props.orientation === "left" && props.orientationMargin != null);
    const hasCustomMarginRight = computed(() => props.orientation === "right" && props.orientationMargin != null);
    const classString = computed(() => {
      const {
        type,
        dashed,
        plain
      } = props;
      const prefixCls = prefixClsRef.value;
      return {
        [prefixCls]: true,
        [hashId.value]: !!hashId.value,
        [`${prefixCls}-${type}`]: true,
        [`${prefixCls}-dashed`]: !!dashed,
        [`${prefixCls}-plain`]: !!plain,
        [`${prefixCls}-rtl`]: direction.value === "rtl",
        [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft.value,
        [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight.value
      };
    });
    const innerStyle = computed(() => {
      const marginValue = typeof props.orientationMargin === "number" ? `${props.orientationMargin}px` : props.orientationMargin;
      return _extends(_extends({}, hasCustomMarginLeft.value && {
        marginLeft: marginValue
      }), hasCustomMarginRight.value && {
        marginRight: marginValue
      });
    });
    const orientationPrefix = computed(() => props.orientation.length > 0 ? "-" + props.orientation : props.orientation);
    return () => {
      var _a;
      const children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return wrapSSR(createVNode("div", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
        "class": [classString.value, children.length ? `${prefixClsRef.value}-with-text ${prefixClsRef.value}-with-text${orientationPrefix.value}` : "", attrs.class],
        "role": "separator"
      }), [children.length ? createVNode("span", {
        "class": `${prefixClsRef.value}-inner-text`,
        "style": innerStyle.value
      }, [children]) : null]));
    };
  }
});
const __nuxt_component_0 = withInstall(Divider);
const floatButtonProps = () => {
  return {
    prefixCls: String,
    description: PropTypes.any,
    type: stringType("default"),
    shape: stringType("circle"),
    tooltip: PropTypes.any,
    href: String,
    target: String,
    badge: objectType(),
    onClick: functionType()
  };
};
const floatButtonContentProps = () => {
  return {
    prefixCls: stringType()
  };
};
const floatButtonGroupProps = () => {
  return _extends(_extends({}, floatButtonProps()), {
    // 包含的 Float Button
    // 触发方式 (有触发方式为菜单模式）
    trigger: stringType(),
    // 受控展开
    open: booleanType(),
    // 展开收起的回调
    onOpenChange: functionType(),
    "onUpdate:open": functionType()
  });
};
const backTopProps = () => {
  return _extends(_extends({}, floatButtonProps()), {
    prefixCls: String,
    duration: Number,
    target: functionType(),
    visibilityHeight: Number,
    onClick: functionType()
  });
};
const FloatButtonContent = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFloatButtonContent",
  inheritAttrs: false,
  props: floatButtonContentProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    return () => {
      var _a;
      const {
        prefixCls
      } = props;
      const description = filterEmpty((_a = slots.description) === null || _a === void 0 ? void 0 : _a.call(slots));
      return createVNode("div", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
        "class": [attrs.class, `${prefixCls}-content`]
      }), [slots.icon || description.length ? createVNode(Fragment, null, [slots.icon && createVNode("div", {
        "class": `${prefixCls}-icon`
      }, [slots.icon()]), description.length ? createVNode("div", {
        "class": `${prefixCls}-description`
      }, [description]) : null]) : createVNode("div", {
        "class": `${prefixCls}-icon`
      }, [createVNode(FileTextOutlined, null, null)])]);
    };
  }
});
const contextKey = /* @__PURE__ */ Symbol("floatButtonGroupContext");
const useProvideFloatButtonGroupContext = (props) => {
  provide(contextKey, props);
  return props;
};
const useInjectFloatButtonGroupContext = () => {
  return inject(contextKey, {
    shape: ref()
  });
};
const getOffset = (radius) => {
  if (radius === 0) {
    return 0;
  }
  return radius - Math.sqrt(Math.pow(radius, 2) / 2);
};
const initFloatButtonGroupMotion = (token) => {
  const {
    componentCls,
    floatButtonSize,
    motionDurationSlow,
    motionEaseInOutCirc
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  const moveDownIn = new Keyframe("antFloatButtonMoveDownIn", {
    "0%": {
      transform: `translate3d(0, ${floatButtonSize}px, 0)`,
      transformOrigin: "0 0",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    }
  });
  const moveDownOut = new Keyframe("antFloatButtonMoveDownOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    },
    "100%": {
      transform: `translate3d(0, ${floatButtonSize}px, 0)`,
      transformOrigin: "0 0",
      opacity: 0
    }
  });
  return [{
    [`${groupPrefixCls}-wrap`]: _extends({}, initMotion(`${groupPrefixCls}-wrap`, moveDownIn, moveDownOut, motionDurationSlow, true))
  }, {
    [`${groupPrefixCls}-wrap`]: {
      [`
          &${groupPrefixCls}-wrap-enter,
          &${groupPrefixCls}-wrap-appear
        `]: {
        opacity: 0,
        animationTimingFunction: motionEaseInOutCirc
      },
      [`&${groupPrefixCls}-wrap-leave`]: {
        animationTimingFunction: motionEaseInOutCirc
      }
    }
  }];
};
const floatButtonGroupStyle = (token) => {
  const {
    antCls,
    componentCls,
    floatButtonSize,
    margin,
    borderRadiusLG,
    borderRadiusSM,
    badgeOffset,
    floatButtonBodyPadding
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  return {
    [groupPrefixCls]: _extends(_extends({}, resetComponent(token)), {
      zIndex: 99,
      display: "block",
      border: "none",
      position: "fixed",
      width: floatButtonSize,
      height: "auto",
      boxShadow: "none",
      minHeight: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      insetBlockEnd: token.floatButtonInsetBlockEnd,
      borderRadius: borderRadiusLG,
      [`${groupPrefixCls}-wrap`]: {
        zIndex: -1,
        display: "block",
        position: "relative",
        marginBottom: margin
      },
      [`&${groupPrefixCls}-rtl`]: {
        direction: "rtl"
      },
      [componentCls]: {
        position: "static"
      }
    }),
    [`${groupPrefixCls}-circle`]: {
      [`${componentCls}-circle:not(:last-child)`]: {
        marginBottom: token.margin,
        [`${componentCls}-body`]: {
          width: floatButtonSize,
          height: floatButtonSize,
          borderRadius: "50%"
        }
      }
    },
    [`${groupPrefixCls}-square`]: {
      [`${componentCls}-square`]: {
        borderRadius: 0,
        padding: 0,
        "&:first-child": {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        "&:last-child": {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        "&:not(:last-child)": {
          borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
        },
        [`${antCls}-badge`]: {
          [`${antCls}-badge-count`]: {
            top: -(floatButtonBodyPadding + badgeOffset),
            insetInlineEnd: -(floatButtonBodyPadding + badgeOffset)
          }
        }
      },
      [`${groupPrefixCls}-wrap`]: {
        display: "block",
        borderRadius: borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        [`${componentCls}-square`]: {
          boxShadow: "none",
          marginTop: 0,
          borderRadius: 0,
          padding: floatButtonBodyPadding,
          "&:first-child": {
            borderStartStartRadius: borderRadiusLG,
            borderStartEndRadius: borderRadiusLG
          },
          "&:last-child": {
            borderEndStartRadius: borderRadiusLG,
            borderEndEndRadius: borderRadiusLG
          },
          "&:not(:last-child)": {
            borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`
          },
          [`${componentCls}-body`]: {
            width: token.floatButtonBodySize,
            height: token.floatButtonBodySize
          }
        }
      }
    },
    [`${groupPrefixCls}-circle-shadow`]: {
      boxShadow: "none"
    },
    [`${groupPrefixCls}-square-shadow`]: {
      boxShadow: token.boxShadowSecondary,
      [`${componentCls}-square`]: {
        boxShadow: "none",
        padding: floatButtonBodyPadding,
        [`${componentCls}-body`]: {
          width: token.floatButtonBodySize,
          height: token.floatButtonBodySize,
          borderRadius: borderRadiusSM
        }
      }
    }
  };
};
const sharedFloatButtonStyle = (token) => {
  const {
    antCls,
    componentCls,
    floatButtonBodyPadding,
    floatButtonIconSize,
    floatButtonSize,
    borderRadiusLG,
    badgeOffset,
    dotOffsetInSquare,
    dotOffsetInCircle
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      border: "none",
      position: "fixed",
      cursor: "pointer",
      zIndex: 99,
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      width: floatButtonSize,
      height: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      insetBlockEnd: token.floatButtonInsetBlockEnd,
      boxShadow: token.boxShadowSecondary,
      // Pure Panel
      "&-pure": {
        position: "relative",
        inset: "auto"
      },
      "&:empty": {
        display: "none"
      },
      [`${antCls}-badge`]: {
        width: "100%",
        height: "100%",
        [`${antCls}-badge-count`]: {
          transform: "translate(0, 0)",
          transformOrigin: "center",
          top: -badgeOffset,
          insetInlineEnd: -badgeOffset
        }
      },
      [`${componentCls}-body`]: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: `all ${token.motionDurationMid}`,
        [`${componentCls}-content`]: {
          overflow: "hidden",
          textAlign: "center",
          minHeight: floatButtonSize,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: `${floatButtonBodyPadding / 2}px ${floatButtonBodyPadding}px`,
          [`${componentCls}-icon`]: {
            textAlign: "center",
            margin: "auto",
            width: floatButtonIconSize,
            fontSize: floatButtonIconSize,
            lineHeight: 1
          }
        }
      }
    }),
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-circle`]: {
      height: floatButtonSize,
      borderRadius: "50%",
      [`${antCls}-badge`]: {
        [`${antCls}-badge-dot`]: {
          top: dotOffsetInCircle,
          insetInlineEnd: dotOffsetInCircle
        }
      },
      [`${componentCls}-body`]: {
        borderRadius: "50%"
      }
    },
    [`${componentCls}-square`]: {
      height: "auto",
      minHeight: floatButtonSize,
      borderRadius: borderRadiusLG,
      [`${antCls}-badge`]: {
        [`${antCls}-badge-dot`]: {
          top: dotOffsetInSquare,
          insetInlineEnd: dotOffsetInSquare
        }
      },
      [`${componentCls}-body`]: {
        height: "auto",
        borderRadius: borderRadiusLG
      }
    },
    [`${componentCls}-default`]: {
      backgroundColor: token.floatButtonBackgroundColor,
      transition: `background-color ${token.motionDurationMid}`,
      [`${componentCls}-body`]: {
        backgroundColor: token.floatButtonBackgroundColor,
        transition: `background-color ${token.motionDurationMid}`,
        "&:hover": {
          backgroundColor: token.colorFillContent
        },
        [`${componentCls}-content`]: {
          [`${componentCls}-icon`]: {
            color: token.colorText
          },
          [`${componentCls}-description`]: {
            display: "flex",
            alignItems: "center",
            lineHeight: `${token.fontSizeLG}px`,
            color: token.colorText,
            fontSize: token.fontSizeSM
          }
        }
      }
    },
    [`${componentCls}-primary`]: {
      backgroundColor: token.colorPrimary,
      [`${componentCls}-body`]: {
        backgroundColor: token.colorPrimary,
        transition: `background-color ${token.motionDurationMid}`,
        "&:hover": {
          backgroundColor: token.colorPrimaryHover
        },
        [`${componentCls}-content`]: {
          [`${componentCls}-icon`]: {
            color: token.colorTextLightSolid
          },
          [`${componentCls}-description`]: {
            display: "flex",
            alignItems: "center",
            lineHeight: `${token.fontSizeLG}px`,
            color: token.colorTextLightSolid,
            fontSize: token.fontSizeSM
          }
        }
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("FloatButton", (token) => {
  const {
    colorTextLightSolid,
    colorBgElevated,
    controlHeightLG,
    marginXXL,
    marginLG,
    fontSize,
    fontSizeIcon,
    controlItemBgHover,
    paddingXXS,
    borderRadiusLG
  } = token;
  const floatButtonToken = merge(token, {
    floatButtonBackgroundColor: colorBgElevated,
    floatButtonColor: colorTextLightSolid,
    floatButtonHoverBackgroundColor: controlItemBgHover,
    floatButtonFontSize: fontSize,
    floatButtonIconSize: fontSizeIcon * 1.5,
    floatButtonSize: controlHeightLG,
    floatButtonInsetBlockEnd: marginXXL,
    floatButtonInsetInlineEnd: marginLG,
    floatButtonBodySize: controlHeightLG - paddingXXS * 2,
    // 这里的 paddingXXS 是简写，完整逻辑是 (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
    floatButtonBodyPadding: paddingXXS,
    badgeOffset: paddingXXS * 1.5,
    dotOffsetInCircle: getOffset(controlHeightLG / 2),
    dotOffsetInSquare: getOffset(borderRadiusLG)
  });
  return [floatButtonGroupStyle(floatButtonToken), sharedFloatButtonStyle(floatButtonToken), initFadeMotion(token), initFloatButtonGroupMotion(floatButtonToken)];
});
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const floatButtonPrefixCls = "float-btn";
const FloatButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFloatButton",
  inheritAttrs: false,
  props: initDefaultProps(floatButtonProps(), {
    type: "default",
    shape: "circle"
  }),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject(floatButtonPrefixCls, props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const {
      shape: groupShape
    } = useInjectFloatButtonGroupContext();
    const floatButtonRef = ref(null);
    const mergeShape = computed(() => {
      return (groupShape === null || groupShape === void 0 ? void 0 : groupShape.value) || props.shape;
    });
    return () => {
      var _a;
      const {
        prefixCls: customPrefixCls,
        type = "default",
        shape = "circle",
        description = (_a = slots.description) === null || _a === void 0 ? void 0 : _a.call(slots),
        tooltip,
        badge = {}
      } = props, restProps = __rest$1(props, ["prefixCls", "type", "shape", "description", "tooltip", "badge"]);
      const classString = classNames(prefixCls.value, `${prefixCls.value}-${type}`, `${prefixCls.value}-${mergeShape.value}`, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl"
      }, attrs.class, hashId.value);
      const buttonNode = createVNode(__nuxt_component_1$1, {
        "placement": "left"
      }, {
        title: slots.tooltip || tooltip ? () => slots.tooltip && slots.tooltip() || tooltip : void 0,
        default: () => createVNode(Badge, badge, {
          default: () => [createVNode("div", {
            "class": `${prefixCls.value}-body`
          }, [createVNode(FloatButtonContent, {
            "prefixCls": prefixCls.value
          }, {
            icon: slots.icon,
            description: () => description
          })])]
        })
      });
      return wrapSSR(props.href ? createVNode("a", _objectSpread$2(_objectSpread$2(_objectSpread$2({
        "ref": floatButtonRef
      }, attrs), restProps), {}, {
        "class": classString
      }), [buttonNode]) : createVNode("button", _objectSpread$2(_objectSpread$2(_objectSpread$2({
        "ref": floatButtonRef
      }, attrs), restProps), {}, {
        "class": classString,
        "type": "button"
      }), [buttonNode]));
    };
  }
});
const FloatButtonGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFloatButtonGroup",
  inheritAttrs: false,
  props: initDefaultProps(floatButtonGroupProps(), {
    type: "default",
    shape: "circle"
  }),
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject(floatButtonPrefixCls, props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const [open, setOpen] = useMergedState(false, {
      value: computed(() => props.open)
    });
    const floatButtonGroupRef = ref(null);
    const floatButtonRef = ref(null);
    useProvideFloatButtonGroupContext({
      shape: computed(() => props.shape)
    });
    const hoverTypeAction = {
      onMouseenter() {
        var _a;
        setOpen(true);
        emit("update:open", true);
        (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, true);
      },
      onMouseleave() {
        var _a;
        setOpen(false);
        emit("update:open", false);
        (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, false);
      }
    };
    const hoverAction = computed(() => {
      return props.trigger === "hover" ? hoverTypeAction : {};
    });
    watch(computed(() => props.trigger), (value) => {
      {
        return;
      }
    }, {
      immediate: true
    });
    return () => {
      var _a;
      const {
        shape = "circle",
        type = "default",
        tooltip,
        description,
        trigger
      } = props;
      const groupPrefixCls = `${prefixCls.value}-group`;
      const groupCls = classNames(groupPrefixCls, hashId.value, attrs.class, {
        [`${groupPrefixCls}-rtl`]: direction.value === "rtl",
        [`${groupPrefixCls}-${shape}`]: shape,
        [`${groupPrefixCls}-${shape}-shadow`]: !trigger
      });
      const wrapperCls = classNames(hashId.value, `${groupPrefixCls}-wrap`);
      const transitionProps = getTransitionProps(`${groupPrefixCls}-wrap`);
      return wrapSSR(createVNode("div", _objectSpread$2(_objectSpread$2({
        "ref": floatButtonGroupRef
      }, attrs), {}, {
        "class": groupCls
      }, hoverAction.value), [trigger && ["click", "hover"].includes(trigger) ? createVNode(Fragment, null, [createVNode(Transition, transitionProps, {
        default: () => [withDirectives(createVNode("div", {
          "class": wrapperCls
        }, [slots.default && slots.default()]), [[vShow, open.value]])]
      }), createVNode(FloatButton, {
        "ref": floatButtonRef,
        "type": type,
        "shape": shape,
        "tooltip": tooltip,
        "description": description
      }, {
        icon: () => {
          var _a2, _b;
          return open.value ? ((_a2 = slots.closeIcon) === null || _a2 === void 0 ? void 0 : _a2.call(slots)) || createVNode(CloseOutlined, null, null) : ((_b = slots.icon) === null || _b === void 0 ? void 0 : _b.call(slots)) || createVNode(FileTextOutlined, null, null);
        },
        tooltip: slots.tooltip,
        description: slots.description
      })]) : (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const BackTop = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ABackTop",
  inheritAttrs: false,
  props: initDefaultProps(backTopProps(), {
    visibilityHeight: 400,
    target: () => void 0,
    duration: 450,
    type: "default",
    shape: "circle"
  }),
  // emits: ['click'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject(floatButtonPrefixCls, props);
    const [wrapSSR] = useStyle$1(prefixCls);
    const domRef = ref();
    const state = reactive({
      visible: props.visibilityHeight === 0,
      scrollEvent: null
    });
    const getDefaultTarget = () => domRef.value && domRef.value.ownerDocument ? domRef.value.ownerDocument : void 0;
    const scrollToTop = (e) => {
      const {
        target = getDefaultTarget,
        duration
      } = props;
      scrollTo(0, {
        getContainer: target,
        duration
      });
      emit("click", e);
    };
    const handleScroll = throttleByAnimationFrame((e) => {
      const {
        visibilityHeight
      } = props;
      const scrollTop = getScroll$1(e.target);
      state.visible = scrollTop >= visibilityHeight;
    });
    const bindScrollEvent = () => {
      const {
        target
      } = props;
      const getTarget = target || getDefaultTarget;
      const container = getTarget();
      handleScroll({
        target: container
      });
      container === null || container === void 0 ? void 0 : container.addEventListener("scroll", handleScroll);
    };
    const scrollRemove = () => {
      const {
        target
      } = props;
      const getTarget = target || getDefaultTarget;
      const container = getTarget();
      handleScroll.cancel();
      container === null || container === void 0 ? void 0 : container.removeEventListener("scroll", handleScroll);
    };
    watch(() => props.target, () => {
      scrollRemove();
      nextTick(() => {
        bindScrollEvent();
      });
    });
    const floatButtonGroupContext = useInjectFloatButtonGroupContext();
    return () => {
      const {
        description,
        type,
        shape,
        tooltip,
        badge
      } = props;
      const floatButtonProps2 = _extends(_extends({}, attrs), {
        shape: (floatButtonGroupContext === null || floatButtonGroupContext === void 0 ? void 0 : floatButtonGroupContext.shape.value) || shape,
        onClick: scrollToTop,
        class: {
          [`${prefixCls.value}`]: true,
          [`${attrs.class}`]: attrs.class,
          [`${prefixCls.value}-rtl`]: direction.value === "rtl"
        },
        description,
        type,
        tooltip,
        badge
      });
      const transitionProps = getTransitionProps("fade");
      return wrapSSR(createVNode(Transition, transitionProps, {
        default: () => [withDirectives(createVNode(FloatButton, _objectSpread$2(_objectSpread$2({}, floatButtonProps2), {}, {
          "ref": domRef
        }), {
          icon: () => {
            var _a;
            return ((_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots)) || createVNode(VerticalAlignTopOutlined, null, null);
          }
        }), [[vShow, state.visible]])]
      }));
    };
  }
});
FloatButton.Group = FloatButtonGroup;
FloatButton.BackTop = BackTop;
FloatButton.install = function(app) {
  app.component(FloatButton.name, FloatButton);
  app.component(FloatButtonGroup.name, FloatButtonGroup);
  app.component(BackTop.name, BackTop);
  return app;
};
function dialogPropTypes() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: PropTypes.shape({
      x: Number,
      y: Number
    }).loose,
    title: PropTypes.any,
    footer: PropTypes.any,
    transitionName: String,
    maskTransitionName: String,
    animation: PropTypes.any,
    maskAnimation: PropTypes.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: PropTypes.any,
    maskProps: PropTypes.any,
    wrapProps: PropTypes.any,
    getContainer: PropTypes.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: PropTypes.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function getMotionName(prefixCls, transitionName, animationName) {
  let motionName = transitionName;
  if (!motionName && animationName) {
    motionName = `${prefixCls}-${animationName}`;
  }
  return motionName;
}
let uuid$1 = -1;
function getUUID() {
  uuid$1 += 1;
  return uuid$1;
}
function getScroll(w, top) {
  let ret = w[`page${top ? "Y" : "X"}Offset`];
  const method = `scroll${top ? "Top" : "Left"}`;
  if (typeof ret !== "number") {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top
  };
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
const sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
const entityStyle = {
  outline: "none"
};
const Content = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: false,
  props: _extends(_extends({}, dialogPropTypes()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(props, _ref) {
    let {
      expose,
      slots,
      attrs
    } = _ref;
    const sentinelStartRef = ref();
    const sentinelEndRef = ref();
    const dialogRef = ref();
    expose({
      focus: () => {
        var _a;
        (_a = sentinelStartRef.value) === null || _a === void 0 ? void 0 : _a.focus({
          preventScroll: true
        });
      },
      changeActive: (next) => {
        const {
          activeElement
        } = void 0;
        if (next && activeElement === sentinelEndRef.value) {
          sentinelStartRef.value.focus({
            preventScroll: true
          });
        } else if (!next && activeElement === sentinelStartRef.value) {
          sentinelEndRef.value.focus({
            preventScroll: true
          });
        }
      }
    });
    const transformOrigin = ref();
    const contentStyleRef = computed(() => {
      const {
        width,
        height
      } = props;
      const contentStyle = {};
      if (width !== void 0) {
        contentStyle.width = typeof width === "number" ? `${width}px` : width;
      }
      if (height !== void 0) {
        contentStyle.height = typeof height === "number" ? `${height}px` : height;
      }
      if (transformOrigin.value) {
        contentStyle.transformOrigin = transformOrigin.value;
      }
      return contentStyle;
    });
    const onPrepare = () => {
      nextTick(() => {
        if (dialogRef.value) {
          const elementOffset = offset(dialogRef.value);
          transformOrigin.value = props.mousePosition ? `${props.mousePosition.x - elementOffset.left}px ${props.mousePosition.y - elementOffset.top}px` : "";
        }
      });
    };
    const onVisibleChanged = (visible) => {
      props.onVisibleChanged(visible);
    };
    return () => {
      var _a, _b, _c, _d;
      const {
        prefixCls,
        footer = (_a = slots.footer) === null || _a === void 0 ? void 0 : _a.call(slots),
        title = (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots),
        ariaId,
        closable,
        closeIcon = (_c = slots.closeIcon) === null || _c === void 0 ? void 0 : _c.call(slots),
        onClose,
        bodyStyle,
        bodyProps,
        onMousedown,
        onMouseup,
        visible,
        modalRender = slots.modalRender,
        destroyOnClose,
        motionName
      } = props;
      let footerNode;
      if (footer) {
        footerNode = createVNode("div", {
          "class": `${prefixCls}-footer`
        }, [footer]);
      }
      let headerNode;
      if (title) {
        headerNode = createVNode("div", {
          "class": `${prefixCls}-header`
        }, [createVNode("div", {
          "class": `${prefixCls}-title`,
          "id": ariaId
        }, [title])]);
      }
      let closer;
      if (closable) {
        closer = createVNode("button", {
          "type": "button",
          "onClick": onClose,
          "aria-label": "Close",
          "class": `${prefixCls}-close`
        }, [closeIcon || createVNode("span", {
          "class": `${prefixCls}-close-x`
        }, null)]);
      }
      const content = createVNode("div", {
        "class": `${prefixCls}-content`
      }, [closer, headerNode, createVNode("div", _objectSpread$2({
        "class": `${prefixCls}-body`,
        "style": bodyStyle
      }, bodyProps), [(_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)]), footerNode]);
      const transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, _objectSpread$2(_objectSpread$2({}, transitionProps), {}, {
        "onBeforeEnter": onPrepare,
        "onAfterEnter": () => onVisibleChanged(true),
        "onAfterLeave": () => onVisibleChanged(false)
      }), {
        default: () => [visible || !destroyOnClose ? withDirectives(createVNode("div", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
          "ref": dialogRef,
          "key": "dialog-element",
          "role": "document",
          "style": [contentStyleRef.value, attrs.style],
          "class": [prefixCls, attrs.class],
          "onMousedown": onMousedown,
          "onMouseup": onMouseup
        }), [createVNode("div", {
          "tabindex": 0,
          "ref": sentinelStartRef,
          "style": entityStyle
        }, [modalRender ? modalRender({
          originVNode: content
        }) : content]), createVNode("div", {
          "tabindex": 0,
          "ref": sentinelEndRef,
          "style": sentinelStyle
        }, null)]), [[vShow, visible]]) : null]
      });
    };
  }
});
const Mask = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(props, _ref) {
    return () => {
      const {
        prefixCls,
        visible,
        maskProps,
        motionName
      } = props;
      const transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, transitionProps, {
        default: () => [withDirectives(createVNode("div", _objectSpread$2({
          "class": `${prefixCls}-mask`
        }, maskProps), null), [[vShow, visible]])]
      });
    };
  }
});
const Dialog = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: false,
  props: initDefaultProps(_extends(_extends({}, dialogPropTypes()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: true
  }),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const lastOutSideActiveElementRef = shallowRef();
    const wrapperRef = shallowRef();
    const contentRef = shallowRef();
    const animatedVisible = shallowRef(props.visible);
    const ariaIdRef = shallowRef(`vcDialogTitle${getUUID()}`);
    const onDialogVisibleChanged = (newVisible) => {
      var _a, _b;
      if (newVisible) {
        if (!contains(wrapperRef.value, (void 0).activeElement)) {
          lastOutSideActiveElementRef.value = (void 0).activeElement;
          (_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      } else {
        const preAnimatedVisible = animatedVisible.value;
        animatedVisible.value = false;
        if (props.mask && lastOutSideActiveElementRef.value && props.focusTriggerAfterClose) {
          try {
            lastOutSideActiveElementRef.value.focus({
              preventScroll: true
            });
          } catch (e) {
          }
          lastOutSideActiveElementRef.value = null;
        }
        if (preAnimatedVisible) {
          (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
        }
      }
    };
    const onInternalClose = (e) => {
      var _a;
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    const contentClickRef = shallowRef(false);
    const contentTimeoutRef = shallowRef();
    const onContentMouseDown = () => {
      clearTimeout(contentTimeoutRef.value);
      contentClickRef.value = true;
    };
    const onContentMouseUp = () => {
      contentTimeoutRef.value = setTimeout(() => {
        contentClickRef.value = false;
      });
    };
    const onWrapperClick = (e) => {
      if (!props.maskClosable) return null;
      if (contentClickRef.value) {
        contentClickRef.value = false;
      } else if (wrapperRef.value === e.target) {
        onInternalClose(e);
      }
    };
    const onWrapperKeyDown = (e) => {
      if (props.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onInternalClose(e);
        return;
      }
      if (props.visible) {
        if (e.keyCode === KeyCode.TAB) {
          contentRef.value.changeActive(!e.shiftKey);
        }
      }
    };
    watch(() => props.visible, () => {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    watchEffect(() => {
      var _a, _b;
      (_a = props.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
      if (animatedVisible.value) {
        (_b = props.scrollLocker) === null || _b === void 0 ? void 0 : _b.lock();
      }
    });
    return () => {
      const {
        prefixCls,
        mask,
        visible,
        maskTransitionName,
        maskAnimation,
        zIndex,
        wrapClassName,
        rootClassName,
        wrapStyle,
        closable,
        maskProps,
        maskStyle,
        transitionName,
        animation,
        wrapProps,
        title = slots.title
      } = props;
      const {
        style,
        class: className
      } = attrs;
      return createVNode("div", _objectSpread$2({
        "class": [`${prefixCls}-root`, rootClassName]
      }, pickAttrs(props, {
        data: true
      })), [createVNode(Mask, {
        "prefixCls": prefixCls,
        "visible": mask && visible,
        "motionName": getMotionName(prefixCls, maskTransitionName, maskAnimation),
        "style": _extends({
          zIndex
        }, maskStyle),
        "maskProps": maskProps
      }, null), createVNode("div", _objectSpread$2({
        "tabIndex": -1,
        "onKeydown": onWrapperKeyDown,
        "class": classNames(`${prefixCls}-wrap`, wrapClassName),
        "ref": wrapperRef,
        "onClick": onWrapperClick,
        "role": "dialog",
        "aria-labelledby": title ? ariaIdRef.value : null,
        "style": _extends(_extends({
          zIndex
        }, wrapStyle), {
          display: !animatedVisible.value ? "none" : null
        })
      }, wrapProps), [createVNode(Content, _objectSpread$2(_objectSpread$2({}, omit(props, ["scrollLocker"])), {}, {
        "style": style,
        "class": className,
        "onMousedown": onContentMouseDown,
        "onMouseup": onContentMouseUp,
        "ref": contentRef,
        "closable": closable,
        "ariaId": ariaIdRef.value,
        "prefixCls": prefixCls,
        "visible": visible,
        "onClose": onInternalClose,
        "onVisibleChanged": onDialogVisibleChanged,
        "motionName": getMotionName(prefixCls, transitionName, animation)
      }), slots)])]);
    };
  }
});
const IDialogPropTypes = dialogPropTypes();
const DialogWrap = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: false,
  props: initDefaultProps(IDialogPropTypes, {
    visible: false
  }),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const animatedVisible = ref(props.visible);
    useProvidePortal({}, {
      inTriggerContext: false
    });
    watch(() => props.visible, () => {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    return () => {
      const {
        visible,
        getContainer,
        forceRender,
        destroyOnClose = false,
        afterClose
      } = props;
      let dialogProps = _extends(_extends(_extends({}, props), attrs), {
        ref: "_component",
        key: "dialog"
      });
      if (getContainer === false) {
        return createVNode(Dialog, _objectSpread$2(_objectSpread$2({}, dialogProps), {}, {
          "getOpenCount": () => 2
        }), slots);
      }
      if (!forceRender && destroyOnClose && !animatedVisible.value) {
        return null;
      }
      return createVNode(Portal, {
        "autoLock": true,
        "visible": visible,
        "forceRender": forceRender,
        "getContainer": getContainer
      }, {
        default: (childProps) => {
          dialogProps = _extends(_extends(_extends({}, dialogProps), childProps), {
            afterClose: () => {
              afterClose === null || afterClose === void 0 ? void 0 : afterClose();
              animatedVisible.value = false;
            }
          });
          return createVNode(Dialog, dialogProps, slots);
        }
      });
    };
  }
});
function box(position) {
  return {
    position,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const genModalMaskStyle = (token) => {
  const {
    componentCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${token.antCls}-zoom-enter, ${componentCls}${token.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${componentCls}${token.antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: _extends(_extends({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        height: "100%",
        backgroundColor: token.colorBgMask,
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      }),
      [`${componentCls}-wrap`]: _extends(_extends({}, box("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
};
const genModalStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap`]: {
          zIndex: token.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax})`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${token.marginXS} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${token.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: token.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.modalHeadingColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
        },
        [`${componentCls}-close`]: _extends({
          position: "absolute",
          top: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          insetInlineEnd: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          zIndex: token.zIndexPopupBase + 10,
          padding: 0,
          color: token.modalCloseColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalConfirmIconSize,
          height: token.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${token.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: token.modalIconHoverColor,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContentHover
          }
        }, genFocusStyle(token)),
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.modalHeaderBg,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          marginBottom: token.marginXS
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.modalFooterBg,
          marginTop: token.marginSM,
          [`${token.antCls}-btn + ${token.antCls}-btn:not(${token.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
const genModalConfirmStyle = (token) => {
  const {
    componentCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${token.antCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: _extends({}, clearFix()),
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${confirmComponentCls}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: token.colorTextHeading,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          [`+ ${confirmComponentCls}-content`]: {
            marginBlockStart: token.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${token.modalConfirmIconSize + token.marginSM}px)`
          }
        },
        [`${confirmComponentCls}-content`]: {
          color: token.colorText,
          fontSize: token.fontSize
        },
        [`> ${token.iconCls}`]: {
          flex: "none",
          marginInlineEnd: token.marginSM,
          fontSize: token.modalConfirmIconSize,
          [`+ ${confirmComponentCls}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.marginSM
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token.marginSM,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${componentCls}-zoom-leave ${componentCls}-btns`]: {
      pointerEvents: "none"
    }
  };
};
const genRTLStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
};
const genWireframeStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [componentCls]: {
      [`${componentCls}-content`]: {
        padding: 0
      },
      [`${componentCls}-header`]: {
        padding: token.modalHeaderPadding,
        borderBottom: `${token.modalHeaderBorderWidth}px ${token.modalHeaderBorderStyle} ${token.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${componentCls}-body`]: {
        padding: token.modalBodyPadding
      },
      [`${componentCls}-footer`]: {
        padding: `${token.modalFooterPaddingVertical}px ${token.modalFooterPaddingHorizontal}px`,
        borderTop: `${token.modalFooterBorderWidth}px ${token.modalFooterBorderStyle} ${token.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [confirmComponentCls]: {
      [`${antCls}-modal-body`]: {
        padding: `${token.padding * 2}px ${token.padding * 2}px ${token.paddingLG}px`
      },
      [`${confirmComponentCls}-body`]: {
        [`> ${token.iconCls}`]: {
          marginInlineEnd: token.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.margin
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        marginTop: token.marginLG
      }
    }
  };
};
const useStyle = genComponentStyleHook("Modal", (token) => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = merge(token, {
    modalBodyPadding: token.paddingLG,
    modalHeaderBg: token.colorBgElevated,
    modalHeaderPadding: `${headerPaddingVertical}px ${token.paddingLG}px`,
    modalHeaderBorderWidth: token.lineWidth,
    modalHeaderBorderStyle: token.lineType,
    modalHeaderTitleLineHeight: headerLineHeight,
    modalHeaderTitleFontSize: headerFontSize,
    modalHeaderBorderColorSplit: token.colorSplit,
    modalHeaderCloseSize: headerLineHeight * headerFontSize + headerPaddingVertical * 2,
    modalContentBg: token.colorBgElevated,
    modalHeadingColor: token.colorTextHeading,
    modalCloseColor: token.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterPaddingVertical: token.paddingXS,
    modalFooterPaddingHorizontal: token.padding,
    modalFooterBorderWidth: token.lineWidth,
    modalConfirmTitleFontSize: token.fontSizeLG,
    modalIconHoverColor: token.colorIconHover,
    modalConfirmIconSize: token.fontSize * token.lineHeight,
    modalCloseBtnSize: token.controlHeightLG * 0.55
  });
  return [genModalStyle(modalToken), genModalConfirmStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), token.wireframe && genWireframeStyle(modalToken), initZoomMotion(modalToken, "zoom")];
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
let mousePosition;
const modalProps = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: PropTypes.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: PropTypes.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: PropTypes.any,
  okText: PropTypes.any,
  okType: String,
  cancelText: PropTypes.any,
  icon: PropTypes.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: objectType(),
  cancelButtonProps: objectType(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: objectType(),
  maskStyle: objectType(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: objectType()
});
const Modal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: false,
  props: initDefaultProps(modalProps(), {
    width: 520,
    confirmLoading: false,
    okType: "primary"
  }),
  setup(props, _ref) {
    let {
      emit,
      slots,
      attrs
    } = _ref;
    const [locale] = useLocaleReceiver("Modal");
    const {
      prefixCls,
      rootPrefixCls,
      direction,
      getPopupContainer
    } = useConfigInject("modal", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    warning(props.visible === void 0);
    const handleCancel = (e) => {
      emit("update:visible", false);
      emit("update:open", false);
      emit("cancel", e);
      emit("change", false);
    };
    const handleOk = (e) => {
      emit("ok", e);
    };
    const renderFooter = () => {
      var _a, _b;
      const {
        okText = (_a = slots.okText) === null || _a === void 0 ? void 0 : _a.call(slots),
        okType,
        cancelText = (_b = slots.cancelText) === null || _b === void 0 ? void 0 : _b.call(slots),
        confirmLoading
      } = props;
      return createVNode(Fragment, null, [createVNode(Button, _objectSpread$2({
        "onClick": handleCancel
      }, props.cancelButtonProps), {
        default: () => [cancelText || locale.value.cancelText]
      }), createVNode(Button, _objectSpread$2(_objectSpread$2({}, convertLegacyProps(okType)), {}, {
        "loading": confirmLoading,
        "onClick": handleOk
      }, props.okButtonProps), {
        default: () => [okText || locale.value.okText]
      })]);
    };
    return () => {
      var _a, _b;
      const {
        prefixCls: customizePrefixCls,
        visible,
        open,
        wrapClassName,
        centered,
        getContainer,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
        focusTriggerAfterClose = true
      } = props, restProps = __rest(props, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);
      const wrapClassNameExtended = classNames(wrapClassName, {
        [`${prefixCls.value}-centered`]: !!centered,
        [`${prefixCls.value}-wrap-rtl`]: direction.value === "rtl"
      });
      return wrapSSR(createVNode(DialogWrap, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, restProps), attrs), {}, {
        "rootClassName": hashId.value,
        "class": classNames(hashId.value, attrs.class),
        "getContainer": getContainer || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value),
        "prefixCls": prefixCls.value,
        "wrapClassName": wrapClassNameExtended,
        "visible": open !== null && open !== void 0 ? open : visible,
        "onClose": handleCancel,
        "focusTriggerAfterClose": focusTriggerAfterClose,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom", props.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls.value, "fade", props.maskTransitionName),
        "mousePosition": (_b = restProps.mousePosition) !== null && _b !== void 0 ? _b : mousePosition
      }), _extends(_extends({}, slots), {
        footer: slots.footer || renderFooter,
        closeIcon: () => {
          return createVNode("span", {
            "class": `${prefixCls.value}-close-x`
          }, [closeIcon || createVNode(CloseOutlined, {
            "class": `${prefixCls.value}-close-icon`
          }, null)]);
        }
      })));
    };
  }
});
const useDestroyed = () => {
  const destroyed = shallowRef(false);
  return destroyed;
};
const actionButtonProps = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: objectType(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function isThenable(thing) {
  return !!(thing && thing.then);
}
const ActionButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: actionButtonProps,
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const clickedRef = shallowRef(false);
    const buttonRef = shallowRef();
    const loading = shallowRef(false);
    const isDestroyed = useDestroyed();
    const onInternalClose = function() {
      var _a;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_a = props.close) === null || _a === void 0 ? void 0 : _a.call(props, ...args);
    };
    const handlePromiseOnOk = (returnValueOfOnOk) => {
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      loading.value = true;
      returnValueOfOnOk.then(function() {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        onInternalClose(...arguments);
        clickedRef.value = false;
      }, (e) => {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        clickedRef.value = false;
        return Promise.reject(e);
      });
    };
    const onClick = (e) => {
      const {
        actionFn
      } = props;
      if (clickedRef.value) {
        return;
      }
      clickedRef.value = true;
      if (!actionFn) {
        onInternalClose();
        return;
      }
      let returnValueOfOnOk;
      if (props.emitEvent) {
        returnValueOfOnOk = actionFn(e);
        if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.value = false;
          onInternalClose(e);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(props.close);
        clickedRef.value = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          onInternalClose();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return () => {
      const {
        type,
        prefixCls,
        buttonProps
      } = props;
      return createVNode(Button, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, convertLegacyProps(type)), {}, {
        "onClick": onClick,
        "loading": loading.value,
        "prefixCls": prefixCls
      }, buttonProps), {}, {
        "ref": buttonRef
      }), slots);
    };
  }
});
function renderSomeContent(someContent) {
  if (typeof someContent === "function") {
    return someContent();
  }
  return someContent;
}
const ConfirmDialog = defineComponent({
  name: "ConfirmDialog",
  inheritAttrs: false,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(props, _ref) {
    let {
      attrs
    } = _ref;
    const [locale] = useLocaleReceiver("Modal");
    return () => {
      const {
        icon,
        onCancel,
        onOk,
        close,
        okText,
        closable = false,
        zIndex,
        afterClose,
        keyboard,
        centered,
        getContainer,
        maskStyle,
        okButtonProps,
        cancelButtonProps,
        okCancel,
        width = 416,
        mask = true,
        maskClosable = false,
        type,
        open,
        title,
        content,
        direction,
        closeIcon,
        modalRender,
        focusTriggerAfterClose,
        rootPrefixCls,
        bodyStyle,
        wrapClassName,
        footer
      } = props;
      let mergedIcon = icon;
      if (!icon && icon !== null) {
        switch (type) {
          case "info":
            mergedIcon = createVNode(InfoCircleFilled, null, null);
            break;
          case "success":
            mergedIcon = createVNode(CheckCircleFilled, null, null);
            break;
          case "error":
            mergedIcon = createVNode(CloseCircleFilled, null, null);
            break;
          default:
            mergedIcon = createVNode(ExclamationCircleFilled, null, null);
        }
      }
      const okType = props.okType || "primary";
      const prefixCls = props.prefixCls || "ant-modal";
      const contentPrefixCls = `${prefixCls}-confirm`;
      const style = attrs.style || {};
      const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === "confirm";
      const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || "ok";
      const confirmPrefixCls = `${prefixCls}-confirm`;
      const classString = classNames(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
        [`${confirmPrefixCls}-rtl`]: direction === "rtl"
      }, attrs.class);
      const mergedLocal = locale.value;
      const cancelButton = mergedOkCancel && createVNode(ActionButton, {
        "actionFn": onCancel,
        "close": close,
        "autofocus": autoFocusButton === "cancel",
        "buttonProps": cancelButtonProps,
        "prefixCls": `${rootPrefixCls}-btn`
      }, {
        default: () => [renderSomeContent(props.cancelText) || mergedLocal.cancelText]
      });
      return createVNode(Modal, {
        "prefixCls": prefixCls,
        "class": classString,
        "wrapClassName": classNames({
          [`${confirmPrefixCls}-centered`]: !!centered
        }, wrapClassName),
        "onCancel": (e) => close === null || close === void 0 ? void 0 : close({
          triggerCancel: true
        }, e),
        "open": open,
        "title": "",
        "footer": "",
        "transitionName": getTransitionName(rootPrefixCls, "zoom", props.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
        "mask": mask,
        "maskClosable": maskClosable,
        "maskStyle": maskStyle,
        "style": style,
        "bodyStyle": bodyStyle,
        "width": width,
        "zIndex": zIndex,
        "afterClose": afterClose,
        "keyboard": keyboard,
        "centered": centered,
        "getContainer": getContainer,
        "closable": closable,
        "closeIcon": closeIcon,
        "modalRender": modalRender,
        "focusTriggerAfterClose": focusTriggerAfterClose
      }, {
        default: () => [createVNode("div", {
          "class": `${contentPrefixCls}-body-wrapper`
        }, [createVNode("div", {
          "class": `${contentPrefixCls}-body`
        }, [renderSomeContent(mergedIcon), title === void 0 ? null : createVNode("span", {
          "class": `${contentPrefixCls}-title`
        }, [renderSomeContent(title)]), createVNode("div", {
          "class": `${contentPrefixCls}-content`
        }, [renderSomeContent(content)])]), footer !== void 0 ? renderSomeContent(footer) : createVNode("div", {
          "class": `${contentPrefixCls}-btns`
        }, [cancelButton, createVNode(ActionButton, {
          "type": okType,
          "actionFn": onOk,
          "close": close,
          "autofocus": autoFocusButton === "ok",
          "buttonProps": okButtonProps,
          "prefixCls": `${rootPrefixCls}-btn`
        }, {
          default: () => [renderSomeContent(okText) || (mergedOkCancel ? mergedLocal.okText : mergedLocal.justOkText)]
        })])])]
      });
    };
  }
});
const destroyFns = [];
const confirm = (config) => {
  const container = (void 0).createDocumentFragment();
  let currentConfig = _extends(_extends({}, omit(config, ["parentContext", "appContext"])), {
    close,
    open: true
  });
  let confirmDialogInstance = null;
  function destroy() {
    if (confirmDialogInstance) {
      render(null, container);
      confirmDialogInstance = null;
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(() => {
      }, ...args.slice(1));
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }
  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = _extends(_extends({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(this, args);
      }
    });
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    update(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = _extends(_extends({}, currentConfig), configUpdate);
    }
    if (confirmDialogInstance) {
      triggerVNodeUpdate(confirmDialogInstance, currentConfig, container);
    }
  }
  const Wrapper = (p) => {
    const global = globalConfigForApi;
    const rootPrefixCls = global.prefixCls;
    const prefixCls = p.prefixCls || `${rootPrefixCls}-modal`;
    const iconPrefixCls = global.iconPrefixCls;
    const runtimeLocale = getConfirmLocale();
    return createVNode(ConfigProvider, _objectSpread$2(_objectSpread$2({}, global), {}, {
      "prefixCls": rootPrefixCls
    }), {
      default: () => [createVNode(ConfirmDialog, _objectSpread$2(_objectSpread$2({}, p), {}, {
        "rootPrefixCls": rootPrefixCls,
        "prefixCls": prefixCls,
        "iconPrefixCls": iconPrefixCls,
        "locale": runtimeLocale,
        "cancelText": p.cancelText || runtimeLocale.cancelText
      }), null)]
    });
  };
  function render$1(props) {
    const vm = createVNode(Wrapper, _extends({}, props));
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    render(vm, container);
    return vm;
  }
  confirmDialogInstance = render$1(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update
  };
};
function withWarn(props) {
  return _extends(_extends({}, props), {
    type: "warning"
  });
}
function withInfo(props) {
  return _extends(_extends({}, props), {
    type: "info"
  });
}
function withSuccess(props) {
  return _extends(_extends({}, props), {
    type: "success"
  });
}
function withError(props) {
  return _extends(_extends({}, props), {
    type: "error"
  });
}
function withConfirm(props) {
  return _extends(_extends({}, props), {
    type: "confirm"
  });
}
const comfirmFuncProps = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
});
const HookModal = defineComponent({
  name: "HookModal",
  inheritAttrs: false,
  props: initDefaultProps(comfirmFuncProps(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(props, _ref) {
    let {
      expose
    } = _ref;
    var _a;
    const open = computed(() => props.open);
    const innerConfig = computed(() => props.config);
    const {
      direction,
      getPrefixCls
    } = useConfigContextInject();
    const prefixCls = getPrefixCls("modal");
    const rootPrefixCls = getPrefixCls();
    const afterClose = () => {
      var _a2, _b;
      props === null || props === void 0 ? void 0 : props.afterClose();
      (_b = (_a2 = innerConfig.value).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a2);
    };
    const close = function() {
      props.destroyAction(...arguments);
    };
    expose({
      destroy: close
    });
    const mergedOkCancel = (_a = innerConfig.value.okCancel) !== null && _a !== void 0 ? _a : innerConfig.value.type === "confirm";
    const [contextLocale] = useLocaleReceiver("Modal", localeValues.Modal);
    return () => createVNode(ConfirmDialog, _objectSpread$2(_objectSpread$2({
      "prefixCls": prefixCls,
      "rootPrefixCls": rootPrefixCls
    }, innerConfig.value), {}, {
      "close": close,
      "open": open.value,
      "afterClose": afterClose,
      "okText": innerConfig.value.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.justOkText),
      "direction": innerConfig.value.direction || direction.value,
      "cancelText": innerConfig.value.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.cancelText)
    }), null);
  }
});
let uuid = 0;
const ElementsHolder = defineComponent({
  name: "ElementsHolder",
  inheritAttrs: false,
  setup(_, _ref) {
    let {
      expose
    } = _ref;
    const modals = shallowRef([]);
    const addModal = (modal) => {
      modals.value.push(modal);
      modals.value = modals.value.slice();
      return () => {
        modals.value = modals.value.filter((currentModal) => currentModal !== modal);
      };
    };
    expose({
      addModal
    });
    return () => {
      return modals.value.map((modal) => modal());
    };
  }
});
function useModal() {
  const holderRef = shallowRef(null);
  const actionQueue = shallowRef([]);
  watch(actionQueue, () => {
    if (actionQueue.value.length) {
      const cloneQueue = [...actionQueue.value];
      cloneQueue.forEach((action) => {
        action();
      });
      actionQueue.value = [];
    }
  }, {
    immediate: true
  });
  const getConfirmFunc = (withFunc) => function hookConfirm(config) {
    var _a;
    uuid += 1;
    const open = shallowRef(true);
    const modalRef = shallowRef(null);
    const configRef = shallowRef(unref(config));
    const updateConfig = shallowRef({});
    watch(() => config, (val) => {
      updateAction(_extends(_extends({}, isRef(val) ? val.value : val), updateConfig.value));
    });
    const destroyAction = function() {
      open.value = false;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const triggerCancel = args.some((param) => param && param.triggerCancel);
      if (configRef.value.onCancel && triggerCancel) {
        configRef.value.onCancel(() => {
        }, ...args.slice(1));
      }
    };
    let closeFunc;
    const modal = () => createVNode(HookModal, {
      "key": `modal-${uuid}`,
      "config": withFunc(configRef.value),
      "ref": modalRef,
      "open": open.value,
      "destroyAction": destroyAction,
      "afterClose": () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      }
    }, null);
    closeFunc = (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.addModal(modal);
    if (closeFunc) {
      destroyFns.push(closeFunc);
    }
    const updateAction = (newConfig) => {
      configRef.value = _extends(_extends({}, configRef.value), newConfig);
    };
    const destroy = () => {
      if (modalRef.value) {
        destroyAction();
      } else {
        actionQueue.value = [...actionQueue.value, destroyAction];
      }
    };
    const update = (newConfig) => {
      updateConfig.value = newConfig;
      if (modalRef.value) {
        updateAction(newConfig);
      } else {
        actionQueue.value = [...actionQueue.value, () => updateAction(newConfig)];
      }
    };
    return {
      destroy,
      update
    };
  };
  const fns = computed(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }));
  const holderKey = /* @__PURE__ */ Symbol("modalHolderKey");
  return [fns.value, () => createVNode(ElementsHolder, {
    "key": holderKey,
    "ref": holderRef
  }, null)];
}
function modalWarn(props) {
  return confirm(withWarn(props));
}
Modal.useModal = useModal;
Modal.info = function infoFn(props) {
  return confirm(withInfo(props));
};
Modal.success = function successFn(props) {
  return confirm(withSuccess(props));
};
Modal.error = function errorFn(props) {
  return confirm(withError(props));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props) {
  return confirm(withConfirm(props));
};
Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};
Modal.install = function(app) {
  app.component(Modal.name, Modal);
  return app;
};
const _imports_0$1 = "" + __buildAssetsURL("白猫.WviTBgXD.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    let searchDebounceTimer = null;
    const router = useRouter();
    const failedImages = ref([]);
    const checkImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };
    const isSearchOpen = ref(false);
    const searchValue = ref("");
    const searchInputRef = ref(null);
    const showResults = ref(false);
    const loading = ref(false);
    const searchResults = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const total = ref(0);
    const lastKeyword = ref("");
    const totalPages = computed(() => {
      return Math.ceil(total.value / pageSize.value) || 1;
    });
    const getArticleTags = (tagsStr) => {
      if (!tagsStr) return [];
      return tagsStr.split(",").map((tag) => tag.trim()).filter(Boolean);
    };
    const handleClose = () => {
      isSearchOpen.value = false;
      setTimeout(() => {
        searchValue.value = "";
        showResults.value = false;
        searchResults.value = [];
        currentPage.value = 1;
        failedImages.value = [];
      }, 300);
    };
    const handleSearch = async () => {
      if (!searchValue.value.trim()) return;
      if (searchDebounceTimer) {
        clearTimeout(searchDebounceTimer);
      }
      lastKeyword.value = searchValue.value.trim();
      currentPage.value = 1;
      showResults.value = true;
      searchDebounceTimer = setTimeout(async () => {
        await fetchResults();
        searchDebounceTimer = null;
      }, 300);
    };
    const fetchResults = async () => {
      loading.value = true;
      failedImages.value = [];
      try {
        const result = await articleApi.getPublicArticleList({
          currentPage: currentPage.value,
          pageSize: pageSize.value,
          keyword: lastKeyword.value
        });
        if (result && result.data) {
          searchResults.value = result.data.records || [];
          total.value = result.data.total || 0;
        } else {
          searchResults.value = [];
          total.value = 0;
        }
        validateArticleImages().catch(() => {
        });
      } catch (error) {
        console.error("搜索失败:", error);
        searchResults.value = [];
        total.value = 0;
      } finally {
        loading.value = false;
      }
    };
    const validateArticleImages = async () => {
      for (const article of searchResults.value) {
        if (article.coverImage && !failedImages.value.includes(article.id)) {
          try {
            const isValid = await checkImage(article.coverImage);
            if (!isValid) {
              failedImages.value.push(article.id);
            }
          } catch {
            failedImages.value.push(article.id);
          }
        }
      }
    };
    const prevPage = async () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        loading.value = true;
        await fetchResults();
      }
    };
    const nextPage = async () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        loading.value = true;
        await fetchResults();
      }
    };
    const goToArticle = (id) => {
      handleClose();
      router.push(`/article/${id}`);
    };
    watch(isSearchOpen, async (open) => {
      if (open) {
        await nextTick();
        setTimeout(() => {
          searchInputRef.value?.focus();
        }, 100);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_modal = Modal;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><button class="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer" type="button">`);
      _push(ssrRenderComponent(unref(SearchOutlined), { class: "text-gray-600" }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_a_modal, {
        open: isSearchOpen.value,
        "onUpdate:open": ($event) => isSearchOpen.value = $event,
        bodyStyle: { padding: "0" },
        footer: null,
        maskClosable: true,
        width: 640,
        centered: "",
        class: "search-modal",
        onCancel: handleClose
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3 pb-2 pr-10 border-b"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SearchOutlined), { class: "text-gray-400" }, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttr("value", searchValue.value)} class="flex-1 bg-transparent font-medium outline-none placeholder:text-gray-500 placeholder:font-normal" placeholder="搜索文章..." type="text"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3 pb-2 pr-10 border-b" }, [
                createVNode(unref(SearchOutlined), { class: "text-gray-400" }),
                withDirectives(createVNode("input", {
                  ref_key: "searchInputRef",
                  ref: searchInputRef,
                  "onUpdate:modelValue": ($event) => searchValue.value = $event,
                  class: "flex-1 bg-transparent font-medium outline-none placeholder:text-gray-500 placeholder:font-normal",
                  placeholder: "搜索文章...",
                  type: "text",
                  onKeyup: [
                    withKeys(handleSearch, ["enter"]),
                    withKeys(handleClose, ["escape"])
                  ]
                }, null, 40, ["onUpdate:modelValue"]), [
                  [vModelText, searchValue.value]
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (showResults.value) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              if (loading.value) {
                _push2(`<div class="py-8 text-center text-gray-400"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(LoadingOutlined), { spin: "" }, null, _parent2, _scopeId));
                _push2(` 加载中... </div>`);
              } else if (searchResults.value.length === 0) {
                _push2(`<div class="py-8 text-center text-gray-400"${_scopeId}> 未找到相关文章 </div>`);
              } else {
                _push2(`<div class="max-h-80 overflow-y-auto"${_scopeId}><!--[-->`);
                ssrRenderList(searchResults.value, (article) => {
                  _push2(`<div class="p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="flex-1 min-w-0 flex flex-col justify-center"${_scopeId}><div class="flex items-center flex-wrap gap-2 mb-1.5"${_scopeId}><span class="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary"${_scopeId}>${ssrInterpolate(article.categoryName || "未分类")}</span>`);
                  if (article.isTop) {
                    _push2(`<span class="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-500 font-medium"${_scopeId}> 置顶 </span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--[-->`);
                  ssrRenderList(getArticleTags(article.tags), (tag) => {
                    _push2(`<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"${_scopeId}>${ssrInterpolate(tag)}</span>`);
                  });
                  _push2(`<!--]--></div><h4 class="text-sm font-semibold text-gray-800 truncate group-hover:text-primary transition-colors"${_scopeId}>${ssrInterpolate(article.title)}</h4><p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed"${_scopeId}>${ssrInterpolate(article.summary || "暂无摘要")}</p></div><div class="flex-shrink-0 flex items-center"${_scopeId}><svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></path></svg></div></div></div>`);
                });
                _push2(`<!--]--></div>`);
              }
              if (!loading.value && searchResults.value.length > 0) {
                _push2(`<div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-100"${_scopeId}><span class="text-xs text-gray-400"${_scopeId}> 共 ${ssrInterpolate(total.value)} 篇 </span><div class="flex items-center gap-2"${_scopeId}><button${ssrIncludeBooleanAttr(currentPage.value <= 1) ? " disabled" : ""} class="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors" type="button"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(LeftOutlined), null, null, _parent2, _scopeId));
                _push2(`</button><span class="text-xs text-gray-500 min-w-[60px] text-center"${_scopeId}>${ssrInterpolate(currentPage.value)} / ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value >= totalPages.value) ? " disabled" : ""} class="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors" type="button"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(RightOutlined), null, null, _parent2, _scopeId));
                _push2(`</button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="py-6 text-center text-sm text-gray-600"${_scopeId}>`);
              if (!searchValue.value) {
                _push2(`<span${_scopeId}>输入关键词后按 Enter 键搜索</span>`);
              } else {
                _push2(`<span${_scopeId}>按 Enter 搜索: <span class="text-primary font-medium"${_scopeId}>${ssrInterpolate(searchValue.value)}</span></span>`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                showResults.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  loading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "py-8 text-center text-gray-400"
                  }, [
                    createVNode(unref(LoadingOutlined), { spin: "" }),
                    createTextVNode(" 加载中... ")
                  ])) : searchResults.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "py-8 text-center text-gray-400"
                  }, " 未找到相关文章 ")) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "max-h-80 overflow-y-auto"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(searchResults.value, (article) => {
                      return openBlock(), createBlock("div", {
                        key: article.id,
                        class: "p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0",
                        onClick: ($event) => goToArticle(article.id)
                      }, [
                        createVNode("div", { class: "flex gap-3" }, [
                          createVNode("div", { class: "flex-1 min-w-0 flex flex-col justify-center" }, [
                            createVNode("div", { class: "flex items-center flex-wrap gap-2 mb-1.5" }, [
                              createVNode("span", { class: "text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary" }, toDisplayString(article.categoryName || "未分类"), 1),
                              article.isTop ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-500 font-medium"
                              }, " 置顶 ")) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(getArticleTags(article.tags), (tag) => {
                                return openBlock(), createBlock("span", {
                                  key: tag,
                                  class: "text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"
                                }, toDisplayString(tag), 1);
                              }), 128))
                            ]),
                            createVNode("h4", { class: "text-sm font-semibold text-gray-800 truncate group-hover:text-primary transition-colors" }, toDisplayString(article.title), 1),
                            createVNode("p", { class: "text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed" }, toDisplayString(article.summary || "暂无摘要"), 1)
                          ]),
                          createVNode("div", { class: "flex-shrink-0 flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 text-gray-300",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                d: "M9 5l7 7-7 7",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2"
                              })
                            ]))
                          ])
                        ])
                      ], 8, ["onClick"]);
                    }), 128))
                  ])),
                  !loading.value && searchResults.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "flex items-center justify-between mt-4 pt-3 border-t border-gray-100"
                  }, [
                    createVNode("span", { class: "text-xs text-gray-400" }, " 共 " + toDisplayString(total.value) + " 篇 ", 1),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("button", {
                        disabled: currentPage.value <= 1,
                        class: "w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                        type: "button",
                        onClick: prevPage
                      }, [
                        createVNode(unref(LeftOutlined))
                      ], 8, ["disabled"]),
                      createVNode("span", { class: "text-xs text-gray-500 min-w-[60px] text-center" }, toDisplayString(currentPage.value) + " / " + toDisplayString(totalPages.value), 1),
                      createVNode("button", {
                        disabled: currentPage.value >= totalPages.value,
                        class: "w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                        type: "button",
                        onClick: nextPage
                      }, [
                        createVNode(unref(RightOutlined))
                      ], 8, ["disabled"])
                    ])
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "py-6 text-center text-sm text-gray-600"
                }, [
                  !searchValue.value ? (openBlock(), createBlock("span", { key: 0 }, "输入关键词后按 Enter 键搜索")) : (openBlock(), createBlock("span", { key: 1 }, [
                    createTextVNode("按 Enter 搜索: "),
                    createVNode("span", { class: "text-primary font-medium" }, toDisplayString(searchValue.value), 1)
                  ]))
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Search.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Search = Object.assign(_sfc_main$3, { __name: "BlogSearch" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    siteName: {}
  },
  setup(__props) {
    const route = useRoute();
    const categoryList = ref([]);
    const selectedCategoryId = ref(void 0);
    const isDropdownOpen = ref(false);
    const currentCategoryName = computed(() => {
      if (!selectedCategoryId.value) return "全部分类";
      const category = categoryList.value.find((c) => c.id === selectedCategoryId.value);
      return category?.name || "全部分类";
    });
    const showCategoryDropdown = computed(() => {
      return route.path === "/" || route.path === "";
    });
    const showMobileCategory = computed(() => {
      return route.path === "/" || route.path === "";
    });
    const menu = ref([
      {
        name: "主页",
        link: "/"
      },
      {
        name: "友情链接",
        link: "/friendsLink"
      }
      // {
      //         name: "MyBlog",
      //         link: "/"
      // }
    ]);
    const isMenuOpen = ref(false);
    const isVisible = ref(true);
    ref(0);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1$1$1;
      const _component_MenuOutlined = MenuOutlined;
      _push(`<!--[--><nav class="${ssrRenderClass([unref(isVisible) || unref(isMenuOpen) ? "translate-y-0" : "-translate-y-full", "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:max-w-2xl max-w-xl rounded-full px-4 py-2 border border-gray-200/50 bg-white/70 backdrop-blur-md flex items-center justify-between z-50 shadow-[0_8px_32px_rgba(22,119,255,0.04)] transition-transform duration-300"])}" data-allow-mismatch data-v-f8232755><div class="text-lg font-bold tracking-tighter text-gray-900 px-3 flex items-center" data-v-f8232755><img alt="" height="30"${ssrRenderAttr("src", _imports_0$1)} width="30" data-v-f8232755></div><div class="hidden md:flex items-center gap-8" data-v-f8232755><!--[-->`);
      ssrRenderList(unref(menu), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.link,
          class: "text-gray-500 hover:text-primary transition-colors font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight cursor-pointer",
          "data-allow-mismatch": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (unref(showCategoryDropdown)) {
        _push(`<div class="category-dropdown" data-v-f8232755><button class="category-dropdown-trigger text-gray-500 hover:text-primary transition-colors font-[&#39;Plus_Jakarta_Sans&#39;] text-sm font-medium tracking-tight cursor-pointer" data-v-f8232755>${ssrInterpolate(unref(currentCategoryName))} <span class="dropdown-arrow" data-v-f8232755>▼</span></button>`);
        if (unref(isDropdownOpen)) {
          _push(`<div class="category-dropdown-menu" data-v-f8232755><div class="${ssrRenderClass([{ active: !unref(selectedCategoryId) }, "dropdown-item"])}" data-v-f8232755> 全部分类 </div><!--[-->`);
          ssrRenderList(unref(categoryList), (category) => {
            _push(`<div class="${ssrRenderClass([{ active: unref(selectedCategoryId) === category.id }, "dropdown-item"])}" data-v-f8232755>${ssrInterpolate(category.name)}</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-2" data-v-f8232755>`);
      _push(ssrRenderComponent(Search, null, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, {
        fallback: "<!-- user-auth-section -->",
        "fallback-tag": "div"
      }, {}, _parent));
      _push(`<div class="mx-2 flex md:hidden" data-v-f8232755><button class="flex items-center cursor-pointer" data-v-f8232755>`);
      _push(ssrRenderComponent(_component_MenuOutlined, { style: { fontSize: "18px" } }, null, _parent));
      _push(`</button></div></div></nav>`);
      if (unref(isMenuOpen)) {
        _push(`<div class="md:hidden fixed w-full h-full bg-white z-30" data-v-f8232755><div class="mt-28 flex flex-col" data-v-f8232755><!--[-->`);
        ssrRenderList(unref(menu), (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: index,
            to: item.link,
            class: "mb-4 mx-6 text-xl font-black cursor-pointer",
            "data-allow-mismatch": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_ClientOnly, { "fallback-tag": "div" }, {}, _parent));
        if (unref(showMobileCategory)) {
          _push(`<div class="mb-4 mx-6" data-v-f8232755><div class="text-xl font-black mb-2" data-v-f8232755>选择分类</div><div class="flex flex-col gap-2 px-3 border-l-2 border-gray-300" data-v-f8232755><div class="${ssrRenderClass([{ "text-blue-500 font-bold": !unref(selectedCategoryId) }, "text-base cursor-pointer"])}" data-v-f8232755> 全部分类 </div><!--[-->`);
          ssrRenderList(unref(categoryList), (category) => {
            _push(`<div class="${ssrRenderClass([{ "text-blue-500 font-bold": unref(selectedCategoryId) === category.id }, "text-base cursor-pointer"])}" data-v-f8232755>${ssrInterpolate(category.name)}</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-f8232755"]]), { __name: "AppHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  props: {
    siteName: {},
    recordNumber: {}
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const rssUrl = computed(() => `${config.public.apiBase}/api/public/rss`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_divider = __nuxt_component_0;
      const _component_a_tooltip = __nuxt_component_1$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_a_divider, null, null, _parent));
      _push(`<div class="pb-6 bg-white flex flex-col md:flex-row md:justify-between"><div class="flex flex-col md:mx-10"><div class="my-auto mx-8"><h1 class="text-xl font-black mb-4">${ssrInterpolate(__props.siteName || "MyBlog")}</h1><p class="text-gray-600">© 2026 All rights reserved.</p>`);
      if (__props.recordNumber) {
        _push(`<p class="text-gray-500 text-sm mt-2">${ssrInterpolate(__props.recordNumber)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="my-4 md:my-0"></div><div class="flex flex-row md:mx-10"><div class="my-auto flex gap-4 mx-8 md:mx-10">`);
      _push(ssrRenderComponent(_component_a_tooltip, { title: "RSS订阅" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", unref(rssUrl))} class="text-gray-500 hover:text-blue-500 transition-colors" target="_blank"${_scopeId}><svg class="bi bi-rss" fill="currentColor" height="20" viewBox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"${_scopeId}></path><path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"${_scopeId}></path></svg></a>`);
          } else {
            return [
              createVNode("a", {
                href: unref(rssUrl),
                class: "text-gray-500 hover:text-blue-500 transition-colors",
                target: "_blank"
              }, [
                (openBlock(), createBlock("svg", {
                  class: "bi bi-rss",
                  fill: "currentColor",
                  height: "20",
                  viewBox: "0 0 16 16",
                  width: "20",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }),
                  createVNode("path", { d: "M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z" })
                ]))
              ], 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const _imports_0 = "" + __buildAssetsURL("webbg.BAws7zjM.webp");
const API_BASE = "/api/public/config";
const getSiteInfo = async () => {
  return (
    /** @type {Promise<ApiResponse>} */
    service.get(`${API_BASE}/site-info`)
  );
};
const siteApi = {
  getSiteInfo
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const siteStore = useSiteStore();
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("site-info", async () => {
      try {
        const result = await siteApi.getSiteInfo();
        if (result?.success && result.data) {
          siteStore.setSiteInfo(result.data);
        }
      } catch (error) {
        console.error("获取网站配置失败:", error);
      }
      return null;
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_back_top = BackTop;
      const _component_app_header = __nuxt_component_1;
      const _component_app_footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><img alt="" class="fixed top-0 left-0 w-full h-full object-cover opacity-30 z-40 pointer-events-none min-w-[100vw] min-h-[100vh]"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "mix-blend-mode": "multiply" })}"><div class="min-h-screen flex flex-col">`);
      _push(ssrRenderComponent(_component_a_back_top, null, null, _parent));
      _push(ssrRenderComponent(_component_app_header, {
        "site-name": unref(siteStore).siteName
      }, null, _parent));
      _push(`<main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_app_footer, {
        "record-number": unref(siteStore).recordNumber,
        "site-name": unref(siteStore).siteName
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-kiHQNpAi.mjs.map
