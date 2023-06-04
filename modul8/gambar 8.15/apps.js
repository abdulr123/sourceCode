var app = new Vue({
     el: '#app',
     directives: {
       grafik(el, binding, vnode) {
          var ctx = el.getContext("2d")
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0,100)
          ctx.lineTo(75,50)
          ctx.closePath();
          ctx.fillStyle = 'orange'
          ctx.fill();
       }
     }
})
