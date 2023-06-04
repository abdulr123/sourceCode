Vue.component('teks-tebal', { 
    template:
   `
    <div>
        <b id='merah'> {{teks }} </b> <br>
        <b id='biru'> {{teks2 }} </b> <br>
        <b id='orange'> {{teks3 }} </b>
    </div>
   `,
   data(){
       return{
           teks: this.$parent.teks,
           teks2: this.$parent.teks2,
           teks3: this.$parent.teks3,
       }
   }
})

var app = new Vue({ 
    el: '#app',
    data: {
        teks: "Contoh teks tebal pertama",
        teks2: "Contoh teks tebal kedua",
        teks3: "contoh teks tebal ketiga"
    }
})
