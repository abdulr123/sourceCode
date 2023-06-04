var app = new Vue({
    el: '#app',
    data: {
        kata:'contoh kata-kata'
    },
    filters: {
        pisah(nilai){
            return nilai.split(' ')
        }
    }
})
