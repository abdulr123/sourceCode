Vue.component('artikel-berita', { 
    props: ['judul', 'tanggal','penulis'],
    template:
   `
   <div class="berita">
        <h3> {{ judul }} </h3>
        <i> {{ tanggal }} </i>
        <p><slot></slot></p>
        <b> - {{ penulis }} - </b>
   </div>
   `,
})

var app = new Vue({ el: '#app' })
