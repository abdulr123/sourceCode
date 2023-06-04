Vue.component('teks-tebal', { 
    template:
   `
    <div>
        <b id='merah'> {{teks }} </b> <br>
        <b id='kuning'> {{teks }} </b> <br>
        <b id='hijau'> {{teks }} </b>
    </div>
   `,
   data(){
       return{
           teks: "Contoh Teks tebal"
       }
   }
})

var app = new Vue({ el: '#app' })
