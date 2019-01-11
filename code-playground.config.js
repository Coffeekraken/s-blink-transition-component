module.exports = {
  // server port
  port: 3000,

  // title
  title: "s-blink-transition-component",

  // layout
  layout: "right",

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // demos
  demos: {
    color: {
      title: "Color",
      editors: {
        css: {
          language: "scss",
          data: `
            @import 'node_modules/coffeekraken-sugar/index';
            @import 'node_modules/coffeekraken-s-button-component/index';

            @include s-setup(());
            @include s-init();
            @include s-classes();

            @include s-button-classes();

            body {
              padding: s-space(bigger);
              background-color: s-color(primary);
            }

            s-blink-transition {
              @include s-fit(absolute);
              color: s-color(info);
            }
          `
        }
      }
    },
    duration: {
      title: "Duration",
      editors: {
        html: {
          language: "html",
          data: `
            <s-blink-transition phase-one-duration="1500" phase-two-duration="2000"></s-blink-transition>
            <button class="btn btn--secondary" onClick="playTransition()">
              Play the transition again
            </button>
          `
        }
      }
    },
    easings: {
      title: "Easings",
      editors: {
        html: {
          language: "html",
          data: `
            <s-blink-transition phase-one-easing="easeInOutQuad" phase-two-easing="easeInOutQuad"></s-blink-transition>
            <button class="btn btn--secondary" onClick="playTransition()">
              Play the transition again
            </button>
          `
        }
      }
    }
  },

  // editors
  editors: {
    html: {
      language: "html",
      data: `
        <s-blink-transition></s-blink-transition>
        <button class="btn btn--secondary" onClick="playTransition()">
          Play the transition again
        </button>
      `
    },
    css: {
      language: "scss",
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-button-component/index';

        @include s-setup(());
        @include s-init();
        @include s-classes();

        @include s-button-classes();

        body {
          padding: s-space(bigger);
          background-color: s-color(primary);
        }

        s-blink-transition {
          @include s-fit(absolute);
          color: s-color(secondary, -darken 10%);
        }
      `
    },
    js: {
      language: "js",
      data: `
        import SBlinkTransitionComponent from './dist/index'
        window.playTransition = function() {
          const $transition = document.querySelector('s-blink-transition')
          $transition.animateIn().then(() => {
            document.body.classList.toggle('bkg-error')
            $transition.animateOut()
          })
        }
        playTransition()
      `
    }
  }
}
