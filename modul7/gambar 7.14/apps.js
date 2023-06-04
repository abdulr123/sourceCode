var app = new Vue({
    el: '#app',
    data: {
        kata:''
    },
    filters: {
        kapital(nilai){
            return nilai.toUpperCase()
        }
    }
})
