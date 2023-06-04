var app = new Vue({
    el: '#app',
    data: {
        kata:'Contoh kata-kata'
    },
    filters: {
        kapital(nilai){
            return nilai.toUpperCase()
        },
        kecil(nilai){
            return nilai.toLowerCase()
        }
    }
})
