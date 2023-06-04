var app = new Vue({
    el: '#app',
    data: {
        hasil:''
    },
    methods: {
        klik(nilai){
            return this.hasil="anda melakukan klik 2x pada box berwarna "+nilai
        }
    },
})
