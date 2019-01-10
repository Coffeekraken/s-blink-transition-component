"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SWebComponent2 = _interopRequireDefault(require("coffeekraken-sugar/js/core/SWebComponent"));

var _animejs = _interopRequireDefault(require("animejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_SWebComponent) {
  _inherits(Component, _SWebComponent);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "componentWillMount",

    /**
     * Component will mount
     * @definition    SWebComponent.componentWillMount
     * @protected
     */
    value: function componentWillMount() {
      _get(_getPrototypeOf(Component.prototype), "componentWillMount", this).call(this); // append the base polygon


      this.innerHTML = "\n      <svg width=\"1920\" height=\"1080\" viewBox=\"0 0 1920 1080\" preserveAspectRatio=\"none\">\n        <filter id=\"displacementFilter\">\n          <feTurbulence type=\"turbulence\" baseFrequency=\".01\" numOctaves=\"2\" result=\"turbulence\"/>\n          <feDisplacementMap in2=\"turbulence\" in=\"SourceGraphic\" scale=\"50\" xChannelSelector=\"R\" yChannelSelector=\"G\"/>\n        </filter>\n        <polygon id=\"shapeTop\" points=\"1920 540 970 540 960 540 950 540 0 540 0 0 1920 0 1920 540\" style=\"filter: url(#displacementFilter)\" fill=\"currentColor\" />\n        <polygon id=\"shapeBottom\" points=\"0 540 950 540 960 540 970 540 1920 540 1920 1080 0 1080 0 540\" style=\"filter: url(#displacementFilter)\" fill=\"currentColor\" />\n      </svg>\n    ";
      var $shapeTop = this.querySelector('#shapeTop');
      var $shapeBottom = this.querySelector('#shapeBottom');
      var $feTurbulence = this.querySelector('feTurbulence');
      var $feDisplacementMap = this.querySelector('feDisplacementMap');
      (0, _animejs.default)({
        targets: [$feTurbulence, $feDisplacementMap],
        baseFrequency: 0,
        loop: true,
        duration: 3000,
        direction: 'alternate',
        easing: 'easeInOutExpo'
      });
      (0, _animejs.default)({
        targets: [$shapeTop],
        points: [{
          value: '1920 540 970 538 960 538 950 538 0 540 0 0 1920 0 1920 540'
        }, {
          value: '1920 0 970 0 960 0 950 0 0 0 0 0 1920 0 1920 0'
        }],
        loop: true,
        duration: 3000,
        direction: 'alternate',
        easing: 'easeInOutExpo'
      });
      (0, _animejs.default)({
        targets: [$shapeBottom],
        points: [{
          value: '0 540 950 540 960 540 970 540 1920 540 1920 1080 0 1080 0 540'
        }, {
          value: '0 1080 950 1080 960 1080 970 1080 1920 1080 1920 1080 0 1080 0 1080'
        }],
        loop: true,
        duration: 3000,
        direction: 'alternate',
        easing: 'easeInOutExpo'
      });
    }
    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */

  }, {
    key: "componentMount",
    value: function componentMount() {
      _get(_getPrototypeOf(Component.prototype), "componentMount", this).call(this);
    }
    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: "componentUnmount",
    value: function componentUnmount() {
      _get(_getPrototypeOf(Component.prototype), "componentUnmount", this).call(this);
    }
    /**
     * Component will receive prop
     * @definition    SWebComponent.componentWillReceiveProp
     * @protected
     */

  }, {
    key: "componentWillReceiveProp",
    value: function componentWillReceiveProp(name, newVal, oldVal) {
      _get(_getPrototypeOf(Component.prototype), "componentWillReceiveProp", this).call(this, name, newVal, oldVal);
    }
    /**
     * Render the component
     * Here goes the code that reflect the this.props state on the actual html element
     * @definition    SWebComponent.render
     * @protected
     */

  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Component.prototype), "render", this).call(this);
    }
  }], [{
    key: "defaultCss",

    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return "\n      ".concat(componentNameDash, " {\n        display : block;\n        position: relative;\n      }\n      ").concat(componentNameDash, " svg {\n        display: block;\n        position: absolute;\n        width:110%; height: 110%;\n        top: -5%;\n        left: -5%;\n      }\n    ");
    }
  }, {
    key: "defaultProps",

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {};
    }
    /**
     * Physical props
     * @definition    SWebComponent.physicalProps
     * @protected
     */

  }, {
    key: "physicalProps",
    get: function get() {
      return [];
    }
  }]);

  return Component;
}(_SWebComponent2.default);

exports.default = Component;