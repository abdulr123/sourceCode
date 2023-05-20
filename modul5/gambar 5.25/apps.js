var app = new Vue({
    el: '#app',
    data: {
        lahir:''//petik tunggal, buka dan tutup
    },
    computed: {
        hasil(){
            var tanggal = new Date(this.lahir).getDate();
            var bulan = new Date(this.lahir).getMonth()+1;
            var tahun = new Date(this.lahir).getFullYear();
            return "tanggal: "+tanggal+", bulan: "+bulan+", tahun: "+tahun
        }
    },
})
