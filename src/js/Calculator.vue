<template>
    <div class="calculator-wrapper">
        <div class="calculator">
            <section class="user-input">
                <div class="inputs">
                     <figure v-html="Calculator">
                        </figure>    
                        <p>
                            How many showers are you planning to install?
                        </p>    
                    <div class="wallboards half-inch">
                       
                        <input id="showers" v-model="halfInchInput" @input="changeHandlerHalf"/>
                    </div>
                </div>
            </section>
            <section class="outputs">
                <div class="days">
                    <div class="left">
                        <p :class="{fontShrinkOne: fontShrinkOne}"> {{galReduction}}</p>
                        <span>DAYS</span>
                        <p class="brand">
                            USG DUROCK™ BRAND INFINITY DRAIN® SHOWER SYSTEM
                        </p>
                    </div>
                    <div class="center">
                        <figure v-html="Calendar"></figure>
                         <span>TOTAL NUMBER OF DAYS<sup>*</sup></span>
                    </div>
                    <div class="right">
                        <p :class="{fontShrinkOne: fontShrinkOne}"> {{flushes}}</p>
                        <span>DAYS</span>
                        <p class="brand">
                            TRADITIONAL VINYL SHOWER&nbsp;DRAIN
                        </p>    
                    </div>
                </div>
                <div class="labor">
                    <div class="left">
                        <p class="money" :class="{fontShrinkOne: fontShrinkOne}">{{co2Reduction}}</p>
                       <p class="brand">
                            USG DUROCK™ BRAND INFINITY DRAIN® SHOWER SYSTEM
                        </p>
                    </div>
                    <div class="center">
                        <figure v-html="Wrench"></figure>
                        <span>LABOR COSTS</span>
                    </div>
                    <div class="right">
                        <p class="money" :class="{fontShrinkOne: fontShrinkOne}">{{carsOffRoad}}</p>
                        <p class="brand">
                            TRADITIONAL VINYL SHOWER&nbsp;DRAIN
                        </p>    
                    </div>
                </div>
                <div class="materials">
                    <div class="left">
                        <p class="money" :class="{fontShrinkOne: fontShrinkOne}">{{fuelSavings}}</p>
                        <p class="brand">
                            USG DUROCK™ BRAND INFINITY DRAIN® SHOWER SYSTEM
                        </p>
                    </div>
                    <div class="center">
                        <figure v-html="Chissel"></figure>
                         <span>MATERIALS COSTS</span>
                    </div>
                    <div class="right">
                        <p class="money" :class="{fontShrinkOne: fontShrinkOne}">{{milesNotDriven}}</p>
                        <p class="brand">
                            TRADITIONAL VINYL SHOWER&nbsp;DRAIN
                        </p>    
                    </div>
                </div>
                <div class="results">
                    <p class="title">
                        TOTAL SAVINGS WITH 
                        USG&nbsp;DUROCK™&nbsp;BRAND&nbsp;INFINITY&nbsp;DRAIN®
                        SHOWER SYSTEM
                    </p> 
                    <div class="facts">
                        <div>
                            <div class="days">
                                <p :class="{fontShrinkOne: fontShrinkOne}">{{totalDays}}</p>
                                <span >DAYS</span>
                             </div> 
                       </div> 
                       <div>    
                            <div class="price">
                                <p :class="{fontShrinkOne: fontShrinkOne}" class="money">{{totalCost}}</p>
                            </div>  
                       </div>     
                    </div>       
                </div>    
            </section>
        </div>
    </div>
</template>
<script>
    import calendar from "../assets/img/calendar.svg";
    import wrench from "../assets/img/wrench.svg";
    import chissel from "../assets/img/chissel.svg";
    import calculator from "../assets/img/calculator.svg";

    var reg = /^\d+$/;

    export default {
        name: 'Calculator',
        props: [],
        data() {
            return {
                Calendar: calendar,
                Wrench: wrench,
                Chissel: chissel,
                Calculator: calculator,
                halfInchInput: 0,
                previousHalfInch: 0,
                fiveEighthsInchInput: 0,
                previousFiveEighthsInch: 0,
                halfInchActive: false,
                fiveEigthsActive: false,
                fontShrinkOne: false,
            }
        },
        computed: {
            halfInchGalReduction: function () {
                return Math.round((((this.halfInchInput/1000)*0.88)-((this.halfInchInput/1000)*0.49))*264.172052);
            },
            halfInchCo2Reduction: function () {
                return Math.round((((this.halfInchInput/1000)*192)-((this.halfInchInput/1000)*122))*2.20462262);
            },
            halfInchFuelSaving: function () {
                return Math.round((this.halfInchInput/1000)*0.177);
            },
            galReduction: function () {
                return Math.round(this.halfInchInput*3).toLocaleString();
            },
            co2Reduction: function () {
                 return Math.round(this.halfInchInput*625).toLocaleString();
            },
            fuelSavings: function () {
                 return Math.round(this.halfInchInput*1261.45).toLocaleString();
            },
            carsOffRoad: function () {
                 return Math.round(this.halfInchInput*2600).toLocaleString();
            },
            flushes: function () {
                 return Math.round(this.halfInchInput*5).toLocaleString();
            },
            milesNotDriven: function () {
                return Math.round(this.halfInchInput*859.26).toLocaleString();
            },
            totalCost: function () {
                  return Math.round(this.halfInchInput*1572.81).toLocaleString();
            },
            totalDays: function () {
                  return Math.round(this.halfInchInput*2).toLocaleString();
            }
        },
        watch: {
            halfInchInput: function(_val) {
                let val = _val.toString();

                if(val[0] == 0 && val.length > 1) {
                    val = val.substring(1, _val.length);
                }

                if(val.length < 5) {
                    if(isNaN(val) || val == "") {
                        this.halfInchInput = 0;
                    } else if(reg.test(val)) {
                        if(val.length > 4) {
                            val = this.toScientific(val);
                            this.previousHalfInch = val;
                            this.halfInchInput = val;
                        } else {
                            this.previousHalfInch = parseInt(val);
                            this.halfInchInput = parseInt(val);
                        }
                    } else {
                        // window.console.log(val);
                        this.halfInchInput = this.previousHalfInch;
                    }
                } else {
                    // window.console.log(val);
                    this.halfInchInput = this.previousHalfInch;
                }
                if (val.length>3 ){
                    this.fontShrinkOne = true}


                }        
        },
            
        methods: {
            toScientific: function (num) {
                return parseFloat(num);
                // return parseFloat(num).toExponential();
            },
            changeHandlerHalf: function () {
                if (this.halfInchInput.toString().length < 6) {
                    this.halfInchActive = false;
                } else {
                    this.halfInchActive = true;
                }
            },
            changeHandlerFiveEigths: function () {
                if (this.fiveEighthsInchInput.toString().length < 6) {
                    this.fiveEigthsActive = false;
                } else {
                    this.fiveEigthsActive = true;
                }
            }
        },
    }
</script>