var app = new Vue({
    el: '#app',
    data: {
        kata:'contoh kata-kata'
    },
    filters: {
        ganti(nilai){
            return nilai.replace('kata-kata', 'kalimat')
        }
    }
})
