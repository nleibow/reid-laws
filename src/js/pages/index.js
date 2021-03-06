import 'assets/scss/layout.scss';
import 'assets/scss/index.scss';

import Vue from 'vue'
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
}, 3000) 
 



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
    el: '#carousel-target',
    render: h => h(Carousel)
});

// Smooth Scroll
window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();




const openApproach = document.getElementById('openApproach');
const approach = document.getElementById('approach');

const toggleReadMore = () =>{
  window.console.log('clicked');
 if(approach.classList.contains('show')) {
   approach.classList.remove('show');
   openApproach.innerHTML= 'READ MORE';
 } else {
  approach.classList.add('show');
  openApproach.innerHTML= 'READ LESS';
 }
}
openApproach.addEventListener('click', toggleReadMore);

const openZealous = document.getElementById('openZealous');
const zealous = document.getElementById('zealous');

const toggleReadMoreOne = () =>{
  window.console.log('clicked');
 if(zealous.classList.contains('showOne')) {
   zealous.classList.remove('showOne');
   openZealous.innerHTML= 'READ MORE';
 } else {
  zealous.classList.add('showOne');
  openZealous.innerHTML= 'READ LESS';
 }
}

openZealous.addEventListener('click', toggleReadMoreOne);



if (module.hot) {
    require('index.ejs');

    module.hot.accept('index.ejs', () => {
        window.console.info("HTML has been updated, reloading!");
        window.location.reload();
    });

    module.hot.accept();
}

document.querySelectorAll("li").forEach();