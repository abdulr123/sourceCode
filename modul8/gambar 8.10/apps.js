Vue.component('jual-beli', { 
    props: ['merk', 'harga'],
    template:
   `
   <div>
        <p><slot></slot></p>
        <ul>
            <li> {{ merk }} </li>
            <li> {{ harga }} </li>
        </ul>
   </div>
   `,
})

var app = new Vue({ el: '#app' })
