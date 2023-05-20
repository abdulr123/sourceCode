var app = new Vue({
    el: '#app',
    data: {
        bilangan:5
    },
    computed: {
        hasil () {
            return this.bilangan*2
        }
    }
})
