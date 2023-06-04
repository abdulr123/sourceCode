var app = new Vue({
    el: '#app',
    data: {
        hasil:''
    },
    methods: {
        klik(){
            return this.hasil="anda menekan klik pada mouse"
        },
        kiri(){
            return this.hasil="anda menekan klik kiri pada mouse"
        },
        kanan(){
            return this.hasil="anda menekan klik kanan pada mouse"
        },
        tengah(){
            return this.hasil="anda menekan klik tengah pada mouse"
        },
    },
})
