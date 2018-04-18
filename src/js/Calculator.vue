<template>
    <div class="calculator-wrapper">
        <div class="calculator">
            <section class="user-input">
                <h4>SQUARE FOOTAGE OF YOUR PROJECT</h4>
                <div class="inputs">
                    <div class="wallboards half-inch">
                        <label :class="{hide: halfInchActive}" for="halfInchWallboard">1/2 IN. WALLBOARD</label>
                        <input id="halfInchWallboard" v-model="halfInchInput" @input="changeHandlerHalf"/>
                    </div>
                    <div class="wallboards five-eighths">
                        <label :class="{hide: fiveEigthsActive}" for="halfInchWallboard">5/8 IN. WALLBOARD</label>
                        <input v-model="fiveEighthsInchInput"  @input="changeHandlerFiveEigths"/>
                    </div>
                    <div class="total-sqft">
                        <label for="halfInchWallboard">TOTAL PROJECT SQ. FT.</label>
                        <input value="0" v-model="squareFootSum" disabled/>
                    </div>
                </div>
            </section>
            <section class="outputs">
                <div class="water-saving">
                    <div class="left">
                        <p>{{galReduction}}</p>
                        <span>GALLONS</span>
                    </div>
                    <div class="center">
                        <span>WATER SAVINGS</span>
                        <figure v-html="WaterIcon"></figure>
                    </div>
                    <div class="right">
                        <p>{{flushes}}</p>
                        <span>TOILET FLUSHES</span>
                    </div>
                </div>
                <div class="co2">
                    <div class="left">
                        <p>{{co2Reduction}}</p>
                        <span>POUNDS</span>
                    </div>
                    <div class="center">
                        <span>CO<sub>2</sub> REDUCTION</span>
                        <figure v-html="Co2Icon"></figure>
                    </div>
                    <div class="right">
                        <p>{{carsOffRoad}}</p>
                        <span>CARS OFF THE ROAD</span>
                    </div>
                </div>
                <div class="fuel-saving">
                    <div class="left">
                        <p>{{fuelSavings}}</p>
                        <span>GALLONS</span>
                    </div>
                    <div class="center">
                        <span>FUEL SAVINGS</span>
                        <figure v-html="FuelIcon"></figure>
                    </div>
                    <div class="right">
                        <p>{{milesNotDriven}}</p>
                        <span>MILES NOT DRIVEN</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import waterIcon from "../assets/img/icon_water.svg";
    import co2Icon from "../assets/img/icon_co2.svg";
    import fuelIcon from "../assets/img/icon_fuel_gauge.svg";

    var reg = /^\d+$/;

    export default {
        name: 'Calculator',
        props: [],
        data() {
            return {
                WaterIcon: waterIcon,
                Co2Icon: co2Icon,
                FuelIcon: fuelIcon,
                halfInchInput: 0,
                previousHalfInch: 0,
                fiveEighthsInchInput: 0,
                previousFiveEighthsInch: 0,
                halfInchActive: false,
                fiveEigthsActive: false,
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
            fiveEighthsGalReduction: function () {
                return Math.round((((this.fiveEighthsInchInput/1000)*1.02)-((this.fiveEighthsInchInput/1000)*0.76))*264.172052);
            },
            fiveEighthsCo2Reduction: function () {
                return Math.round((((this.fiveEighthsInchInput/1000)*257)-((this.fiveEighthsInchInput/1000)*202))*2.20462262);
            },
            fiveEighthsFuelSaving: function () {
                return Math.round((this.fiveEighthsInchInput/1000)*0.463);
            },
            galReduction: function () {
                return (this.halfInchGalReduction + this. fiveEighthsGalReduction).toLocaleString();
            },
            co2Reduction: function () {
                return (this.halfInchCo2Reduction + this. fiveEighthsCo2Reduction).toLocaleString();
            },
            fuelSavings: function () {
                return (this.halfInchFuelSaving + this. fiveEighthsFuelSaving).toLocaleString();
            },
            carsOffRoad: function () {
                return Math.round((this.halfInchCo2Reduction + this. fiveEighthsCo2Reduction) / 8320).toLocaleString();
            },
            flushes: function () {
                return Math.round((this.halfInchGalReduction + this. fiveEighthsGalReduction) / 1.6).toLocaleString();
            },
            milesNotDriven: function () {
                return Math.round((this.halfInchFuelSaving + this. fiveEighthsFuelSaving) * 25.4).toLocaleString();
            },
            squareFootSum: function () {
                return (parseInt(this.fiveEighthsInchInput) + parseInt(this.halfInchInput)).toLocaleString();
            }
        },
        watch: {
            halfInchInput: function(_val) {
                let val = _val.toString();

                if(val[0] == 0 && val.length > 1) {
                    val = val.substring(1, _val.length);
                }

                if(val.length < 9) {
                    if(isNaN(val) || val == "") {
                        this.halfInchInput = 0;
                    } else if(reg.test(val)) {
                        if(val.length > 7) {
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
            },
            fiveEighthsInchInput: function(_val) {
                let val = _val.toString();

                if(val[0] == 0 && val.length > 1) {
                    val = val.substring(1, _val.length);
                }

                if(val.length < 11) {
                    if(isNaN(val)) {
                        this.fiveEighthsInchInput = 0;
                    } else if(reg.test(val)) {
                        if(val.length > 7) {
                            val = this.toScientific(val);
                            this.previousFiveEighthsInch = val;
                            this.fiveEighthsInchInput = val;
                        } else {
                            this.previousFiveEighthsInch = parseInt(val);
                            this.fiveEighthsInchInput = parseInt(val);
                        }
                    } else {
                        this.fiveEighthsInchInput = this.previousFiveEighthsInch;
                    }
                } else {
                    this.fiveEighthsInchInput = this.previousFiveEighthsInch;
                }
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