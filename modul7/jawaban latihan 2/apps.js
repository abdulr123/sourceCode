var app = new Vue({
    el: '#app',
    data: {
        teks:''
    },
    computed: {
        hasil(){
            return this.teks
        }
    },
    filters: {
        ganti(nilai){
            return nilai.replace(/ /g,"(spasi)")
        }
    }
})
