var app = new Vue({
  el: '#app',
  data: {
      nama:'',
      tampil:false
  },
  watch: {
      nama: 'tunggu'
  
  },
  methods: {
      tunggu(){
          if (this.nama.endsWith(".")){
              this.tampil = true
          }    
      }
  },
})

