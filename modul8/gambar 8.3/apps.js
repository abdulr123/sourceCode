Vue.component('teks-tebal', { 
    template:
   `
    <div>
        <b id='merah'>Contoh teks tebal 1</b> <br>
        <b id='kuning'>Contoh teks tebal 2</b> <br>
        <b id='hijau'>Contoh teks tebal 3</b>
    </div>
   ` 
})

var app = new Vue({ el: '#app' })
