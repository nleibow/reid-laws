<template>
    <div class="Wallop-list">
        <div class="Wallop-item Wallop-item--current architect">
            <div class="container">
                <figure class="hero-type">
                </figure>    
                <div>
                    Welcome to Weinstein Law
                </div>
            </div>
        </div>
        <div class="Wallop-item contractor"> 
            <div class="container">
                <figure class="hero-type">
                </figure>    
                 <div>
                    Welcome to Weinstein Law
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import usgLogo from "../assets/img/usg-logo-mobile.svg";
    import smoothScroll from 'smoothscroll-polyfill';

    // Smooth Scroll
    window.__forceSmoothScrollPolyfill__ = true;
    smoothScroll.polyfill();

    export default {
        name: 'Carousel',
        props: [
         
        ],
        data() {
            return {
                usgLogo: usgLogo,
                architect: true,
            }
        },
        beforeMount: function (){
             if(window.location.href.indexOf("?pageType=showerdesign") > -1) {
                    this.architect = true;
            }
            else if (window.location.href.indexOf("?pageType=showerinstall") > -1){
                    this.architect = false;
             } 
      
        },
        mounted: function () {
             window.slider.reset();
        },
        methods: {
            scrollToBenefits: function () {
                const scrollToElement = document.querySelector("#ProductBenefits");
                window.scroll({top: scrollToElement.offsetTop - 75, behavior: 'smooth'});
            },
            scrollToCalc: function () {
                const scrollToElement = document.querySelector("#Downloads");
                window.scroll({top: scrollToElement.offsetTop - 75, behavior: 'smooth'});
            }
        }
    }
</script>