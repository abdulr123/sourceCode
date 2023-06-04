var app = new Vue({
    el: '#app',
    data: {
        kata:'contoh kata-kata dan kata-kata ini akan ada'
    },
    filters: {
        ganti(nilai){
            return nilai.replace(/kata-kata/g, 'kalimat')
        }
    }
})
