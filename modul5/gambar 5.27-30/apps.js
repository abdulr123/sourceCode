var app = new Vue({
    el: '#app',
    data: {
        kelamin:'',//petik tunggal, penutup dan pembuka
        hasil:''
    },
    methods: {
        proses(){
        if (this.kelamin != ''){
            if (this.kelamin == "Laki-laki") {
                return this.hasil="anda " + this.kelamin + ", bukan Perempuan"
            } else {
                return this.hasil="anda " + this.kelamin + ", bukan Laki-laki"
            }
        }else {
            return this.hasil="silakan masukkan pilihan"
        }
        }
    }
})
