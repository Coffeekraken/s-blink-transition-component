"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = void 0

var _SWebComponent2 = _interopRequireDefault(
  require("coffeekraken-sugar/js/core/SWebComponent")
)

var _animejs = _interopRequireDefault(require("animejs"))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj
    }
  }
  return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ("value" in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property)
      if (!base) return
      var desc = Object.getOwnPropertyDescriptor(base, property)
      if (desc.get) {
        return desc.get.call(receiver)
      }
      return desc.value
    }
  }
  return _get(target, property, receiver || target)
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object)
    if (object === null) break
  }
  return object
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function")
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
}

/**
 * Create a nice blink style transition effect fully customizable
 *
 * @example    html
 * <s-blink-transition></s-blink-transition>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var SBlinkTransitionComponent =
  /*#__PURE__*/
  (function(_SWebComponent) {
    _inherits(SBlinkTransitionComponent, _SWebComponent)

    function SBlinkTransitionComponent() {
      _classCallCheck(this, SBlinkTransitionComponent)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(SBlinkTransitionComponent).apply(this, arguments)
      )
    }

    _createClass(
      SBlinkTransitionComponent,
      [
        {
          key: "componentWillMount",

          /**
           * Component will mount
           * @definition    SWebComponent.componentWillMount
           * @protected
           */
          value: function componentWillMount() {
            _get(
              _getPrototypeOf(SBlinkTransitionComponent.prototype),
              "componentWillMount",
              this
            ).call(this)

            this._isAnimateIn = false
            this._isAnimateOut = false // append the base polygon

            this.innerHTML =
              '\n      <svg width="1920" height="1080" viewBox="0 0 1920 1080" preserveAspectRatio="none">\n        <polygon id="shapeTop" points="1920 541 970 541 960 541 950 541 0 541 0 0 1920 0 1920 541" fill="currentColor" />\n        <polygon id="shapeBottom" points="0 540 950 540 960 540 970 540 1920 540 1920 1080 0 1080 0 540" fill="currentColor" />\n      </svg>\n    '
            this._$shapeTop = this.querySelector("#shapeTop")
            this._$shapeBottom = this.querySelector("#shapeBottom")
            var animOpenTop = {
              targets: [this._$shapeTop],
              points: [
                {
                  value:
                    "1920 540 970 538 960 538 950 538 0 540 0 0 1920 0 1920 540"
                }
              ],
              duration: this.props.phaseOneDuration,
              easing: this.props.phaseOneEasing
            }
            var animFullOpenTop = {
              targets: [this._$shapeTop],
              points: [
                {
                  value: "1920 0 970 0 960 0 950 0 0 0 0 0 1920 0 1920 0"
                }
              ],
              duration: this.props.phaseTwoDuration,
              easing: this.props.phaseTwoEasing
            }
            var animOpenBottom = {
              targets: [this._$shapeBottom],
              points: [
                {
                  value:
                    "0 540 950 540 960 540 970 540 1920 540 1920 1080 0 1080 0 540"
                }
              ],
              duration: this.props.phaseOneDuration,
              easing: this.props.phaseOneEasing
            }
            var animFullopenBottom = {
              targets: [this._$shapeBottom],
              points: [
                {
                  value:
                    "0 1080 950 1080 960 1080 970 1080 1920 1080 1920 1080 0 1080 0 1080"
                }
              ],
              duration: this.props.phaseTwoDuration,
              easing: this.props.phaseTwoEasing
            }
            this._tlTop = _animejs.default.timeline({})

            this._tlTop.pause()

            this._tlBottom = _animejs.default.timeline({})

            this._tlBottom.pause()

            this._tlTop.add(animOpenTop)

            this._tlTop.add(animFullOpenTop)

            this._tlTop.seek(this._tlTop.duration)

            this._tlBottom.add(animOpenBottom)

            this._tlBottom.add(animFullopenBottom)

            this._tlBottom.seek(this._tlBottom.duration)
          }
          /**
           * Mount component
           * @definition    SWebComponent.componentMount
           * @protected
           */
        },
        {
          key: "componentMount",
          value: function componentMount() {
            _get(
              _getPrototypeOf(SBlinkTransitionComponent.prototype),
              "componentMount",
              this
            ).call(this)
          }
          /**
           * Component unmount
           * @definition    SWebComponent.componentUnmount
           * @protected
           */
        },
        {
          key: "componentUnmount",
          value: function componentUnmount() {
            _get(
              _getPrototypeOf(SBlinkTransitionComponent.prototype),
              "componentUnmount",
              this
            ).call(this)
          }
          /**
           * Component will receive prop
           * @definition    SWebComponent.componentWillReceiveProp
           * @protected
           */
        },
        {
          key: "componentWillReceiveProp",
          value: function componentWillReceiveProp(name, newVal, oldVal) {
            _get(
              _getPrototypeOf(SBlinkTransitionComponent.prototype),
              "componentWillReceiveProp",
              this
            ).call(this, name, newVal, oldVal)
          }
          /**
           * Anim in
           * @return    {Promise}    Return a promise when the animation in it finished
           */
        },
        {
          key: "animateIn",
          value: function animateIn() {
            var _this = this

            if (this._isAnimateIn) return
            this._isAnimateIn = true
            setTimeout(function() {
              _this.classList.add("active")
            })
            return new Promise(function(resolve) {
              _this._tlTop.reverse()

              _this._tlBottom.reverse()

              _this._tlTop.play()

              _this._tlBottom.play()

              setTimeout(function() {
                _this._isAnimateIn = false

                _this.classList.remove("active")

                resolve(_this)
              }, _this._tlBottom.duration)
            })
          }
          /**
           * Anim in
           * @return    {Promise}    Return a promise when the animation in it finished
           */
        },
        {
          key: "animateOut",
          value: function animateOut() {
            var _this2 = this

            if (this._isAnimateOut) return
            this._isAnimateOut = true
            this.classList.add("active")
            return new Promise(function(resolve) {
              _this2._tlTop.reverse()

              _this2._tlBottom.reverse()

              _this2._tlTop.play()

              _this2._tlBottom.play()

              setTimeout(function() {
                _this2._isAnimateOut = false

                _this2.classList.remove("active")

                resolve(_this2)
              }, _this2._tlTop.duration)
            })
          }
          /**
           * Go to still frame
           */
        },
        {
          key: "goToStillFrame",
          value: function goToStillFrame() {
            this._tlTop.reverse()

            this._tlBottom.reverse()

            this._tlBottom.seek(0)

            this._tlTop.seek(0)

            this.classList.add("active")
          }
        }
      ],
      [
        {
          key: "defaultCss",

          /**
           * Css
           * @protected
           */
          value: function defaultCss(componentName, componentNameDash) {
            return "\n      "
              .concat(
                componentNameDash,
                " {\n        display : none;\n        position: relative;\n        overflow: hidden;\n        pointer-events: none;\n      }\n      "
              )
              .concat(
                componentNameDash,
                ".active {\n        pointer-events: all;\n        display: block;\n      }\n      "
              )
              .concat(
                componentNameDash,
                " svg {\n        display: block;\n        position: absolute;\n        width:100%; height: 100%;\n        top: 0;\n        left: 0;\n      }\n    "
              )
          }
        },
        {
          key: "defaultProps",

          /**
           * Default props
           * @definition    SWebComponent.defaultProps
           * @protected
           */
          get: function get() {
            return {
              /**
               * Specify the phase 1 duration
               * @prop
               * @type    {Integer}
               */
              phaseOneDuration: 700,

              /**
               * Specify the phase 2 duration
               * @prop
               * @type    {Integer}
               */
              phaseTwoDuration: 500,

              /**
               * Specify the phase 1 easing. Can be one of the anime.js easing function
               * @prop
               * @type    {String}
               */
              phaseOneEasing: "easeInOutExpo",

              /**
               * Specify the phase 2 easing. Can be one of the anime.js easing function
               * @prop
               * @type    {String}
               */
              phaseTwoEasing: "easeInOutExpo"
            }
          }
        }
      ]
    )

    return SBlinkTransitionComponent
  })(_SWebComponent2.default)

exports.default = SBlinkTransitionComponent
