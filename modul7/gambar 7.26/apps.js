var app = new Vue({
    el: '#app',
    data: {
        hasil:''
    },
    methods: {
        didalam(){
            return this.hasil='<b>anda berada didalam area</b>'
        },
        diluar() {
            return this.hasil='<b>anda berada diluar area</b>'
        }
    },
})
