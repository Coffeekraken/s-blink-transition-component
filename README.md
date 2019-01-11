# Coffeekraken s-blink-transition-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-blink-transition-component">
		<img src="https://img.shields.io/travis/coffeekraken/s-blink-transition-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-blink-transition-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-blink-transition-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-blink-transition-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-blink-transition-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-blink-transition-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-blink-transition-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-blink-transition-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-blink-transition-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-blink-transition-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-blink-transition-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

<p class="lead">Create a nice blink style transition effect fully customizable</p>

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-blink-transition-component)

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-blink-transition-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Javascript API](doc/js)
5. [Color](#readme-color)
6. [Sugar Web Components Documentation](https://github.com/coffeekraken/sugar/blob/master/doc/webcomponent.md)
7. [Browsers support](#readme-browsers-support)
8. [Code linting](#readme-code-linting)
9. [Contribute](#readme-contribute)
10. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
11. [Licence](#readme-license)

<a name="readme-install"></a>

## Install

```
npm install coffeekraken-s-blink-transition-component --save
```

<a name="readme-get-started"></a>

## Get Started

First, import the component into your javascript file like so:

```js
import SBlinkTransitionComponent from "coffeekraken-s-blink-transition-component"
```

Then simply use it inside your html like so:

```html
<s-blink-transition></s-blink-transition>
```

Then control it with your javascript like so:

```js
const $transition = document.querySelector("s-blink-transition")
await $transition.animateIn()
await $transition.animateOut()
```

<a id="readme-color"></a>

## Color

To set the color of your transition, simply specify if using css like so:

```scss
s-blink-transition {
  color: red;
}
```

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-blink-transition-component?demo=color)

<a id="readme-duration-easings"></a>

## Duration and easings

The animation is made of two phases. The first which is the small opening phase, and the second which is the big opening phase.
You can set the duration and the easing for each of these two phase like so:

```html
<s-blink-transition
  phase-one-duration="1500"
  phase-two-duration="2000"
  phase-one-easing="easeInOutQuad"
  phase-two-easing="easeInOutQuad"
></s-blink-transition>
```

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-blink-transition-component?demo=duration)

<a id="readme-browsers-support"></a>

## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11+                                                                                                                                                              | last 2 versions                                                                                                                                                   | last 2 versions                                                                                                                                                | last 2 versions                                                                                                                                                |

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-code-linting"></a>

## Code linting

This package uses some code linting rules. Here's the list:

1. [StandardJS](https://standardjs.com/) for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>

## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>

## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>

## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
