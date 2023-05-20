var app = new Vue({
    el: '#app',
    data: {
        bil1:2,
        bil2:3,
		bil3:3,
    },
    computed: {
        hasil() {
            return parseInt(this.bil1)+parseInt(this.bil2)+parseInt(this.bil3)
        }
    }
})
