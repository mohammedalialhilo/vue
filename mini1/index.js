new Vue({
    el: '#app',
    data: {
        title: "Första uppgiften",
        message: "",
        click: 0,
        link: "https://www.google.com/",
        linky: "",
        linkn: "",
        slumptalsnr: "",
        imgcount: 0,
        imgsrc1: "Images/bcg-2.jpg"

    },
    methods: {
        clickit: function(number) {
            this.click += number;
        },
        slumptal: function() {


            return Math.floor(Math.random() * 100) + 1;


        },
        uptext: function() {
            this.title = event.target.value;
        },
        uplink: function() {
            this.linky = event.target.value;
            this.linkn = event.target.value;
        },
        slumptals() {
            var temparr = new Array();
            let nr = 0;
            for (i = 0; i < 10; i++) {
                nr = Math.floor(Math.random() * 100) + 1;
                temparr.push(nr + " ");
            }
            this.slumptalsnr = "  " + temparr + "  ";

        },
        imgchange: function() {
            if (this.imgcount === 0) {

                this.imgsrc1 = "Images/bcg-1.jpg";

                this.imgcount++;

            } else if (this.imgcount === 1) {

                this.imgsrc1 = "Images/bcg-2.jpg";
                this.imgcount -= 1;
            }

        }

    }
})