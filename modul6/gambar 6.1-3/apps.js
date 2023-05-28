var app = new Vue({
    el: '#app',
    data: {
        nama:'',
        hasil:''
    },
    watch: {
        nama(){
            this.hasil = 'Menunggu...'
        }
    },
})
