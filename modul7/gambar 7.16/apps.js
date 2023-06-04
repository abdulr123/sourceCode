var app = new Vue({
    el: '#app',
    data: {
        kata:'contoh kata-kata'
    },
    filters: {
        ambil_karakter(nilai){
            return nilai.charAt(2)
        }
    }
})
