var app = new Vue({
    el: '#app',
    data: {
        nama:''
    },
    computed: {
        hasil () {
            return "selamat datang "+this.nama
        }
    }
})
