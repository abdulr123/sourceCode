var app = new Vue({
    el: '#app',
    data: {
        hasil:''
    },
    methods: {
        klik(){
            return this.hasil='<b>anda melakukan klik dan tahan</b>'
        },
        lepas() {
            return this.hasil='<b>anda melepaskan mouse</b>'
        }
    },
})
