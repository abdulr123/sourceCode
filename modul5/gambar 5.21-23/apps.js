var app = new Vue({
    el: '#app',
    data: {
        pass1:'',
        pass2:'',
    },
    computed: {
        hasil() {
        if (this.pass1 !='' && this.pass2 !=''){
            if (this.pass1 == this.pass2){
                return "password benar"
            }else {
                return "password salah"
            }
        }else {
            return "silakan isi password"
        }
            
        }
    }
})
