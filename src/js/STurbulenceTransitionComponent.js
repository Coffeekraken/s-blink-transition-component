import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent"
import anime from 'animejs'

export default class Component extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
    return {}
  }

  /**
   * Physical props
   * @definition    SWebComponent.physicalProps
   * @protected
   */
  static get physicalProps() {
    return []
  }

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
        position: relative;
      }
      ${componentNameDash} svg {
        display: block;
        position: absolute;
        width:110%; height: 110%;
        top: -5%;
        left: -5%;
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

    // append the base polygon
    this.innerHTML = `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <filter id="displacementFilter">
          <feTurbulence type="turbulence" baseFrequency=".01" numOctaves="2" result="turbulence"/>
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <polygon id="shapeTop" points="1920 540 970 540 960 540 950 540 0 540 0 0 1920 0 1920 540" style="filter: url(#displacementFilter)" fill="currentColor" />
        <polygon id="shapeBottom" points="0 540 950 540 960 540 970 540 1920 540 1920 1080 0 1080 0 540" style="filter: url(#displacementFilter)" fill="currentColor" />
      </svg>
    `

    const $shapeTop = this.querySelector('#shapeTop')
    const $shapeBottom = this.querySelector('#shapeBottom')
    const $feTurbulence = this.querySelector('feTurbulence')
    const $feDisplacementMap = this.querySelector('feDisplacementMap')

    anime({
      targets: [$feTurbulence, $feDisplacementMap],
      baseFrequency: 0,
      loop: true,
      duration: 3000,
      direction: 'alternate',
      easing: 'easeInOutExpo'
    })

    anime({
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
    anime({
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
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition    SWebComponent.render
   * @protected
   */
  render() {
    super.render()
  }
}
