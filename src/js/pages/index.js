import 'assets/scss/layout.scss';
import 'assets/scss/index.scss';
import 'assets/pdf/093000-usg-durock-shower-system-waterproofing-membrane-arch-spec-en-CB748.pdf';

import Vue from 'vue'
import Calculator from '../Calculator';
import Carousel from '../Carousel';
import smoothscroll from 'smoothscroll-polyfill';
import Nav from '../modules/nav.js';

import Wallop from 'wallop';

// Wallop
const wallopEl = document.querySelector('.Wallop');
const slider = new Wallop(wallopEl, {carousel: true});
slider;

window.slider = slider;
setInterval(() =>{
    slider.next();
}, 15000) 
 



  var paginationDots = Array.prototype.slice.call(document.querySelectorAll('.Wallop-dot'));
  /*
  Attach click listener on the dots
  */
  paginationDots.forEach(function (dotEl, index) {
    dotEl.addEventListener('click', function() {
      slider.goTo(index);
    });
  });
  /*
  Listen to wallop change and update classes
  */
  slider.on('change', function(event) {
    removeClass(document.querySelector('.Wallop-dot--current'), 'Wallop-dot--current');
    addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
  });
  // Helpers
  function addClass(element, className) {
    if (!element) { return; }
    element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
  }
  function removeClass(element, className) {
    if (!element) { return; }
    element.className = element.className.replace(className, '');
  }


     

/* eslint-disable no-new no-unused*/
const nav = new Nav();
nav;

// Vue for calculator
Vue.config.productionTip = false;

// Main Vue Component
new Vue({
    el: '#calculatorTarget',
    render: h => h(Calculator)
});

new Vue({
    el: '#carousel-target',
    render: h => h(Carousel)
});

// Smooth Scroll
window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();


// const openVideo = document.getElementById('watch-video');
// const closeVideo = document.getElementById('close-video-button');
// const videoOverlay = document.getElementById('video-overlay');

// const toggleVideoOverlay = () =>{
//     if(videoOverlay.classList.contains('show')) {
//         window.videoPlayer.stopVideo();
//         videoOverlay.classList.remove('show');
//     } else {
//         window.videoPlayer.playVideo();
//         videoOverlay.classList.add('show');
//     }
// };

// openVideo.addEventListener('click', toggleVideoOverlay);
// closeVideo.addEventListener('click', toggleVideoOverlay);



if (module.hot) {
    require('index.ejs');

    module.hot.accept('index.ejs', () => {
        window.console.info("HTML has been updated, reloading!");
        window.location.reload();
    });

    module.hot.accept();
}

