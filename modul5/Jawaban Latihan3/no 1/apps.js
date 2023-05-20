var app = new Vue({
    el: '#app',
    data: {
        pass1:'',
        pass2:'',
        hasil:''
    },
    methods: {
        proses() {
        if (this.pass1 !='' && this.pass2 !=''){
            if (this.pass1 == this.pass2){
                return this.hasil="password sama, silakan ke proses selanjutnya"
            }else {
                return this.hasil="password tidak sama"
            }
        }else {
            return "silakan isi password"
        }
            
        }
    }
})
