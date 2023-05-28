var app = new Vue({
    el: '#app',
    data: {
        pass1:'',
        pass2:'',
        hasil1:'',
        hasil2:''
    },
    watch: {
        pass2:'pantau'
    },
    methods: {
        pantau(){
            if(this.pass2 == this.pass1){
                this.hasil1 = "&#10004;" //centang
                this.hasil2 = "&#10004;" //centang
            }else {
                this.hasil1 = "" //2x petik ganda
                this.hasil2 = "&#10006;" //silang
            }
        }
    },
})
