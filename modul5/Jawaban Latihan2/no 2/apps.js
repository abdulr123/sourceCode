var app = new Vue({
    el: '#app',
    data: {
        lahir:''//petik tunggal, buka dan tutup
    },
    computed: {
        tanggal(){
            return new Date(this.lahir).getDate();
        },
        bulan(){
            var bulan = new Date(this.lahir).getMonth()+1;
            switch (bulan){
                case 1:
                    bulan="januari";
                    break;
                case 2:
                    bulan="februari";
                    break;
                case 3:
                    bulan="maret";
                    break;
                case 4:
                    bulan="april";
                    break;
                case 5:
                    bulan="mei";
                    break;
                case 6:
                    bulan="juni";
                    break;
                case 7:
                    bulan="juli";
                    break;
                case 8:
                    bulan="agustus";
                    break;
                case 9:
                    bulan="september";
                    break;
                case 10:
                    bulan="oktober";
                    break;
                case 11:
                    bulan="nopember";
                    break;
                case 12:
                    bulan="desember";
                    break;
                default:
                    bulan="";
            }
            return bulan
        },
        tahun(){
            return new Date(this.lahir).getFullYear()
        }
    },
})
