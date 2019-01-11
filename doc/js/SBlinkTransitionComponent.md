# SBlinkTransitionComponent

Create a nice blink style transition effect fully customizable

### Example

```html
<s-blink-transition></s-blink-transition>
```

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **SWebComponent**

## Attributes

Here's the list of available attribute(s).

### phaseOneDuration

Specify the phase 1 duration

Type : **{ Integer }**

Default : **700**

### phaseTwoDuration

Specify the phase 2 duration

Type : **{ Integer }**

Default : **500**

### phaseOneEasing

Specify the phase 1 easing. Can be one of the anime.js easing function

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **easeInOutExpo**

### phaseTwoEasing

Specify the phase 2 easing. Can be one of the anime.js easing function

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **easeInOutExpo**

## Methods

### animateIn

Anim in

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** Return a promise when the animation in it finished

### animateOut

Anim in

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** Return a promise when the animation in it finished
