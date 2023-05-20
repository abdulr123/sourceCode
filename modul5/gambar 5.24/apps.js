var app = new Vue({
    el: '#app',
    data: {
        kelamin:''//petik tunggal, penutup dan pembuka
    },
    computed: {
        hasil(){
        if (this.kelamin != ''){
            if (this.kelamin == "Laki-laki") {
                return "anda " + this.kelamin + ", bukan Perempuan"
            } else {
                return "anda " + this.kelamin + ", bukan Laki-laki"
            }
        }else {
            return "silakan masukkan pilihan"
        }
        }
    }
})
