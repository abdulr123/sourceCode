var app = new Vue({
    el: '#app',
    data: {
        hasil:'anda belum menekan tombol pilihan'
    },
    methods: {
      pesan(nilai) {
        return this.hasil='anda menekan tombol '+nilai
      }
    }
  });
