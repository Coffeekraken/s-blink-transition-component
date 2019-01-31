import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent"
import anime from "animejs"

/**
 * Create a nice blink style transition effect fully customizable
 *
 * @example    html
 * <s-blink-transition></s-blink-transition>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default class SBlinkTransitionComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
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

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : none;
        position: relative;
        overflow: hidden;
        pointer-events: none;
      }
      ${componentNameDash}.active {
        pointer-events: all;
        display: block;
      }
      ${componentNameDash} svg {
        display: block;
        position: absolute;
        width:100%; height: 100%;
        top: 0;
        left: 0;
      }
    `
  }

  /**
   * Component will mount
   * @definition    SWebComponent.componentWillMount
   * @protected
   */
  componentWillMount() {
    super.componentWillMount()

    this._isAnimateIn = false
    this._isAnimateOut = false

    // append the base polygon
    this.innerHTML = `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <polygon id="shapeTop" points="1920 541 970 541 960 541 950 541 0 541 0 0 1920 0 1920 541" fill="currentColor" />
        <polygon id="shapeBottom" points="0 540 950 540 960 540 970 540 1920 540 1920 1080 0 1080 0 540" fill="currentColor" />
      </svg>
    `

    this._$shapeTop = this.querySelector("#shapeTop")
    this._$shapeBottom = this.querySelector("#shapeBottom")

    const animOpenTop = {
      targets: [this._$shapeTop],
      points: [
        {
          value: "1920 540 970 538 960 538 950 538 0 540 0 0 1920 0 1920 540"
        }
      ],
      duration: this.props.phaseOneDuration,
      easing: this.props.phaseOneEasing
    }
    const animFullOpenTop = {
      targets: [this._$shapeTop],
      points: [
        {
          value: "1920 0 970 0 960 0 950 0 0 0 0 0 1920 0 1920 0"
        }
      ],
      duration: this.props.phaseTwoDuration,
      easing: this.props.phaseTwoEasing
    }

    const animOpenBottom = {
      targets: [this._$shapeBottom],
      points: [
        {
          value: "0 540 950 540 960 540 970 540 1920 540 1920 1080 0 1080 0 540"
        }
      ],
      duration: this.props.phaseOneDuration,
      easing: this.props.phaseOneEasing
    }
    const animFullopenBottom = {
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

    this._tlTop = anime.timeline({})
    this._tlTop.pause()
    this._tlBottom = anime.timeline({})
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
  componentMount() {
    super.componentMount()
  }

  /**
   * Component unmount
   * @definition    SWebComponent.componentUnmount
   * @protected
   */
  componentUnmount() {
    super.componentUnmount()
  }

  /**
   * Component will receive prop
   * @definition    SWebComponent.componentWillReceiveProp
   * @protected
   */
  componentWillReceiveProp(name, newVal, oldVal) {
    super.componentWillReceiveProp(name, newVal, oldVal)
  }

  /**
   * Anim in
   * @return    {Promise}    Return a promise when the animation in it finished
   */
  animateIn() {
    if (this._isAnimateIn) return
    this._isAnimateIn = true
    setTimeout(() => {
      this.classList.add("active")
    })
    return new Promise(resolve => {
      this._tlTop.reverse()
      this._tlTop.play()
      this._tlBottom.reverse()
      this._tlBottom.play()
      setTimeout(() => {
        this._isAnimateIn = false
        this.classList.remove("active")
        resolve(this)
      }, this._tlBottom.duration)
    })
  }

  /**
   * Anim in
   * @return    {Promise}    Return a promise when the animation in it finished
   */
  animateOut() {
    if (this._isAnimateOut) return
    this._isAnimateOut = true
    this.classList.add("active")
    return new Promise(resolve => {
      this._tlTop.reverse()
      this._tlTop.play()
      this._tlBottom.reverse()
      this._tlBottom.play()
      setTimeout(() => {
        this._isAnimateOut = false
        this.classList.remove("active")
        resolve(this)
      }, this._tlTop.duration)
    })
  }

  /**
   * Go to still frame
   */
  goToStillFrame() {
    this._tlTop.reverse()
    this._tlBottom.reverse()
    this._tlBottom.seek(0)
    this._tlTop.seek(0)
    this.classList.add("active")
  }
}
