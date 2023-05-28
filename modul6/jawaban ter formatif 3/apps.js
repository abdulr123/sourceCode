var app = new Vue({
    el: '#app',
    data: {
        tampil:false,
        nama1:'',
        nama2:'',
        email: '',
        password: '',
        tanggal:'',
        kelamin:'',
        submit:false
    },
    computed: {
        keterangan(){
            if(this.nama1 != '' && this.nama2 != '' && this.email != '' &&this.password != '' &&this.tanggal != '' &&this.kelamin != '') {
                this.submit = true;
                return "data sudah lengkap, silakan lanjutkan";
            } else {
                return "Silakan lengkapi data!"
            }
        }
    },
    methods: {
        show(){
            return this.tampil=true
        },
        tutup(){
            return this.tampil=false
        }
    },
})
