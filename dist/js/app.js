$(document).ready(function() {


  const navSlide = () => {
    const burger = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',()=>{
      // Toggle menu
      nav.classList.toggle('nav-active')


      // animate links
      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index /  5 + 0.5}s`
        }
      });
      // menu-btn animation
      burger.classList.toggle('toggle')
    });

  }

  navSlide();


  // ********* PAGE TIME LINES *************

  // *********** HOME PAGE *************
  var nav = $('nav');
  var icon = $('.social-item');
  var center = $('.center');
  var line = $('.line');
  var code = $('.coder');
  var design = $('.designer')
  var foot = $('footer');
  var bg = $('.bg');
  var one = $('.1');
  var two = $('.2');
  var three = $('.3');
  var four = $('.4');


  tl1 = new TimelineMax();


  tl1
    // .from(bg, 2, {autoAlpha: 0, scale:1})
    .from(nav, 3, {autoAlpha: 0,})
    .from(center, 1, {autoAlpha: 0, ease:Power2.easeOut, x:"-70%"})
    .from(code, 0.5, {autoAlpha: 0, x:55, ease:Power3.easeOut,})
    .from(design, 0.5, {autoAlpha: 0, x: -55, ease:Power3.easeOut})
    .from(line, 0.5, {autoAlpha: 0, ease: Circ.easeOut})
    .from(one, 0.5, {autoAlpha: 0, ease:Bounce.easeIn})
    .from(two, 0.5, {autoAlpha: 0, ease:Bounce.easeIn})
    .from(three, 0.5, {autoAlpha: 0, ease:Bounce.easeIn})
    .from(four, 0.5, {autoAlpha: 0, ease:Bounce.easeIn})
    .from(foot, 0.5, {autoAlpha: 0, y: -100})

var sub = $('.sub-heading')

var tl2 = new TimelineMax();

tls
  .from(sub, 2, {autoAlpha: 0,})


var home = barba.baseView.extend({
  namespace: 'home',
  onEnter: function() {},
  onEnterCompleted: function() {
    console.log("completed")
  },
  onLeave: function() {},
  onLeaveCompleted: function() {},

});

const Barba = require('barba.js')
// const home = require('views/home')

home.init();

Barba.Pjax.start();

var TransitionAnimation = Barba.BaseTransition.extend({
  start: function() {

    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
    var transitionPromise = new Promise(function(resolve) {
    var wipe = $(".color-wipe");
    var outTransition = new TimelineMax();

    outTransition
    .set(wipe, {display: "block", y: "100%"}, "-=0.7")
    .staggerFromTo(wipe, 1, {y: "100%"}, {y:"-100%", ease:Expo.easeOut}, 0.2, "-=0.7")

    .to(".loader", 1, {autoAlpha: 1, onComplete: function(){resolve();
    }})

    .staggerFromTo(wipe, 1, {y: "-100%"}, {y:"-200%", ease:Expo.easeOut}, 0.2)
    .set(wipe, {display: "none"})

  });

  return transitionPromise;

  },

  fadeIn: function() {



    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldcontainer), {display: "none"});
    TweenMax.fromTo(".loader", .7, {autoAlpha: 1,}, {autoAlpha: 0,})
    TweenMax.to($el, 0.1, {opacity: 1, onComplete: function(){_this.done();

    }});
  }
});

  /**
   * Next step, you have to tell Barba to use the new Transition
   */


  Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */


    return TransitionAnimation;
  };

});






// ******* Navigation Section ***********
