import { inject, ref, h, getCurrentInstance, nextTick, reactive, defineComponent, createVNode, computed, toValue, onServerPrefetch, shallowRef, unref, toRef, provide, watch, render, Transition, Teleport, TransitionGroup, watchEffect, toRaw } from 'vue';
import { a as useNuxtApp, h as asyncDataDefaults, c as createError } from './server.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
import { P as PropTypes, u as useConfigInject, c as classNames, g as genComponentStyleHook, y as findDOMNode, p as objectType, t as tuple, l as localeValues, j as warning$1, R as withInstall, V as useConfigContextInject, a4 as defaultIconPrefixCls, a5 as createTheme, a6 as seedToken, a7 as useConfigContextProvider, a8 as useProvideGlobalForm, d as useProviderSize, e as useProviderDisabled, a9 as LocaleReceiver, aa as configProviderProps, ab as DesignTokenProvider, m as merge, a1 as renderHelper, G as useToken, a2 as useStyleRegister, E as resetIcon, a3 as defaultConfig, K as Keyframe, r as resetComponent, ac as renderEmpty, a0 as wrapPromiseFn } from './request-BU3wK0UY.mjs';
import _objectSpread$d from '@babel/runtime/helpers/esm/objectSpread2';
import { generate as generate$1, blue } from '@ant-design/colors';
import { TinyColor } from '@ctrl/tinycolor';
import { defineStore } from 'pinia';

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

// This icon file is generated automatically.
var CheckCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };

var contextKey = Symbol('iconContext');
var useInjectIconContext = function useInjectIconContext() {
  return inject(contextKey, {
    prefixCls: ref('anticon'),
    rootClassName: ref(''),
    csp: ref()
  });
};

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$c(target, key, source[key]); }); } return target; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function warning(valid, message) {
}


function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return h(node.tag, _objectSpread$c({
      key: key
    }, node.attrs), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return h(node.tag, _objectSpread$c({
    key: key
  }, rootProps, node.attrs), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";

var useInsertStyles = function useInsertStyles() {
  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls;
      _useInjectIconContext.csp;

  getCurrentInstance();
  var mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls.value);
  }

  nextTick(function () {
    {
      return;
    }
  });
};

var _excluded$1 = ["icon", "primaryColor", "secondaryColor"];

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } return target; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twoToneColorPalette = reactive({
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
});

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread$b({}, twoToneColorPalette);
}

var IconBase = function IconBase(props, context) {
  var _props$context$attrs = _objectSpread$b({}, props, context.attrs),
      icon = _props$context$attrs.icon,
      primaryColor = _props$context$attrs.primaryColor,
      secondaryColor = _props$context$attrs.secondaryColor,
      restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$1);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  warning(isIconDefinition(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread$b({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), _objectSpread$b({}, restProps, {
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  })); // },
};

IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var InsertStyles = defineComponent({
  name: 'InsertStyles',
  setup: function setup() {
    useInsertStyles();
    return function () {
      return null;
    };
  }
});

var _excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$a(target, key, source[key]); }); } return target; }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

setTwoToneColor(blue.primary);

var Icon = function Icon(props, context) {
  var _classObj;

  var _props$context$attrs = _objectSpread$a({}, props, context.attrs),
      cls = _props$context$attrs["class"],
      icon = _props$context$attrs.icon,
      spin = _props$context$attrs.spin,
      rotate = _props$context$attrs.rotate,
      tabindex = _props$context$attrs.tabindex,
      twoToneColor = _props$context$attrs.twoToneColor,
      onClick = _props$context$attrs.onClick,
      restProps = _objectWithoutProperties(_props$context$attrs, _excluded);

  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls,
      rootClassName = _useInjectIconContext.rootClassName;

  var classObj = (_classObj = {}, _defineProperty$a(_classObj, rootClassName.value, !!rootClassName.value), _defineProperty$a(_classObj, prefixCls.value, true), _defineProperty$a(_classObj, "".concat(prefixCls.value, "-").concat(icon.name), Boolean(icon.name)), _defineProperty$a(_classObj, "".concat(prefixCls.value, "-spin"), !!spin || icon.name === 'loading'), _classObj);
  var iconTabIndex = tabindex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return createVNode("span", _objectSpread$a({
    "role": "img",
    "aria-label": icon.name
  }, restProps, {
    "onClick": onClick,
    "class": [classObj, cls],
    "tabindex": iconTabIndex
  }), [createVNode(IconBase, {
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null), createVNode(InsertStyles, null, null)]);
};

Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckCircleOutlined = function CheckCircleOutlined(props, context) {
  var p = _objectSpread$9({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$9({}, p, {
    "icon": CheckCircleOutlined$1
  }), null);
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';
CheckCircleOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var InfoCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, "name": "info-circle", "theme": "outlined" };

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } return target; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfoCircleOutlined = function InfoCircleOutlined(props, context) {
  var p = _objectSpread$8({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$8({}, p, {
    "icon": InfoCircleOutlined$1
  }), null);
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';
InfoCircleOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var CloseCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, "name": "close-circle", "theme": "outlined" };

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseCircleOutlined = function CloseCircleOutlined(props, context) {
  var p = _objectSpread$7({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$7({}, p, {
    "icon": CloseCircleOutlined$1
  }), null);
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
CloseCircleOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var ExclamationCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, "name": "exclamation-circle", "theme": "outlined" };

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, context) {
  var p = _objectSpread$6({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$6({}, p, {
    "icon": ExclamationCircleOutlined$1
  }), null);
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
ExclamationCircleOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseOutlined = function CloseOutlined(props, context) {
  var p = _objectSpread$5({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$5({}, p, {
    "icon": CloseOutlined$1
  }), null);
};

CloseOutlined.displayName = 'CloseOutlined';
CloseOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingOutlined = function LoadingOutlined(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$4({}, p, {
    "icon": LoadingOutlined$1
  }), null);
};

LoadingOutlined.displayName = 'LoadingOutlined';
LoadingOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var ExclamationCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExclamationCircleFilled = function ExclamationCircleFilled(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$3({}, p, {
    "icon": ExclamationCircleFilled$1
  }), null);
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
ExclamationCircleFilled.inheritAttrs = false;

// This icon file is generated automatically.
var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseCircleFilled = function CloseCircleFilled(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$2({}, p, {
    "icon": CloseCircleFilled$1
  }), null);
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
CloseCircleFilled.inheritAttrs = false;

// This icon file is generated automatically.
var CheckCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckCircleFilled = function CheckCircleFilled(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": CheckCircleFilled$1
  }), null);
};

CheckCircleFilled.displayName = 'CheckCircleFilled';
CheckCircleFilled.inheritAttrs = false;

// This icon file is generated automatically.
var InfoCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfoCircleFilled = function InfoCircleFilled(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": InfoCircleFilled$1
  }), null);
};

InfoCircleFilled.displayName = 'InfoCircleFilled';
InfoCircleFilled.inheritAttrs = false;

