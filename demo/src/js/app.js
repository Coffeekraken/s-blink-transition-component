import "babel-polyfill"
import "coffeekraken-sugar/js/features/all"
import SBlinkTransitionComponent from "../../../dist/index"

window.playTransition = function() {
  const $transition = document.querySelector("s-blink-transition")
  $transition.animateIn().then(() => {
    document.body.classList.toggle("bkg-error")
    $transition.animateOut()
  })
  // $transition.goToStillFrame()
  // $transition.animateOut().then(() => {
  //   $transition.animateIn()
  // })
}
playTransition()
