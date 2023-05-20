var app = new Vue({
    el: '#app',
    data: {
        bil1:'',
        bil2:'', 
        hasil:''
    },
    computed: {
        proses() {
            return this.hasil=parseInt(this.bil1)+parseInt(this.bil2)
        }
    }
})
