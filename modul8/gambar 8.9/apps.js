Vue.component('coba-slot', { 
    template:
   `
   <div>
        ini adalah isi dari template: <b><slot></slot></b>
   </div>
   `,
})

var app = new Vue({ el: '#app' })
