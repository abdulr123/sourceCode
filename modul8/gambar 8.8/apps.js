Vue.component('cek-password', { 
    template:
   `
   <div>
        <form>
        <table>
            <tr>
                <td>Ketikkan password</td>
                <td>:</td>
                <td>
                    <input 
                        type="password" 
                        name="password1" 
                        v-model="pass1">
                </td>
                <td v-html="hasil1"></td>
            </tr>
            <tr>
                <td>Ketik ulang password</td>
                <td>:</td>
                <td>
                    <input 
                        type="password" 
                        name="password2" 
                        v-model="pass2"> 
                </td>
                <td v-html="hasil2"></td>
            </tr>
        </table>          
        </form>
    </div>    
   `,
    data(){
       return{
           pass1:'',
           pass2:'',
           hasil1:'',
           hasil2:''
       }
    },
    watch: {
    pass2:'pantau'
    },
    methods: {
        pantau(){
            if(this.pass2 == this.pass1){
                this.hasil1 = "&#10004;" //centang
                this.hasil2 = "&#10004;" //centang
            }else {
                this.hasil1 = "" //2x petik ganda
                this.hasil2 = "&#10006;" //silang
            }
        }
    },    
})

var app = new Vue({ el: '#app' })
