var app = new Vue({
     el: '#app',
     data: {
          x: 30,
          y: 30,
          lebar: 100,
          tinggi: 50,
          warna: 'red'
     },
     directives: {
       grafik(el, binding, vnode) {
         var ctx = el.getContext("2d")
         var vc = vnode.context
         ctx.fillStyle = vc.warna //memberi warna
         ctx.fillRect(vc.x, vc.y,vc.lebar, vc.tinggi)
       }
     }
})
