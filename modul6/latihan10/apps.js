var app = new Vue({
    el: '#app',
    data: {
        hasil:0
    },
    methods: {
        reset() {
            return this.hasil = 0
        },
        count() {
            return this.hasil++
        }
    }
})
