var app = new Vue({
  el: '#app',
  data: {
      hasil:0
  },
  methods: {
    decrement(){
      return this.hasil = this.hasil - 1
    },
    increment(){
      return this.hasil = this.hasil + 1
    },
  },  
});
