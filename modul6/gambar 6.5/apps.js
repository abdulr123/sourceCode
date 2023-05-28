var app = new Vue({
    el: '#app',
    data: {
        nama:'',
        hasil:''
    },
    watch: {
        nama: 'tunggu'
    
    },
    methods: {
        tunggu(){
            if (this.nama.endsWith(".")){
                this.hasil = "pengetikkan telah selesai"
            }else {
                this.hasil = "Menunggu..."
            }
                   
        }
    },
})
