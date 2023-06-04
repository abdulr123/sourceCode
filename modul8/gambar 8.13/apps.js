var app = new Vue({
     el: '#app',
     directives: {
       grafik(el, binding, vnode) {
         var ctx = el.getContext("2d");
         ctx.fillRect(10, 10, 50, 50); //titik awal x=10, y=10
         ctx.strokeRect (70, 10, 50,50); 
         ctx.clearRect (140, 10, 50,50); 
       }
     }
})
