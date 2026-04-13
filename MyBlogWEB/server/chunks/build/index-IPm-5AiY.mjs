import { defineComponent, mergeProps, shallowRef, watch, createVNode, isVNode, cloneVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useConfigInject, f as filterEmpty, g as genComponentStyleHook, m as merge, S as getPropsSlot, P as PropTypes, r as resetComponent, K as Keyframe } from './request-BU3wK0UY.mjs';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import { debounce } from 'throttle-debounce';
import { i as initDefaultProps } from './initDefaultProps-C-dWF3aS.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
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

const antSpinMove = new Keyframe("antSpinMove", {
  to: {
    opacity: 1
  }
});
const antRotate = new Keyframe("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
});
const genSpinStyle = (token) => ({
  [`${token.componentCls}`]: _extends(_extends({}, resetComponent(token)), {
    position: "absolute",
    display: "none",
    color: token.colorPrimary,
    textAlign: "center",
    verticalAlign: "middle",
    opacity: 0,
    transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
    "&-spinning": {
      position: "static",
      display: "inline-block",
      opacity: 1
    },
    "&-nested-loading": {
      position: "relative",
      [`> div > ${token.componentCls}`]: {
        position: "absolute",
        top: 0,
        insetInlineStart: 0,
        zIndex: 4,
        display: "block",
        width: "100%",
        height: "100%",
        maxHeight: token.contentHeight,
        [`${token.componentCls}-dot`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "50%",
          margin: -token.spinDotSize / 2
        },
        [`${token.componentCls}-text`]: {
          position: "absolute",
          top: "50%",
          width: "100%",
          paddingTop: (token.spinDotSize - token.fontSize) / 2 + 2,
          textShadow: `0 1px 2px ${token.colorBgContainer}`
          // FIXME: shadow
        },
        [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
          marginTop: -(token.spinDotSize / 2) - 10
        },
        "&-sm": {
          [`${token.componentCls}-dot`]: {
            margin: -token.spinDotSizeSM / 2
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeSM - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeSM / 2) - 10
          }
        },
        "&-lg": {
          [`${token.componentCls}-dot`]: {
            margin: -(token.spinDotSizeLG / 2)
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeLG - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeLG / 2) - 10
          }
        }
      },
      [`${token.componentCls}-container`]: {
        position: "relative",
        transition: `opacity ${token.motionDurationSlow}`,
        "&::after": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          height: "100%",
          background: token.colorBgContainer,
          opacity: 0,
          transition: `all ${token.motionDurationSlow}`,
          content: '""',
          pointerEvents: "none"
        }
      },
      [`${token.componentCls}-blur`]: {
        clear: "both",
        opacity: 0.5,
        userSelect: "none",
        pointerEvents: "none",
        [`&::after`]: {
          opacity: 0.4,
          pointerEvents: "auto"
        }
      }
    },
    // tip
    // ------------------------------
    [`&-tip`]: {
      color: token.spinDotDefault
    },
    // dots
    // ------------------------------
    [`${token.componentCls}-dot`]: {
      position: "relative",
      display: "inline-block",
      fontSize: token.spinDotSize,
      width: "1em",
      height: "1em",
      "&-item": {
        position: "absolute",
        display: "block",
        width: (token.spinDotSize - token.marginXXS / 2) / 2,
        height: (token.spinDotSize - token.marginXXS / 2) / 2,
        backgroundColor: token.colorPrimary,
        borderRadius: "100%",
        transform: "scale(0.75)",
        transformOrigin: "50% 50%",
        opacity: 0.3,
        animationName: antSpinMove,
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
        "&:nth-child(1)": {
          top: 0,
          insetInlineStart: 0
        },
        "&:nth-child(2)": {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: "0.4s"
        },
        "&:nth-child(3)": {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: "0.8s"
        },
        "&:nth-child(4)": {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: "1.2s"
        }
      },
      "&-spin": {
        transform: "rotate(45deg)",
        animationName: antRotate,
        animationDuration: "1.2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      }
    },
    // Sizes
    // ------------------------------
    // small
    [`&-sm ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeSM,
      i: {
        width: (token.spinDotSizeSM - token.marginXXS / 2) / 2,
        height: (token.spinDotSizeSM - token.marginXXS / 2) / 2
      }
    },
    // large
    [`&-lg ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeLG,
      i: {
        width: (token.spinDotSizeLG - token.marginXXS) / 2,
        height: (token.spinDotSizeLG - token.marginXXS) / 2
      }
    },
    [`&${token.componentCls}-show-text ${token.componentCls}-text`]: {
      display: "block"
    }
  })
});
const useStyle = genComponentStyleHook("Spin", (token) => {
  const spinToken = merge(token, {
    spinDotDefault: token.colorTextDescription,
    spinDotSize: token.controlHeightLG / 2,
    spinDotSizeSM: token.controlHeightLG * 0.35,
    spinDotSizeLG: token.controlHeight
  });
  return [genSpinStyle(spinToken)];
}, {
  contentHeight: 400
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const spinProps = () => ({
  prefixCls: String,
  spinning: {
    type: Boolean,
    default: void 0
  },
  size: String,
  wrapperClassName: String,
  tip: PropTypes.any,
  delay: Number,
  indicator: PropTypes.any
});
let defaultIndicator = null;
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
function setDefaultIndicator(Content) {
  const Indicator = Content.indicator;
  defaultIndicator = typeof Indicator === "function" ? Indicator : () => createVNode(Indicator, null, null);
}
const Spin = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASpin",
  inheritAttrs: false,
  props: initDefaultProps(spinProps(), {
    size: "default",
    spinning: true,
    wrapperClassName: ""
  }),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      prefixCls,
      size,
      direction
    } = useConfigInject("spin", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const sSpinning = shallowRef(props.spinning && !shouldDelay(props.spinning, props.delay));
    let updateSpinning;
    watch([() => props.spinning, () => props.delay], () => {
      updateSpinning === null || updateSpinning === void 0 ? void 0 : updateSpinning.cancel();
      updateSpinning = debounce(props.delay, () => {
        sSpinning.value = props.spinning;
      });
      updateSpinning === null || updateSpinning === void 0 ? void 0 : updateSpinning();
    }, {
      immediate: true,
      flush: "post"
    });
    return () => {
      var _a, _b;
      const {
        class: cls
      } = attrs, divProps = __rest(attrs, ["class"]);
      const {
        tip = (_a = slots.tip) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      const children = (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
      const spinClassName = {
        [hashId.value]: true,
        [prefixCls.value]: true,
        [`${prefixCls.value}-sm`]: size.value === "small",
        [`${prefixCls.value}-lg`]: size.value === "large",
        [`${prefixCls.value}-spinning`]: sSpinning.value,
        [`${prefixCls.value}-show-text`]: !!tip,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [cls]: !!cls
      };
      function renderIndicator(prefixCls2) {
        const dotClassName = `${prefixCls2}-dot`;
        let indicator = getPropsSlot(slots, props, "indicator");
        if (indicator === null) {
          return null;
        }
        if (Array.isArray(indicator)) {
          indicator = indicator.length === 1 ? indicator[0] : indicator;
        }
        if (isVNode(indicator)) {
          return cloneVNode(indicator, {
            class: dotClassName
          });
        }
        if (defaultIndicator && isVNode(defaultIndicator())) {
          return cloneVNode(defaultIndicator(), {
            class: dotClassName
          });
        }
        return createVNode("span", {
          "class": `${dotClassName} ${prefixCls2}-dot-spin`
        }, [createVNode("i", {
          "class": `${prefixCls2}-dot-item`
        }, null), createVNode("i", {
          "class": `${prefixCls2}-dot-item`
        }, null), createVNode("i", {
          "class": `${prefixCls2}-dot-item`
        }, null), createVNode("i", {
          "class": `${prefixCls2}-dot-item`
        }, null)]);
      }
      const spinElement = createVNode("div", _objectSpread(_objectSpread({}, divProps), {}, {
        "class": spinClassName,
        "aria-live": "polite",
        "aria-busy": sSpinning.value
      }), [renderIndicator(prefixCls.value), tip ? createVNode("div", {
        "class": `${prefixCls.value}-text`
      }, [tip]) : null]);
      if (children && filterEmpty(children).length) {
        const containerClassName = {
          [`${prefixCls.value}-container`]: true,
          [`${prefixCls.value}-blur`]: sSpinning.value
        };
        return wrapSSR(createVNode("div", {
          "class": [`${prefixCls.value}-nested-loading`, props.wrapperClassName, hashId.value]
        }, [sSpinning.value && createVNode("div", {
          "key": "loading"
        }, [spinElement]), createVNode("div", {
          "class": containerClassName,
          "key": "container"
        }, [children])]));
      }
      return wrapSSR(spinElement);
    };
  }
});
Spin.setDefaultIndicator = setDefaultIndicator;
Spin.install = function(app) {
  app.component(Spin.name, Spin);
  return app;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_spin = Spin;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center mt-52 flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_a_spin, { size: "large" }, null, _parent));
      _push(`<p class="mx-auto mt-3 my-32 text-gray-600">Loading...</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-IPm-5AiY.mjs.map
