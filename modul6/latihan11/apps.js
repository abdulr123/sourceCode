var app = new Vue({
    el: '#app',
    data: {
        celcius:0,
        hasil:''
    },
    methods: {
        fahrenheit() {
            return this.hasil = (( parseInt(this.celcius) *9)/5) + 32 + " <sup>o</sup>F"
        },
        kelvin() {
            return this.hasil = parseInt(this.celcius) + 273.15+" K"
        }
    }
})
