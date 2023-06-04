var app = new Vue({
     el: '#app',
     directives: {
       grafik(el, binding, vnode) {
          var ctx = el.getContext("2d")
          ctx.beginPath();
          ctx.arc(70,70,50,0,Math.PI*2);
          ctx.fillStyle = "royalblue"
          ctx.fill();
       }
     }
})
