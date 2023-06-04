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
       </tr>
   </table>          
   </form>
   <p>{{ hasil }}</p>
</div
   `,
   data(){
       return{
           pass1:'',
           pass2:'',
       }
   },
    computed: {
            hasil() {
            if (this.pass1 !='' && this.pass2 !=''){
                if (this.pass1 == this.pass2){
                    return "password benar"
                }else {
                    return "password salah"
                }
            }else {
                return "silakan isi password"
            }   
            }
        }
})

var app = new Vue({ el: '#app' })
