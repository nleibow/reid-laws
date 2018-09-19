<template>
    <div class="Wallop-list">
        <div class="Wallop-item  photo-1">
            <div class="container">
                <figure class="hero-type">
                </figure>    
                
            </div>
        </div>
        <div class="Wallop-item  photo-2"> 
            <div class="container">
                <figure class="hero-type">
                </figure>    
                
            </div>
        </div>
        <div class="Wallop-item Wallop-item--current photo-3"> 
            <div class="container">
                <figure class="hero-type">
                </figure>    
                
            </div>
        </div>
        <div class="Wallop-item photo-4"> 
            <div class="container">
                <figure class="hero-type">
                </figure>    
            </div>
        </div>
    </div>
</template>
<script>

    
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
                architect: true,
            }
        },
        mounted: function () {
             window.slider.reset();
        }
       
    }
</script>