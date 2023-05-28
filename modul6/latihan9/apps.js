var app = new Vue({
    el: '#app',
    data: {
        bil1:'',
        bil2:'',
        operasi:null,
    },
    computed: {
        hasil(){
            return eval(this.bil1 + this.operasi + this.bil2)
        }
    },
})
