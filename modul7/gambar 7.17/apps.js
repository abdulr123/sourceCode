var app = new Vue({
    el: '#app',
    data: {
        kata:'Contoh kata-kata'
    },
    filters: {
        slice(nilai){
           return nilai.slice(2, 10)
        }
    }
})
