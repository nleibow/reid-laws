<template>
    <div class="Wallop-list" v-if="architect">
        <div class="Wallop-item Wallop-item--current architect">
            <div class="container">
                <figure class="hero-type" v-html="heroType">
                </figure>    
                <div>
                    Compared to a traditional mud bed, USG’s Durock™ Shower System
                    provides enhanced moisture and mold protection, allows for complete
                    design customization and delivers significant cost and time savings.
                    And those are benefits that are always in style. 
                </div>
                <a href="javascript:void(0)">
                    SEE THE BENEFITS 
                </a>
                <figure class="usg-logo" v-html="usgLogo">
                </figure>
            </div>
        </div>
        <div class="Wallop-item contractor"> 
            <div class="container">
                <figure class="hero-type" v-html="heroType">
                </figure>    
                <div>
                    Compared to a traditional mud bed, USG’s Durock™ Shower System
                    provides enhanced moisture and mold protection, allows for complete
                    design customization and delivers significant cost and time savings.
                    And those are benefits that are always in style. 
                </div>
                <a href="javascript:void(0)">
                    CALCULATE YOUR COST &amp; TIME SAVINGS
                </a>   
                <figure class="usg-logo" v-html="usgLogo">
                </figure>
            </div>
        </div>
    </div>
    <div class="Wallop-list" v-else>
        <div class="Wallop-item Wallop-item--current contractor"> 
            <div class="container">
                <figure class="hero-type" v-html="heroType">
                </figure>    
                <div>
                    Compared to a traditional mud bed, USG’s Durock™ Shower System
                    provides enhanced moisture and mold protection, allows for complete
                    design customization and delivers significant cost and time savings.
                    And those are benefits that are always in style. 
                </div>
                <a href="javascript:void(0)">
                    CALCULATE YOUR COST &amp; TIME SAVINGS
                </a>   
                <figure class="usg-logo" v-html="usgLogo">
                </figure>
            </div>
        </div>

        <div class="Wallop-item architect">
            <div class="container">
                <figure class="hero-type" v-html="heroType">
                </figure>    
                <div>
                    Compared to a traditional mud bed, USG’s Durock™ Shower System
                    provides enhanced moisture and mold protection, allows for complete
                    design customization and delivers significant cost and time savings.
                    And those are benefits that are always in style. 
                </div>
                <a href="javascript:void(0)">
                    SEE THE BENEFITS 
                </a>
                <figure class="usg-logo" v-html="usgLogo">
                </figure>
            </div>
        </div>
    </div>
</template>
<script>

    import usgLogo from "../assets/img/usg-logo-mobile.svg";
    import heroType from "../assets/img/hero-type.svg";
    export default {
        name: 'Carousel',
        props: [
         
        ],
        data() {
            return {
                usgLogo: usgLogo,
                heroType: heroType,
                architect: true,
                
             
            }
        },
        beforeMount: function (){
             if(window.location.href.indexOf("?architect") > -1) {
                    this.architect = true;
            }
            else if (window.location.href.indexOf("?contractor") > -1){
                    this.architect = false;
             } 
      
        },
        mounted: function () {
             window.slider.reset();
        }
    }
</script>