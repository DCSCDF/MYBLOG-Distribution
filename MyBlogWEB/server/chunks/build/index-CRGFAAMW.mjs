import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import { defineComponent, shallowRef, watchEffect, computed, createVNode, Fragment } from 'vue';
import { u as useConfigInject, c as classNames, g as genComponentStyleHook, m as merge, P as PropTypes, q as eventType, r as resetComponent, T as capitalize } from './request-BU3wK0UY.mjs';
import { j as isPresetColor, k as isPresetStatusColor, W as Wave, h as CloseOutlined, l as genPresetColor } from './siteStore-MquY96fb.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';

const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`],
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
};
const genPresetStyle = (token) => genPresetColor(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      "&-inverse": {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
});
const genBaseStyle = (token) => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls
  } = token;
  const paddingInline = tagPaddingHorizontal - lineWidth;
  const iconMarginInline = paddingXXS - lineWidth;
  return {
    // Result
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      display: "inline-block",
      height: "auto",
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: `${token.tagLineHeight}px`,
      whiteSpace: "nowrap",
      background: token.tagDefaultBg,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: "start",
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: token.tagDefaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        color: token.colorTextDescription,
        fontSize: token.tagIconSize,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      [`&-checkable`]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        "&:active, &-checked": {
          color: token.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: token.colorPrimary,
          "&:hover": {
            backgroundColor: token.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: token.colorPrimaryActive
        }
      },
      [`&-hidden`]: {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: "transparent",
      background: token.tagBorderlessBg
    }
  };
};
const useStyle = genComponentStyleHook("Tag", (token) => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    fontSizeIcon
  } = token;
  const tagHeight = Math.round(fontSize * lineHeight);
  const tagFontSize = token.fontSizeSM;
  const tagLineHeight = tagHeight - lineWidth * 2;
  const tagDefaultBg = token.colorFillAlter;
  const tagDefaultColor = token.colorText;
  const tagToken = merge(token, {
    tagFontSize,
    tagLineHeight,
    tagDefaultBg,
    tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: token.colorFillTertiary
  });
  return [genBaseStyle(tagToken), genPresetStyle(tagToken), genTagStatusStyle(tagToken, "success", "Success"), genTagStatusStyle(tagToken, "processing", "Info"), genTagStatusStyle(tagToken, "error", "Error"), genTagStatusStyle(tagToken, "warning", "Warning")];
});
const checkableTagProps = () => ({
  prefixCls: String,
  checked: {
    type: Boolean,
    default: void 0
  },
  onChange: {
    type: Function
  },
  onClick: {
    type: Function
  },
  "onUpdate:checked": Function
});
const CheckableTag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckableTag",
  inheritAttrs: false,
  props: checkableTagProps(),
  // emits: ['update:checked', 'change', 'click'],
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("tag", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const handleClick = (e) => {
      const {
        checked
      } = props;
      emit("update:checked", !checked);
      emit("change", !checked);
      emit("click", e);
    };
    const cls = computed(() => classNames(prefixCls.value, hashId.value, {
      [`${prefixCls.value}-checkable`]: true,
      [`${prefixCls.value}-checkable-checked`]: props.checked
    }));
    return () => {
      var _a;
      return wrapSSR(createVNode("span", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": [cls.value, attrs.class],
        "onClick": handleClick
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const tagProps = () => ({
  prefixCls: String,
  color: {
    type: String
  },
  closable: {
    type: Boolean,
    default: false
  },
  closeIcon: PropTypes.any,
  /** @deprecated `visible` will be removed in next major version. */
  visible: {
    type: Boolean,
    default: void 0
  },
  onClose: {
    type: Function
  },
  onClick: eventType(),
  "onUpdate:visible": Function,
  icon: PropTypes.any,
  bordered: {
    type: Boolean,
    default: true
  }
});
const Tag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATag",
  inheritAttrs: false,
  props: tagProps(),
  // emits: ['update:visible', 'close'],
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("tag", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const visible = shallowRef(true);
    watchEffect(() => {
      if (props.visible !== void 0) {
        visible.value = props.visible;
      }
    });
    const handleCloseClick = (e) => {
      e.stopPropagation();
      emit("update:visible", false);
      emit("close", e);
      if (e.defaultPrevented) {
        return;
      }
      if (props.visible === void 0) {
        visible.value = false;
      }
    };
    const isInternalColor = computed(() => isPresetColor(props.color) || isPresetStatusColor(props.color));
    const tagClassName = computed(() => classNames(prefixCls.value, hashId.value, {
      [`${prefixCls.value}-${props.color}`]: isInternalColor.value,
      [`${prefixCls.value}-has-color`]: props.color && !isInternalColor.value,
      [`${prefixCls.value}-hidden`]: !visible.value,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-borderless`]: !props.bordered
    }));
    const handleClick = (e) => {
      emit("click", e);
    };
    return () => {
      var _a, _b, _c;
      const {
        icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots),
        color,
        closeIcon = (_b = slots.closeIcon) === null || _b === void 0 ? void 0 : _b.call(slots),
        closable = false
      } = props;
      const renderCloseIcon = () => {
        if (closable) {
          return closeIcon ? createVNode("span", {
            "class": `${prefixCls.value}-close-icon`,
            "onClick": handleCloseClick
          }, [closeIcon]) : createVNode(CloseOutlined, {
            "class": `${prefixCls.value}-close-icon`,
            "onClick": handleCloseClick
          }, null);
        }
        return null;
      };
      const tagStyle = {
        backgroundColor: color && !isInternalColor.value ? color : void 0
      };
      const iconNode = icon || null;
      const children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      const kids = iconNode ? createVNode(Fragment, null, [iconNode, createVNode("span", null, [children])]) : children;
      const isNeedWave = props.onClick !== void 0;
      const tagNode = createVNode("span", _objectSpread(_objectSpread({}, attrs), {}, {
        "onClick": handleClick,
        "class": [tagClassName.value, attrs.class],
        "style": [tagStyle, attrs.style]
      }), [kids, renderCloseIcon()]);
      return wrapSSR(isNeedWave ? createVNode(Wave, null, {
        default: () => [tagNode]
      }) : tagNode);
    };
  }
});
Tag.CheckableTag = CheckableTag;
Tag.install = function(app) {
  app.component(Tag.name, Tag);
  app.component(CheckableTag.name, CheckableTag);
  return app;
};

export { Tag as T };
//# sourceMappingURL=index-CRGFAAMW.mjs.map