function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key2 = computed(() => toValue(_key));
  if (typeof key2.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key2.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key2.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key2.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key2.value] = createAsyncData(nuxtApp, key2.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key2.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key2.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key2.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key2.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key2.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key2.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key2.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key2.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key2.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key2.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key2.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key2) {
  if (key2 in nuxtApp.payload.data) {
    nuxtApp.payload.data[key2] = void 0;
  }
  if (key2 in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key2] = void 0;
  }
  if (nuxtApp._asyncData[key2]) {
    nuxtApp._asyncData[key2].data.value = unref(nuxtApp._asyncData[key2]._default());
    nuxtApp._asyncData[key2].error.value = void 0;
    nuxtApp._asyncData[key2].status.value = "idle";
  }
  if (key2 in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key2] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key2 of keys) {
    newObj[key2] = obj[key2];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key2, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key2] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key2)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key2),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key2]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key2];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key2, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key2] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key2] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key2] && nuxtApp._asyncDataPromises[key2] !== promise) {
          return nuxtApp._asyncDataPromises[key2];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key2];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key2];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key2];
      });
      nuxtApp._asyncDataPromises[key2] = promise;
      return nuxtApp._asyncDataPromises[key2];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key2]?._init) {
        nuxtApp._asyncData[key2]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key2]?._init) {
            clearNuxtDataByKey(nuxtApp, key2);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key2, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key2];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key2];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function genPresetColor(token, genCss) {
  return PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}-1`];
    const lightBorderColor = token[`${colorKey}-3`];
    const darkColor = token[`${colorKey}-6`];
    const textColor = token[`${colorKey}-7`];
    return _extends(_extends({}, prev), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}
function getMotion$1(_ref) {
  let {
    prefixCls,
    animation,
    transitionName: transitionName2
  } = _ref;
  if (animation) {
    return {
      name: `${prefixCls}-${animation}`
    };
  }
  if (transitionName2) {
    return {
      name: transitionName2
    };
  }
  return {};
}
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
const getTransitionDirection = (placement) => {
  if (placement !== void 0 && (placement === "topLeft" || placement === "topRight")) {
    return `slide-down`;
  }
  return `slide-up`;
};
const getTransitionProps = function(transitionName2) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const transitionProps = transitionName2 ? _extends({
    name: transitionName2,
    appear: true,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${transitionName2}-enter ${transitionName2}-enter-prepare ${transitionName2}-enter-start`,
    enterActiveClass: `${transitionName2}-enter ${transitionName2}-enter-prepare`,
    enterToClass: `${transitionName2}-enter ${transitionName2}-enter-active`,
    leaveFromClass: ` ${transitionName2}-leave`,
    leaveActiveClass: `${transitionName2}-leave ${transitionName2}-leave-active`,
    leaveToClass: `${transitionName2}-leave ${transitionName2}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionGroupProps = function(transitionName2) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const transitionProps = transitionName2 ? _extends({
    name: transitionName2,
    appear: true,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${transitionName2}`,
    appearToClass: `${transitionName2}-appear ${transitionName2}-appear-active`,
    enterFromClass: `${transitionName2}-appear ${transitionName2}-enter ${transitionName2}-appear-prepare ${transitionName2}-enter-prepare`,
    enterActiveClass: `${transitionName2}`,
    enterToClass: `${transitionName2}-enter ${transitionName2}-appear ${transitionName2}-appear-active ${transitionName2}-enter-active`,
    leaveActiveClass: `${transitionName2} ${transitionName2}-leave`,
    leaveToClass: `${transitionName2}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionName = (rootPrefixCls, motion, transitionName2) => {
  if (transitionName2 !== void 0) {
    return transitionName2;
  }
  return `${rootPrefixCls}-${motion}`;
};
const PortalContextKey = /* @__PURE__ */ Symbol("PortalContextKey");
const useProvidePortal = function(instance) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: true
  };
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(() => {
      const {
        sPopupVisible,
        popupRef,
        forceRender,
        autoDestroy
      } = instance || {};
      let shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    })
  });
};
const useInjectPortal = () => {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  const portalContext = inject(PortalContextKey, {
    shouldRender: computed(() => false),
    inTriggerContext: false
  });
  return {
    shouldRender: computed(() => portalContext.shouldRender.value || portalContext.inTriggerContext === false)
  };
};
const Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: false,
  props: {
    getContainer: PropTypes.func.isRequired,
    didUpdate: Function
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let container;
    const {
      shouldRender
    } = useInjectPortal();
    const stopWatch = watch(shouldRender, () => {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    return () => {
      var _a;
      if (!shouldRender.value) return null;
      {
        return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      }
    };
  }
});
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
const inverseColors = PresetColors.map((color) => `${color}-inverse`);
const PresetStatusColorTypes = ["success", "processing", "error", "default", "warning"];
function isPresetColor(color) {
  let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (includeInverse) {
    return [...inverseColors, ...PresetColors].includes(color);
  }
  return PresetColors.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColorTypes.includes(color);
}
const genWaveStyle = (token) => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Wave", (token) => [genWaveStyle(token)]);
const WaveEffect = defineComponent({
  props: {
    target: objectType(),
    className: String
  },
  setup(props) {
    const divRef = shallowRef(null);
    const [color] = useState(null);
    const [borderRadius] = useState([]);
    const [left] = useState(0);
    const [top] = useState(0);
    const [width] = useState(0);
    const [height] = useState(0);
    const [enabled] = useState(false);
    const removeDom = () => {
      var _a;
      const holder = (_a = divRef.value) === null || _a === void 0 ? void 0 : _a.parentElement;
      if (holder) {
        render(null, holder);
        if (holder.parentElement) {
          holder.parentElement.removeChild(holder);
        }
      }
    };
    const onTransitionend = (e) => {
      if (e.propertyName === "opacity") {
        removeDom();
      }
    };
    return () => {
      if (!enabled.value) {
        return null;
      }
      const waveStyle = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: borderRadius.value.map((radius) => `${radius}px`).join(" ")
      };
      if (color) {
        waveStyle["--wave-color"] = color.value;
      }
      return createVNode(Transition, {
        "appear": true,
        "name": "wave-motion",
        "appearFromClass": "wave-motion-appear",
        "appearActiveClass": "wave-motion-appear",
        "appearToClass": "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [createVNode("div", {
          "ref": divRef,
          "class": props.className,
          "style": waveStyle,
          "onTransitionend": onTransitionend
        }, null)]
      });
    };
  }
});
function showWaveEffect(node, className) {
  const holder = (void 0).createElement("div");
  holder.style.position = "absolute";
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node === null || node === void 0 ? void 0 : node.insertBefore(holder, node === null || node === void 0 ? void 0 : node.firstChild);
  render(createVNode(WaveEffect, {
    "target": node,
    "className": className
  }, null), holder);
  return () => {
    render(null, holder);
    if (holder.parentElement) {
      holder.parentElement.removeChild(holder);
    }
  };
}
function useWave(className, wave) {
  const instance = getCurrentInstance();
  let stopWave;
  function showWave() {
    var _a;
    const node = findDOMNode(instance);
    stopWave === null || stopWave === void 0 ? void 0 : stopWave();
    if (((_a = wave === null || wave === void 0 ? void 0 : wave.value) === null || _a === void 0 ? void 0 : _a.disabled) || !node) {
      return;
    }
    stopWave = showWaveEffect(node, className.value);
  }
  return showWave;
}
const Wave = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    getCurrentInstance();
    const {
      prefixCls,
      wave
    } = useConfigInject("wave", props);
    const [, hashId] = useStyle$3(prefixCls);
    useWave(computed(() => classNames(prefixCls.value, hashId.value)), wave);
    return () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      return children;
    };
  }
});
let runtimeLocale = _extends({}, localeValues.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends(_extends({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends({}, localeValues.Modal);
  }
}
function getConfirmLocale() {
  return runtimeLocale;
}
const ANT_MARK = "internalMark";
const LocaleProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    warning$1(props.ANT_MARK__ === ANT_MARK);
    const state = reactive({
      antLocale: _extends(_extends({}, props.locale), {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide("localeData", state);
    watch(() => props.locale, (locale2) => {
      changeConfirmLocale(locale2 && locale2.Modal);
      state.antLocale = _extends(_extends({}, locale2), {
        exist: true
      });
    }, {
      immediate: true
    });
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
LocaleProvider.install = function(app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};
const locale = withInstall(LocaleProvider);
const Notice = defineComponent({
  name: "Notice",
  inheritAttrs: false,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    let closeTimer;
    const duration = computed(() => props.duration === void 0 ? 4.5 : props.duration);
    const startCloseTimer = () => {
      if (duration.value && true) {
        closeTimer = setTimeout(() => {
          close();
        }, duration.value * 1e3);
      }
    };
    const clearCloseTimer = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };
    const close = (e) => {
      if (e) {
        e.stopPropagation();
      }
      clearCloseTimer();
      const {
        onClose,
        noticeKey
      } = props;
      if (onClose) {
        onClose(noticeKey);
      }
    };
    const restartCloseTimer = () => {
      clearCloseTimer();
      startCloseTimer();
    };
    watch([duration, () => props.updateMark, () => props.visible], (_ref2, _ref3) => {
      let [preDuration, preUpdateMark, preVisible] = _ref2;
      let [newDuration, newUpdateMark, newVisible] = _ref3;
      if (preDuration !== newDuration || preUpdateMark !== newUpdateMark || preVisible !== newVisible && newVisible) {
        restartCloseTimer();
      }
    }, {
      flush: "post"
    });
    return () => {
      var _a, _b;
      const {
        prefixCls,
        closable,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
        onClick,
        holder
      } = props;
      const {
        class: className,
        style
      } = attrs;
      const componentClass = `${prefixCls}-notice`;
      const dataOrAriaAttributeProps = Object.keys(attrs).reduce((acc, key2) => {
        if (key2.startsWith("data-") || key2.startsWith("aria-") || key2 === "role") {
          acc[key2] = attrs[key2];
        }
        return acc;
      }, {});
      const node = createVNode("div", _objectSpread$d({
        "class": classNames(componentClass, className, {
          [`${componentClass}-closable`]: closable
        }),
        "style": style,
        "onMouseenter": clearCloseTimer,
        "onMouseleave": startCloseTimer,
        "onClick": onClick
      }, dataOrAriaAttributeProps), [createVNode("div", {
        "class": `${componentClass}-content`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)]), closable ? createVNode("a", {
        "tabindex": 0,
        "onClick": close,
        "class": `${componentClass}-close`
      }, [closeIcon || createVNode("span", {
        "class": `${componentClass}-close-x`
      }, null)]) : null]);
      if (holder) {
        return createVNode(Teleport, {
          "to": holder
        }, {
          default: () => node
        });
      }
      return node;
    };
  }
});
var __rest$4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
let seed$1 = 0;
const now$1 = Date.now();
function getUuid$1() {
  const id = seed$1;
  seed$1 += 1;
  return `rcNotification_${now$1}_${id}`;
}
const Notification$1 = defineComponent({
  name: "Notification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(props, _ref) {
    let {
      attrs,
      expose,
      slots
    } = _ref;
    const hookRefs = /* @__PURE__ */ new Map();
    const notices = ref([]);
    const transitionProps = computed(() => {
      const {
        prefixCls,
        animation = "fade"
      } = props;
      let name = props.transitionName;
      if (!name && animation) {
        name = `${prefixCls}-${animation}`;
      }
      return getTransitionGroupProps(name);
    });
    const add = (originNotice, holderCallback) => {
      const key2 = originNotice.key || getUuid$1();
      const notice2 = _extends(_extends({}, originNotice), {
        key: key2
      });
      const {
        maxCount: maxCount2
      } = props;
      const noticeIndex = notices.value.map((v) => v.notice.key).indexOf(key2);
      const updatedNotices = notices.value.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, {
          notice: notice2,
          holderCallback
        });
      } else {
        if (maxCount2 && notices.value.length >= maxCount2) {
          notice2.key = updatedNotices[0].notice.key;
          notice2.updateMark = getUuid$1();
          notice2.userPassKey = key2;
          updatedNotices.shift();
        }
        updatedNotices.push({
          notice: notice2,
          holderCallback
        });
      }
      notices.value = updatedNotices;
    };
    const remove = (removeKey) => {
      notices.value = toRaw(notices.value).filter((_ref2) => {
        let {
          notice: {
            key: key2,
            userPassKey
          }
        } = _ref2;
        const mergedKey = userPassKey || key2;
        return mergedKey !== removeKey;
      });
    };
    expose({
      add,
      remove,
      notices
    });
    return () => {
      var _a;
      const {
        prefixCls,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
          prefixCls
        })
      } = props;
      const noticeNodes = notices.value.map((_ref3, index) => {
        let {
          notice: notice2,
          holderCallback
        } = _ref3;
        const updateMark = index === notices.value.length - 1 ? notice2.updateMark : void 0;
        const {
          key: key2,
          userPassKey
        } = notice2;
        const {
          content
        } = notice2;
        const noticeProps = _extends(_extends(_extends({
          prefixCls,
          closeIcon: typeof closeIcon === "function" ? closeIcon({
            prefixCls
          }) : closeIcon
        }, notice2), notice2.props), {
          key: key2,
          noticeKey: userPassKey || key2,
          updateMark,
          onClose: (noticeKey) => {
            var _a2;
            remove(noticeKey);
            (_a2 = notice2.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(notice2);
          },
          onClick: notice2.onClick
        });
        if (holderCallback) {
          return createVNode("div", {
            "key": key2,
            "class": `${prefixCls}-hook-holder`,
            "ref": (div) => {
              if (typeof key2 === "undefined") {
                return;
              }
              if (div) {
                hookRefs.set(key2, div);
                holderCallback(div, noticeProps);
              } else {
                hookRefs.delete(key2);
              }
            }
          }, null);
        }
        return createVNode(Notice, _objectSpread$d(_objectSpread$d({}, noticeProps), {}, {
          "class": classNames(noticeProps.class, props.hashId)
        }), {
          default: () => [typeof content === "function" ? content({
            prefixCls
          }) : content]
        });
      });
      const className = {
        [prefixCls]: 1,
        [attrs.class]: !!attrs.class,
        [props.hashId]: true
      };
      return createVNode("div", {
        "class": className,
        "style": attrs.style || {
          top: "65px",
          left: "50%"
        }
      }, [createVNode(TransitionGroup, _objectSpread$d({
        "tag": "div"
      }, transitionProps.value), {
        default: () => [noticeNodes]
      })]);
    };
  }
});
Notification$1.newInstance = function newNotificationInstance(properties, callback) {
  const _a = properties || {}, {
    name = "notification",
    getContainer: getContainer2,
    appContext,
    prefixCls: customizePrefixCls,
    rootPrefixCls: customRootPrefixCls,
    transitionName: customTransitionName,
    hasTransitionName: hasTransitionName2,
    useStyle: useStyle2
  } = _a, props = __rest$4(_a, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]);
  const div = (void 0).createElement("div");
  if (getContainer2) {
    const root = getContainer2();
    root.appendChild(div);
  } else {
    (void 0).body.appendChild(div);
  }
  const Wrapper = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(_props, _ref4) {
      let {
        attrs
      } = _ref4;
      const notiRef = shallowRef();
      const prefixCls = computed(() => globalConfigForApi.getPrefixCls(name, customizePrefixCls));
      const [, hashId] = useStyle2(prefixCls);
      return () => {
        const global = globalConfigForApi;
        const rootPrefixCls = global.getRootPrefixCls(customRootPrefixCls, prefixCls.value);
        const transitionName2 = hasTransitionName2 ? customTransitionName : `${prefixCls.value}-${customTransitionName}`;
        return createVNode(ConfigProvider, _objectSpread$d(_objectSpread$d({}, global), {}, {
          "prefixCls": rootPrefixCls
        }), {
          default: () => [createVNode(Notification$1, _objectSpread$d(_objectSpread$d({
            "ref": notiRef
          }, attrs), {}, {
            "prefixCls": prefixCls.value,
            "transitionName": transitionName2,
            "hashId": hashId.value
          }), null)]
        });
      };
    }
  });
  const vm = createVNode(Wrapper, props);
  vm.appContext = appContext || vm.appContext;
  render(vm, div);
};
let seed = 0;
const now = Date.now();
function getUuid() {
  const id = seed;
  seed += 1;
  return `rcNotification_${now}_${id}`;
}
const Notification = defineComponent({
  name: "HookNotification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const hookRefs = /* @__PURE__ */ new Map();
    const notices = computed(() => props.notices);
    const transitionProps = computed(() => {
      let name = props.transitionName;
      if (!name && props.animation) {
        switch (typeof props.animation) {
          case "string":
            name = props.animation;
            break;
          case "function":
            name = props.animation().name;
            break;
          case "object":
            name = props.animation.name;
            break;
          default:
            name = `${props.prefixCls}-fade`;
            break;
        }
      }
      return getTransitionGroupProps(name);
    });
    const remove = (key2) => props.remove(key2);
    const placements = ref({});
    watch(notices, () => {
      const nextPlacements = {};
      Object.keys(placements.value).forEach((placement) => {
        nextPlacements[placement] = [];
      });
      props.notices.forEach((config) => {
        const {
          placement = "topRight"
        } = config.notice;
        if (placement) {
          nextPlacements[placement] = nextPlacements[placement] || [];
          nextPlacements[placement].push(config);
        }
      });
      placements.value = nextPlacements;
    });
    const placementList = computed(() => Object.keys(placements.value));
    return () => {
      var _a;
      const {
        prefixCls,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
          prefixCls
        })
      } = props;
      const noticeNodes = placementList.value.map((placement) => {
        var _a2, _b;
        const noticesForPlacement = placements.value[placement];
        const classes = (_a2 = props.getClassName) === null || _a2 === void 0 ? void 0 : _a2.call(props, placement);
        const styles = (_b = props.getStyles) === null || _b === void 0 ? void 0 : _b.call(props, placement);
        const noticeNodesForPlacement = noticesForPlacement.map((_ref2, index) => {
          let {
            notice: notice2,
            holderCallback
          } = _ref2;
          const updateMark = index === notices.value.length - 1 ? notice2.updateMark : void 0;
          const {
            key: key2,
            userPassKey
          } = notice2;
          const {
            content
          } = notice2;
          const noticeProps = _extends(_extends(_extends({
            prefixCls,
            closeIcon: typeof closeIcon === "function" ? closeIcon({
              prefixCls
            }) : closeIcon
          }, notice2), notice2.props), {
            key: key2,
            noticeKey: userPassKey || key2,
            updateMark,
            onClose: (noticeKey) => {
              var _a3;
              remove(noticeKey);
              (_a3 = notice2.onClose) === null || _a3 === void 0 ? void 0 : _a3.call(notice2);
            },
            onClick: notice2.onClick
          });
          if (holderCallback) {
            return createVNode("div", {
              "key": key2,
              "class": `${prefixCls}-hook-holder`,
              "ref": (div) => {
                if (typeof key2 === "undefined") {
                  return;
                }
                if (div) {
                  hookRefs.set(key2, div);
                  holderCallback(div, noticeProps);
                } else {
                  hookRefs.delete(key2);
                }
              }
            }, null);
          }
          return createVNode(Notice, _objectSpread$d(_objectSpread$d({}, noticeProps), {}, {
            "class": classNames(noticeProps.class, props.hashId)
          }), {
            default: () => [typeof content === "function" ? content({
              prefixCls
            }) : content]
          });
        });
        const className = {
          [prefixCls]: 1,
          [`${prefixCls}-${placement}`]: 1,
          [attrs.class]: !!attrs.class,
          [props.hashId]: true,
          [classes]: !!classes
        };
        function onAfterLeave() {
          var _a3;
          if (noticesForPlacement.length > 0) {
            return;
          }
          Reflect.deleteProperty(placements.value, placement);
          (_a3 = props.onAllRemoved) === null || _a3 === void 0 ? void 0 : _a3.call(props);
        }
        return createVNode("div", {
          "key": placement,
          "class": className,
          "style": attrs.style || styles || {
            top: "65px",
            left: "50%"
          }
        }, [createVNode(TransitionGroup, _objectSpread$d(_objectSpread$d({
          "tag": "div"
        }, transitionProps.value), {}, {
          "onAfterLeave": onAfterLeave
        }), {
          default: () => [noticeNodesForPlacement]
        })]);
      });
      return createVNode(Portal, {
        "getContainer": props.getContainer
      }, {
        default: () => [noticeNodes]
      });
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
const defaultGetContainer$1 = () => (void 0).body;
let uniqueKey = 0;
function mergeConfig() {
  const clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key2) => {
        const val = obj[key2];
        if (val !== void 0) {
          clone[key2] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification$1() {
  let rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: getContainer2 = defaultGetContainer$1,
    motion,
    prefixCls,
    maxCount: maxCount2,
    getClassName,
    getStyles,
    onAllRemoved
  } = rootConfig, shareConfig = __rest$3(rootConfig, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]);
  const notices = shallowRef([]);
  const notificationsRef = shallowRef();
  const add = (originNotice, holderCallback) => {
    const key2 = originNotice.key || getUuid();
    const notice2 = _extends(_extends({}, originNotice), {
      key: key2
    });
    const noticeIndex = notices.value.map((v) => v.notice.key).indexOf(key2);
    const updatedNotices = notices.value.concat();
    if (noticeIndex !== -1) {
      updatedNotices.splice(noticeIndex, 1, {
        notice: notice2,
        holderCallback
      });
    } else {
      if (maxCount2 && notices.value.length >= maxCount2) {
        notice2.key = updatedNotices[0].notice.key;
        notice2.updateMark = getUuid();
        notice2.userPassKey = key2;
        updatedNotices.shift();
      }
      updatedNotices.push({
        notice: notice2,
        holderCallback
      });
    }
    notices.value = updatedNotices;
  };
  const removeNotice = (removeKey) => {
    notices.value = notices.value.filter((_ref) => {
      let {
        notice: {
          key: key2,
          userPassKey
        }
      } = _ref;
      const mergedKey = userPassKey || key2;
      return mergedKey !== removeKey;
    });
  };
  const destroy = () => {
    notices.value = [];
  };
  const contextHolder = () => createVNode(Notification, {
    "ref": notificationsRef,
    "prefixCls": prefixCls,
    "maxCount": maxCount2,
    "notices": notices.value,
    "remove": removeNotice,
    "getClassName": getClassName,
    "getStyles": getStyles,
    "animation": motion,
    "hashId": rootConfig.hashId,
    "onAllRemoved": onAllRemoved,
    "getContainer": getContainer2
  }, null);
  const taskQueue = shallowRef([]);
  const api2 = {
    open: (config) => {
      const mergedConfig = mergeConfig(shareConfig, config);
      if (mergedConfig.key === null || mergedConfig.key === void 0) {
        mergedConfig.key = `vc-notification-${uniqueKey}`;
        uniqueKey += 1;
      }
      taskQueue.value = [...taskQueue.value, {
        type: "open",
        config: mergedConfig
      }];
    },
    close: (key2) => {
      taskQueue.value = [...taskQueue.value, {
        type: "close",
        key: key2
      }];
    },
    destroy: () => {
      taskQueue.value = [...taskQueue.value, {
        type: "destroy"
      }];
    }
  };
  watch(taskQueue, () => {
    if (taskQueue.value.length) {
      taskQueue.value.forEach((task) => {
        switch (task.type) {
          case "open":
            add(task.config);
            break;
          case "close":
            removeNotice(task.key);
            break;
          case "destroy":
            destroy();
            break;
        }
      });
      taskQueue.value = [];
    }
  });
  return [api2, contextHolder];
}
const genMessageStyle = (token) => {
  const {
    componentCls,
    iconCls,
    boxShadowSecondary,
    colorBgElevated,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    messageNoticeContentPadding
  } = token;
  const messageMoveIn = new Keyframe("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: paddingXS,
      transform: "translateY(0)",
      opacity: 1
    }
  });
  const messageMoveOut = new Keyframe("MessageMoveOut", {
    "0%": {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: "fixed",
        top: marginXS,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: zIndexPopup,
        [`${componentCls}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
          animationName: messageMoveIn,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${componentCls}-move-up-leave`]: {
          animationName: messageMoveOut,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${componentCls}-notice`]: {
        padding: paddingXS,
        textAlign: "center",
        [iconCls]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: marginXS,
          fontSize: fontSizeLG
        },
        [`${componentCls}-notice-content`]: {
          display: "inline-block",
          padding: messageNoticeContentPadding,
          background: colorBgElevated,
          borderRadius: borderRadiusLG,
          boxShadow: boxShadowSecondary,
          pointerEvents: "all"
        },
        [`${componentCls}-success ${iconCls}`]: {
          color: colorSuccess
        },
        [`${componentCls}-error ${iconCls}`]: {
          color: colorError
        },
        [`${componentCls}-warning ${iconCls}`]: {
          color: colorWarning
        },
        [`
        ${componentCls}-info ${iconCls},
        ${componentCls}-loading ${iconCls}`]: {
          color: colorInfo
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${componentCls}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
};
const useStyle$2 = genComponentStyleHook("Message", (token) => {
  const combinedToken = merge(token, {
    messageNoticeContentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
  });
  return [genMessageStyle(combinedToken)];
}, (token) => ({
  height: 150,
  zIndexPopup: token.zIndexPopupBase + 10
}));
const TypeIcon = {
  info: createVNode(InfoCircleFilled, null, null),
  success: createVNode(CheckCircleFilled, null, null),
  error: createVNode(CloseCircleFilled, null, null),
  warning: createVNode(ExclamationCircleFilled, null, null),
  loading: createVNode(LoadingOutlined, null, null)
};
const PureContent$1 = defineComponent({
  name: "PureContent",
  inheritAttrs: false,
  props: ["prefixCls", "type", "icon"],
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      var _a;
      return createVNode("div", {
        "class": classNames(`${props.prefixCls}-custom-content`, `${props.prefixCls}-${props.type}`)
      }, [props.icon || TypeIcon[props.type], createVNode("span", null, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
    };
  }
});
defineComponent({
  name: "PurePanel",
  inheritAttrs: false,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(props, _ref2) {
    let {
      slots,
      attrs
    } = _ref2;
    var _a;
    const {
      getPrefixCls
    } = useConfigContextInject();
    const prefixCls = computed(() => props.prefixCls || getPrefixCls("message"));
    const [, hashId] = useStyle$2(prefixCls);
    return createVNode(Notice, _objectSpread$d(_objectSpread$d({}, attrs), {}, {
      "prefixCls": prefixCls.value,
      "class": classNames(hashId.value, `${prefixCls.value}-notice-pure-panel`),
      "noticeKey": "pure",
      "duration": null
    }), {
      default: () => [createVNode(PureContent$1, {
        "prefixCls": prefixCls.value,
        "type": props.type,
        "icon": props.icon
      }, {
        default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
      })]
    });
  }
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_OFFSET$1 = 8;
const DEFAULT_DURATION$1 = 3;
const Holder$1 = defineComponent({
  name: "Holder",
  inheritAttrs: false,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved", "animation", "staticGetContainer"],
  setup(props, _ref) {
    let {
      expose
    } = _ref;
    var _a, _b;
    const {
      getPrefixCls,
      getPopupContainer
    } = useConfigInject("message", props);
    const prefixCls = computed(() => getPrefixCls("message", props.prefixCls));
    const [, hashId] = useStyle$2(prefixCls);
    const getStyles = () => {
      var _a2;
      const top = (_a2 = props.top) !== null && _a2 !== void 0 ? _a2 : DEFAULT_OFFSET$1;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof top === "number" ? `${top}px` : top
      };
    };
    const getClassName = () => classNames(hashId.value, props.rtl ? `${prefixCls.value}-rtl` : "");
    const getNotificationMotion = () => {
      var _a2;
      return getMotion$1({
        prefixCls: prefixCls.value,
        animation: (_a2 = props.animation) !== null && _a2 !== void 0 ? _a2 : `move-up`,
        transitionName: props.transitionName
      });
    };
    const mergedCloseIcon = createVNode("span", {
      "class": `${prefixCls.value}-close-x`
    }, [createVNode(CloseOutlined, {
      "class": `${prefixCls.value}-close-icon`
    }, null)]);
    const [api2, holder] = useNotification$1({
      //@ts-ignore
      getStyles,
      prefixCls: prefixCls.value,
      getClassName,
      motion: getNotificationMotion,
      closable: false,
      closeIcon: mergedCloseIcon,
      duration: (_a = props.duration) !== null && _a !== void 0 ? _a : DEFAULT_DURATION$1,
      getContainer: (_b = props.staticGetContainer) !== null && _b !== void 0 ? _b : getPopupContainer.value,
      maxCount: props.maxCount,
      onAllRemoved: props.onAllRemoved
    });
    expose(_extends(_extends({}, api2), {
      prefixCls,
      hashId
    }));
    return holder;
  }
});
let keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = shallowRef(null);
  const holderKey = /* @__PURE__ */ Symbol("messageHolderKey");
  const close = (key2) => {
    var _a;
    (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
  };
  const open = (config) => {
    if (!holderRef.value) {
      const fakeResult = () => {
      };
      fakeResult.then = () => {
      };
      return fakeResult;
    }
    const {
      open: originOpen,
      prefixCls,
      hashId
    } = holderRef.value;
    const noticePrefixCls = `${prefixCls}-notice`;
    const {
      content,
      icon,
      type,
      key: key2,
      class: className,
      onClose
    } = config, restConfig = __rest$2(config, ["content", "icon", "type", "key", "class", "onClose"]);
    let mergedKey = key2;
    if (mergedKey === void 0 || mergedKey === null) {
      keyIndex += 1;
      mergedKey = `antd-message-${keyIndex}`;
    }
    return wrapPromiseFn((resolve) => {
      originOpen(_extends(_extends({}, restConfig), {
        key: mergedKey,
        content: () => createVNode(PureContent$1, {
          "prefixCls": prefixCls,
          "type": type,
          "icon": typeof icon === "function" ? icon() : icon
        }, {
          default: () => [typeof content === "function" ? content() : content]
        }),
        placement: "top",
        // @ts-ignore
        class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className),
        onClose: () => {
          onClose === null || onClose === void 0 ? void 0 : onClose();
          resolve();
        }
      }));
      return () => {
        close(mergedKey);
      };
    });
  };
  const destroy = (key2) => {
    var _a;
    if (key2 !== void 0) {
      close(key2);
    } else {
      (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.destroy();
    }
  };
  const wrapAPI = {
    open,
    destroy
  };
  const keys = ["info", "success", "warning", "error", "loading"];
  keys.forEach((type) => {
    const typeOpen = (jointContent, duration, onClose) => {
      let config;
      if (jointContent && typeof jointContent === "object" && "content" in jointContent) {
        config = jointContent;
      } else {
        config = {
          content: jointContent
        };
      }
      let mergedDuration;
      let mergedOnClose;
      if (typeof duration === "function") {
        mergedOnClose = duration;
      } else {
        mergedDuration = duration;
        mergedOnClose = onClose;
      }
      const mergedConfig = _extends(_extends({
        onClose: mergedOnClose,
        duration: mergedDuration
      }, config), {
        type
      });
      return open(mergedConfig);
    };
    wrapAPI[type] = typeOpen;
  });
  return [wrapAPI, () => createVNode(Holder$1, _objectSpread$d(_objectSpread$d({
    "key": holderKey
  }, messageConfig), {}, {
    "ref": holderRef
  }), null)];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}
let defaultDuration$1 = 3;
let defaultTop$1;
let messageInstance;
let key = 1;
let localPrefixCls = "";
let transitionName = "move-up";
let hasTransitionName = false;
let getContainer = () => (void 0).body;
let maxCount$1;
let rtl$1 = false;
function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(options) {
  if (options.top !== void 0) {
    defaultTop$1 = options.top;
    messageInstance = null;
  }
  if (options.duration !== void 0) {
    defaultDuration$1 = options.duration;
  }
  if (options.prefixCls !== void 0) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== void 0) {
    getContainer = options.getContainer;
    messageInstance = null;
  }
  if (options.transitionName !== void 0) {
    transitionName = options.transitionName;
    messageInstance = null;
    hasTransitionName = true;
  }
  if (options.maxCount !== void 0) {
    maxCount$1 = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== void 0) {
    rtl$1 = options.rtl;
  }
}
function getMessageInstance(args, callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification$1.newInstance({
    appContext: args.appContext,
    prefixCls: args.prefixCls || localPrefixCls,
    rootPrefixCls: args.rootPrefixCls,
    transitionName,
    hasTransitionName,
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer || args.getPopupContainer,
    maxCount: maxCount$1,
    name: "message",
    useStyle: useStyle$2
  }, (instance) => {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}
const typeToIcon$2 = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingOutlined
};
const typeList = Object.keys(typeToIcon$2);
function notice$1(args) {
  const duration = args.duration !== void 0 ? args.duration : defaultDuration$1;
  const target = args.key || getKeyThenIncreaseKey();
  const closePromise = new Promise((resolve) => {
    const callback = () => {
      if (typeof args.onClose === "function") {
        args.onClose();
      }
      return resolve(true);
    };
    getMessageInstance(args, (instance) => {
      instance.notice({
        key: target,
        duration,
        style: args.style || {},
        class: args.class,
        content: (_ref) => {
          let {
            prefixCls
          } = _ref;
          const Icon = typeToIcon$2[args.type];
          const iconNode = Icon ? createVNode(Icon, null, null) : "";
          const messageClass = classNames(`${prefixCls}-custom-content`, {
            [`${prefixCls}-${args.type}`]: args.type,
            [`${prefixCls}-rtl`]: rtl$1 === true
          });
          return createVNode("div", {
            "class": messageClass
          }, [typeof args.icon === "function" ? args.icon() : args.icon || iconNode, createVNode("span", null, [typeof args.content === "function" ? args.content() : args.content])]);
        },
        onClose: callback,
        onClick: args.onClick
      });
    });
  });
  const result = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
function isArgsProps(content) {
  return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
}
const api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        const {
          removeNotice
        } = messageInstance;
        removeNotice(messageKey);
      } else {
        const {
          destroy
        } = messageInstance;
        destroy();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = (content, duration, onClose) => {
    if (isArgsProps(content)) {
      return originalApi.open(_extends(_extends({}, content), {
        type
      }));
    }
    if (typeof duration === "function") {
      onClose = duration;
      duration = void 0;
    }
    return originalApi.open({
      content,
      duration,
      type,
      onClose
    });
  };
}
typeList.forEach((type) => attachTypeApi(api$1, type));
api$1.warn = api$1.warning;
api$1.useMessage = useMessage;
const genNotificationPlacementStyle = (token) => {
  const {
    componentCls,
    width,
    notificationMarginEdge
  } = token;
  const notificationTopFadeIn = new Keyframe("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  });
  const notificationBottomFadeIn = new Keyframe("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  });
  const notificationLeftFadeIn = new Keyframe("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${componentCls}-top, &${componentCls}-bottom`]: {
      marginInline: 0
    },
    [`&${componentCls}-top`]: {
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationTopFadeIn
      }
    },
    [`&${componentCls}-bottom`]: {
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationBottomFadeIn
      }
    },
    [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: notificationMarginEdge,
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationLeftFadeIn
      }
    }
  };
};
const genNotificationStyle = (token) => {
  const {
    iconCls,
    componentCls,
    // .ant-notification
    boxShadowSecondary,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut,
    fontSize,
    lineHeight,
    width,
    notificationIconSize
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const notificationFadeIn = new Keyframe("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  const notificationFadeOut = new Keyframe("antNotificationFadeOut", {
    "0%": {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
        position: "fixed",
        zIndex: token.zIndexPopup,
        marginInlineEnd: notificationMarginEdge,
        [`${componentCls}-hook-holder`]: {
          position: "relative"
        },
        [`&${componentCls}-top, &${componentCls}-bottom`]: {
          [`${componentCls}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
          [`${componentCls}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
          animationDuration: token.motionDurationMid,
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-leave`]: {
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          animationDuration: motionDurationMid,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: notificationFadeIn,
          animationPlayState: "running"
        },
        [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
          animationName: notificationFadeOut,
          animationPlayState: "running"
        }
      }), genNotificationPlacementStyle(token)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [noticeCls]: {
        position: "relative",
        width,
        maxWidth: `calc(100vw - ${notificationMarginEdge * 2}px)`,
        marginBottom: notificationMarginBottom,
        marginInlineStart: "auto",
        padding: notificationPadding,
        overflow: "hidden",
        lineHeight,
        wordWrap: "break-word",
        background: notificationBg,
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
        [`${componentCls}-close-icon`]: {
          fontSize,
          cursor: "pointer"
        },
        [`${noticeCls}-message`]: {
          marginBottom: token.marginXS,
          color: colorTextHeading,
          fontSize: fontSizeLG,
          lineHeight: token.lineHeightLG
        },
        [`${noticeCls}-description`]: {
          fontSize
        },
        [`&${noticeCls}-closable ${noticeCls}-message`]: {
          paddingInlineEnd: token.paddingLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-message`]: {
          marginBottom: token.marginXS,
          marginInlineStart: token.marginSM + notificationIconSize,
          fontSize: fontSizeLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-description`]: {
          marginInlineStart: token.marginSM + notificationIconSize,
          fontSize
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${noticeCls}-icon`]: {
          position: "absolute",
          fontSize: notificationIconSize,
          lineHeight: 0,
          // icon-font
          [`&-success${iconCls}`]: {
            color: colorSuccess
          },
          [`&-info${iconCls}`]: {
            color: colorInfo
          },
          [`&-warning${iconCls}`]: {
            color: colorWarning
          },
          [`&-error${iconCls}`]: {
            color: colorError
          }
        },
        [`${noticeCls}-close`]: {
          position: "absolute",
          top: token.notificationPaddingVertical,
          insetInlineEnd: token.notificationPaddingHorizontal,
          color: token.colorIcon,
          outline: "none",
          width: token.notificationCloseButtonSize,
          height: token.notificationCloseButtonSize,
          borderRadius: token.borderRadiusSM,
          transition: `background-color ${token.motionDurationMid}, color ${token.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: token.colorIconHover,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent
          }
        },
        [`${noticeCls}-btn`]: {
          float: "right",
          marginTop: token.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${noticeCls}-pure-panel`]: {
        margin: 0
      }
    }
  ];
};
const useStyle$1 = genComponentStyleHook("Notification", (token) => {
  const notificationPaddingVertical = token.paddingMD;
  const notificationPaddingHorizontal = token.paddingLG;
  const notificationToken = merge(token, {
    // default.less variables
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    // index.less variables
    notificationPadding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`,
    notificationMarginBottom: token.margin,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: token.fontSizeLG * token.lineHeightLG,
    notificationCloseButtonSize: token.controlHeightLG * 0.55
  });
  return [genNotificationStyle(notificationToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50,
  width: 384
}));
function getCloseIcon(prefixCls, closeIcon) {
  return closeIcon || createVNode("span", {
    "class": `${prefixCls}-close-x`
  }, [createVNode(CloseOutlined, {
    "class": `${prefixCls}-close-icon`
  }, null)]);
}
({
  info: createVNode(InfoCircleFilled, null, null),
  success: createVNode(CheckCircleFilled, null, null),
  error: createVNode(CloseCircleFilled, null, null),
  warning: createVNode(ExclamationCircleFilled, null, null),
  loading: createVNode(LoadingOutlined, null, null)
});
const typeToIcon$1 = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};
function PureContent(_ref) {
  let {
    prefixCls,
    icon,
    type,
    message,
    description,
    btn
  } = _ref;
  let iconNode = null;
  if (icon) {
    iconNode = createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [renderHelper(icon)]);
  } else if (type) {
    const Icon = typeToIcon$1[type];
    iconNode = createVNode(Icon, {
      "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
    }, null);
  }
  return createVNode("div", {
    "class": classNames({
      [`${prefixCls}-with-icon`]: iconNode
    }),
    "role": "alert"
  }, [iconNode, createVNode("div", {
    "class": `${prefixCls}-message`
  }, [message]), createVNode("div", {
    "class": `${prefixCls}-description`
  }, [description]), btn && createVNode("div", {
    "class": `${prefixCls}-btn`
  }, [btn])]);
}
defineComponent({
  name: "PurePanel",
  inheritAttrs: false,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(props) {
    const {
      getPrefixCls
    } = useConfigInject("notification", props);
    const prefixCls = computed(() => props.prefixCls || getPrefixCls("notification"));
    const noticePrefixCls = computed(() => `${prefixCls.value}-notice`);
    const [, hashId] = useStyle$1(prefixCls);
    return () => {
      return createVNode(Notice, _objectSpread$d(_objectSpread$d({}, props), {}, {
        "prefixCls": prefixCls.value,
        "class": classNames(hashId.value, `${noticePrefixCls.value}-pure-panel`),
        "noticeKey": "pure",
        "duration": null,
        "closable": props.closable,
        "closeIcon": getCloseIcon(prefixCls.value, props.closeIcon)
      }), {
        default: () => [createVNode(PureContent, {
          "prefixCls": noticePrefixCls.value,
          "icon": props.icon,
          "type": props.type,
          "message": props.message,
          "description": props.description,
          "btn": props.btn
        }, null)]
      });
    };
  }
});
function getPlacementStyle(placement, top, bottom) {
  let style;
  top = typeof top === "number" ? `${top}px` : top;
  bottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  switch (placement) {
    case "top":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top,
        bottom: "auto"
      };
      break;
    case "topLeft":
      style = {
        left: 0,
        top,
        bottom: "auto"
      };
      break;
    case "topRight":
      style = {
        right: 0,
        top,
        bottom: "auto"
      };
      break;
    case "bottom":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom
      };
      break;
    case "bottomLeft":
      style = {
        left: 0,
        top: "auto",
        bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: "auto",
        bottom
      };
      break;
  }
  return style;
}
function getMotion(prefixCls) {
  return {
    name: `${prefixCls}-fade`
  };
}
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_OFFSET = 24;
const DEFAULT_DURATION = 4.5;
const Holder = defineComponent({
  name: "Holder",
  inheritAttrs: false,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(props, _ref) {
    let {
      expose
    } = _ref;
    const {
      getPrefixCls,
      getPopupContainer
    } = useConfigInject("notification", props);
    const prefixCls = computed(() => props.prefixCls || getPrefixCls("notification"));
    const getStyles = (placement) => {
      var _a, _b;
      return getPlacementStyle(placement, (_a = props.top) !== null && _a !== void 0 ? _a : DEFAULT_OFFSET, (_b = props.bottom) !== null && _b !== void 0 ? _b : DEFAULT_OFFSET);
    };
    const [, hashId] = useStyle$1(prefixCls);
    const getClassName = () => classNames(hashId.value, {
      [`${prefixCls.value}-rtl`]: props.rtl
    });
    const getNotificationMotion = () => getMotion(prefixCls.value);
    const [api2, holder] = useNotification$1({
      prefixCls: prefixCls.value,
      getStyles,
      getClassName,
      motion: getNotificationMotion,
      closable: true,
      closeIcon: getCloseIcon(prefixCls.value),
      duration: DEFAULT_DURATION,
      getContainer: () => {
        var _a, _b;
        return ((_a = props.getPopupContainer) === null || _a === void 0 ? void 0 : _a.call(props)) || ((_b = getPopupContainer.value) === null || _b === void 0 ? void 0 : _b.call(getPopupContainer)) || (void 0).body;
      },
      maxCount: props.maxCount,
      hashId: hashId.value,
      onAllRemoved: props.onAllRemoved
    });
    expose(_extends(_extends({}, api2), {
      prefixCls: prefixCls.value,
      hashId
    }));
    return holder;
  }
});
function useInternalNotification(notificationConfig) {
  const holderRef = shallowRef(null);
  const holderKey = /* @__PURE__ */ Symbol("notificationHolderKey");
  const open = (config) => {
    if (!holderRef.value) {
      return;
    }
    const {
      open: originOpen,
      prefixCls,
      hashId
    } = holderRef.value;
    const noticePrefixCls = `${prefixCls}-notice`;
    const {
      message,
      description,
      icon,
      type,
      btn,
      class: className
    } = config, restConfig = __rest$1(config, ["message", "description", "icon", "type", "btn", "class"]);
    return originOpen(_extends(_extends({
      placement: "topRight"
    }, restConfig), {
      content: () => createVNode(PureContent, {
        "prefixCls": noticePrefixCls,
        "icon": typeof icon === "function" ? icon() : icon,
        "type": type,
        "message": typeof message === "function" ? message() : message,
        "description": typeof description === "function" ? description() : description,
        "btn": typeof btn === "function" ? btn() : btn
      }, null),
      // @ts-ignore
      class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className)
    }));
  };
  const destroy = (key2) => {
    var _a, _b;
    if (key2 !== void 0) {
      (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
    } else {
      (_b = holderRef.value) === null || _b === void 0 ? void 0 : _b.destroy();
    }
  };
  const wrapAPI = {
    open,
    destroy
  };
  const keys = ["success", "info", "warning", "error"];
  keys.forEach((type) => {
    wrapAPI[type] = (config) => open(_extends(_extends({}, config), {
      type
    }));
  });
  return [wrapAPI, () => createVNode(Holder, _objectSpread$d(_objectSpread$d({
    "key": holderKey
  }, notificationConfig), {}, {
    "ref": holderRef
  }), null)];
}
function useNotification(notificationConfig) {
  return useInternalNotification(notificationConfig);
}
const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = "24px";
let defaultBottom = "24px";
let defaultPrefixCls$1 = "";
let defaultPlacement = "topRight";
let defaultGetContainer = () => (void 0).body;
let defaultCloseIcon = null;
let rtl = false;
let maxCount;
function setNotificationConfig(options) {
  const {
    duration,
    placement,
    bottom,
    top,
    getContainer: getContainer2,
    closeIcon,
    prefixCls
  } = options;
  if (prefixCls !== void 0) {
    defaultPrefixCls$1 = prefixCls;
  }
  if (duration !== void 0) {
    defaultDuration = duration;
  }
  if (placement !== void 0) {
    defaultPlacement = placement;
  }
  if (bottom !== void 0) {
    defaultBottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  }
  if (top !== void 0) {
    defaultTop = typeof top === "number" ? `${top}px` : top;
  }
  if (getContainer2 !== void 0) {
    defaultGetContainer = getContainer2;
  }
  if (closeIcon !== void 0) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== void 0) {
    rtl = options.rtl;
  }
  if (options.maxCount !== void 0) {
    maxCount = options.maxCount;
  }
}
function getNotificationInstance(_ref, callback) {
  let {
    prefixCls: customizePrefixCls,
    placement = defaultPlacement,
    getContainer: getContainer2 = defaultGetContainer,
    top,
    bottom,
    closeIcon = defaultCloseIcon,
    appContext
  } = _ref;
  const {
    getPrefixCls
  } = globalConfig();
  const prefixCls = getPrefixCls("notification", customizePrefixCls || defaultPrefixCls$1);
  const cacheKey = `${prefixCls}-${placement}-${rtl}`;
  const cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then((instance) => {
      callback(instance);
    });
    return;
  }
  const notificationClass = classNames(`${prefixCls}-${placement}`, {
    [`${prefixCls}-rtl`]: rtl === true
  });
  Notification$1.newInstance({
    name: "notification",
    prefixCls: customizePrefixCls || defaultPrefixCls$1,
    useStyle: useStyle$1,
    class: notificationClass,
    style: getPlacementStyle(placement, top !== null && top !== void 0 ? top : defaultTop, bottom !== null && bottom !== void 0 ? bottom : defaultBottom),
    appContext,
    getContainer: getContainer2,
    closeIcon: (_ref2) => {
      let {
        prefixCls: prefixCls2
      } = _ref2;
      const closeIconToRender = createVNode("span", {
        "class": `${prefixCls2}-close-x`
      }, [renderHelper(closeIcon, {}, createVNode(CloseOutlined, {
        "class": `${prefixCls2}-close-icon`
      }, null))]);
      return closeIconToRender;
    },
    maxCount,
    hasTransitionName: true
  }, (notification) => {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}
const typeToIcon = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};
function notice(args) {
  const {
    icon,
    type,
    description,
    message,
    btn
  } = args;
  const duration = args.duration === void 0 ? defaultDuration : args.duration;
  getNotificationInstance(args, (notification) => {
    notification.notice({
      content: (_ref3) => {
        let {
          prefixCls: outerPrefixCls
        } = _ref3;
        const prefixCls = `${outerPrefixCls}-notice`;
        let iconNode = null;
        if (icon) {
          iconNode = () => createVNode("span", {
            "class": `${prefixCls}-icon`
          }, [renderHelper(icon)]);
        } else if (type) {
          const Icon = typeToIcon[type];
          iconNode = () => createVNode(Icon, {
            "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
          }, null);
        }
        return createVNode("div", {
          "class": iconNode ? `${prefixCls}-with-icon` : ""
        }, [iconNode && iconNode(), createVNode("div", {
          "class": `${prefixCls}-message`
        }, [!description && iconNode ? createVNode("span", {
          "class": `${prefixCls}-message-single-line-auto-margin`
        }, null) : null, renderHelper(message)]), createVNode("div", {
          "class": `${prefixCls}-description`
        }, [renderHelper(description)]), btn ? createVNode("span", {
          "class": `${prefixCls}-btn`
        }, [renderHelper(btn)]) : null]);
      },
      duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class
    });
  });
}
const api = {
  open: notice,
  close(key2) {
    Object.keys(notificationInstance).forEach((cacheKey) => Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
      instance.removeNotice(key2);
    }));
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach((cacheKey) => {
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.destroy();
      });
      delete notificationInstance[cacheKey];
    });
  }
};
const iconTypes = ["success", "info", "warning", "error"];
iconTypes.forEach((type) => {
  api[type] = (args) => api.open(_extends(_extends({}, args), {
    type
  }));
});
api.warn = api.warning;
api.useNotification = useNotification;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate$1(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate$1(primaryColor.toRgbString());
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c) => c.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c) => c.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c) => c.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c) => c.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c) => c.setAlpha(c.getAlpha() * 0.3));
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c) => c.darken(2));
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map((key2) => `--${globalPrefixCls}-${key2}: ${variables[key2]};`);
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  getStyle(globalPrefixCls, theme);
}
const useStyle = (iconPrefixCls) => {
  const [theme, token] = useToken();
  return useStyleRegister(computed(() => ({
    theme: theme.value,
    token: token.value,
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls.value]
  })), () => [{
    [`.${iconPrefixCls.value}`]: _extends(_extends({}, resetIcon()), {
      [`.${iconPrefixCls.value} .${iconPrefixCls.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function useTheme(theme, parentTheme) {
  const themeConfig = computed(() => (theme === null || theme === void 0 ? void 0 : theme.value) || {});
  const parentThemeConfig = computed(() => themeConfig.value.inherit === false || !(parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value) ? defaultConfig : parentTheme.value);
  const mergedTheme = computed(() => {
    if (!(theme === null || theme === void 0 ? void 0 : theme.value)) {
      return parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value;
    }
    const mergedComponents = _extends({}, parentThemeConfig.value.components);
    Object.keys(theme.value.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = _extends(_extends({}, mergedComponents[componentName]), theme.value.components[componentName]);
    });
    return _extends(_extends(_extends({}, parentThemeConfig.value), themeConfig.value), {
      token: _extends(_extends({}, parentThemeConfig.value.token), themeConfig.value.token),
      components: mergedComponents
    });
  });
  return mergedTheme;
}
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const defaultPrefixCls = "ant";
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalConfigForApi.iconPrefixCls || defaultIconPrefixCls;
}
const globalConfigBySet = reactive({});
const globalConfigForApi = reactive({});
watchEffect(() => {
  _extends(globalConfigForApi, globalConfigBySet);
  globalConfigForApi.prefixCls = getGlobalPrefixCls();
  globalConfigForApi.iconPrefixCls = getGlobalIconPrefixCls();
  globalConfigForApi.getPrefixCls = (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${globalConfigForApi.prefixCls}-${suffixCls}` : globalConfigForApi.prefixCls;
  };
  globalConfigForApi.getRootPrefixCls = () => {
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    return getGlobalPrefixCls();
  };
});
let stopWatchEffect;
const setGlobalConfig = (params) => {
  if (stopWatchEffect) {
    stopWatchEffect();
  }
  stopWatchEffect = watchEffect(() => {
    _extends(globalConfigBySet, reactive(params));
    _extends(globalConfigForApi, reactive(params));
  });
  if (params.theme) {
    registerTheme(getGlobalPrefixCls(), params.theme);
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    return getGlobalPrefixCls();
  }
});
const ConfigProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: false,
  props: configProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const parentContext = useConfigContextInject();
    const getPrefixCls = (suffixCls, customizePrefixCls) => {
      const {
        prefixCls = "ant"
      } = props;
      if (customizePrefixCls) return customizePrefixCls;
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    };
    const iconPrefixCls = computed(() => props.iconPrefixCls || parentContext.iconPrefixCls.value || defaultIconPrefixCls);
    const shouldWrapSSR = computed(() => iconPrefixCls.value !== parentContext.iconPrefixCls.value);
    const csp = computed(() => {
      var _a;
      return props.csp || ((_a = parentContext.csp) === null || _a === void 0 ? void 0 : _a.value);
    });
    const wrapSSR = useStyle(iconPrefixCls);
    const mergedTheme = useTheme(computed(() => props.theme), computed(() => {
      var _a;
      return (_a = parentContext.theme) === null || _a === void 0 ? void 0 : _a.value;
    }));
    const renderEmptyComponent = (name) => {
      const renderEmpty$1 = props.renderEmpty || slots.renderEmpty || parentContext.renderEmpty || renderEmpty;
      return renderEmpty$1(name);
    };
    const autoInsertSpaceInButton = computed(() => {
      var _a, _b;
      return (_a = props.autoInsertSpaceInButton) !== null && _a !== void 0 ? _a : (_b = parentContext.autoInsertSpaceInButton) === null || _b === void 0 ? void 0 : _b.value;
    });
    const locale$1 = computed(() => {
      var _a;
      return props.locale || ((_a = parentContext.locale) === null || _a === void 0 ? void 0 : _a.value);
    });
    watch(locale$1, () => {
      globalConfigBySet.locale = locale$1.value;
    }, {
      immediate: true
    });
    const direction = computed(() => {
      var _a;
      return props.direction || ((_a = parentContext.direction) === null || _a === void 0 ? void 0 : _a.value);
    });
    const space = computed(() => {
      var _a, _b;
      return (_a = props.space) !== null && _a !== void 0 ? _a : (_b = parentContext.space) === null || _b === void 0 ? void 0 : _b.value;
    });
    const virtual = computed(() => {
      var _a, _b;
      return (_a = props.virtual) !== null && _a !== void 0 ? _a : (_b = parentContext.virtual) === null || _b === void 0 ? void 0 : _b.value;
    });
    const dropdownMatchSelectWidth = computed(() => {
      var _a, _b;
      return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = parentContext.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
    });
    const getTargetContainer = computed(() => {
      var _a;
      return props.getTargetContainer !== void 0 ? props.getTargetContainer : (_a = parentContext.getTargetContainer) === null || _a === void 0 ? void 0 : _a.value;
    });
    const getPopupContainer = computed(() => {
      var _a;
      return props.getPopupContainer !== void 0 ? props.getPopupContainer : (_a = parentContext.getPopupContainer) === null || _a === void 0 ? void 0 : _a.value;
    });
    const pageHeader = computed(() => {
      var _a;
      return props.pageHeader !== void 0 ? props.pageHeader : (_a = parentContext.pageHeader) === null || _a === void 0 ? void 0 : _a.value;
    });
    const input = computed(() => {
      var _a;
      return props.input !== void 0 ? props.input : (_a = parentContext.input) === null || _a === void 0 ? void 0 : _a.value;
    });
    const pagination = computed(() => {
      var _a;
      return props.pagination !== void 0 ? props.pagination : (_a = parentContext.pagination) === null || _a === void 0 ? void 0 : _a.value;
    });
    const form = computed(() => {
      var _a;
      return props.form !== void 0 ? props.form : (_a = parentContext.form) === null || _a === void 0 ? void 0 : _a.value;
    });
    const select = computed(() => {
      var _a;
      return props.select !== void 0 ? props.select : (_a = parentContext.select) === null || _a === void 0 ? void 0 : _a.value;
    });
    const componentSize = computed(() => props.componentSize);
    const componentDisabled = computed(() => props.componentDisabled);
    const wave = computed(() => {
      var _a, _b;
      return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = parentContext.wave) === null || _b === void 0 ? void 0 : _b.value;
    });
    const configProvider = {
      csp,
      autoInsertSpaceInButton,
      locale: locale$1,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
      getPrefixCls,
      iconPrefixCls,
      theme: computed(() => {
        var _a, _b;
        return (_a = mergedTheme.value) !== null && _a !== void 0 ? _a : (_b = parentContext.theme) === null || _b === void 0 ? void 0 : _b.value;
      }),
      renderEmpty: renderEmptyComponent,
      getTargetContainer,
      getPopupContainer,
      pageHeader,
      input,
      pagination,
      form,
      select,
      componentSize,
      componentDisabled,
      transformCellText: computed(() => props.transformCellText),
      wave
    };
    const memoTheme = computed(() => {
      const _a = mergedTheme.value || {}, {
        algorithm,
        token
      } = _a, rest = __rest(_a, ["algorithm", "token"]);
      const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : void 0;
      return _extends(_extends({}, rest), {
        theme: themeObj,
        token: _extends(_extends({}, seedToken), token)
      });
    });
    const validateMessagesRef = computed(() => {
      var _a, _b;
      let validateMessages = {};
      if (locale$1.value) {
        validateMessages = ((_a = locale$1.value.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = localeValues.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
      }
      if (props.form && props.form.validateMessages) {
        validateMessages = _extends(_extends({}, validateMessages), props.form.validateMessages);
      }
      return validateMessages;
    });
    useConfigContextProvider(configProvider);
    useProvideGlobalForm({
      validateMessages: validateMessagesRef
    });
    useProviderSize(componentSize);
    useProviderDisabled(componentDisabled);
    const renderProvider = (legacyLocale) => {
      var _a, _b;
      let childNode = shouldWrapSSR.value ? wrapSSR((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) : (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
      if (props.theme) {
        const _childNode = /* @__PURE__ */ (function() {
          return childNode;
        })();
        childNode = createVNode(DesignTokenProvider, {
          "value": memoTheme.value
        }, {
          default: () => [_childNode]
        });
      }
      return createVNode(locale, {
        "locale": locale$1.value || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: () => [childNode]
      });
    };
    watchEffect(() => {
      if (direction.value) {
        api$1.config({
          rtl: direction.value === "rtl"
        });
        api.config({
          rtl: direction.value === "rtl"
        });
      }
    });
    return () => createVNode(LocaleReceiver, {
      "children": (_, __, legacyLocale) => renderProvider(legacyLocale)
    }, null);
  }
});
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function(app) {
  app.component(ConfigProvider.name, ConfigProvider);
};
const useSiteStore = defineStore("site", {
  state: () => ({
    siteInfo: null,
    loaded: false
  }),
  getters: {
    siteName: (state) => state.siteInfo?.siteName || "我的博客",
    siteDomain: (state) => state.siteInfo?.siteDomain || "",
    siteDescription: (state) => state.siteInfo?.siteDescription || "",
    recordNumber: (state) => state.siteInfo?.recordNumber || ""
  },
  actions: {
    setSiteInfo(info) {
      this.siteInfo = info;
      this.loaded = true;
    }
  }
});

export { CloseCircleFilled as C, ExclamationCircleFilled as E, Icon as I, LoadingOutlined as L, Portal as P, Wave as W, useAsyncData as a, api$1 as b, CheckCircleFilled as c, getTransitionProps as d, getTransitionName as e, getTransitionDirection as f, getTransitionGroupProps as g, CloseOutlined as h, useState as i, isPresetColor as j, isPresetStatusColor as k, genPresetColor as l, useProvidePortal as m, InfoCircleFilled as n, globalConfigForApi as o, ConfigProvider as p, getConfirmLocale as q, getMotion$1 as r, useSiteStore as u };
//# sourceMappingURL=siteStore-MquY96fb.mjs.map
