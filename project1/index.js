new Vue({
    el: '#app',
    data: {
        tempnamn: " ",
        Namn: " ",
        bonus: 5,
        strpoints: 0,
        Intpoints: 0,
        Dexpoints: 0,
        strstatus: 0,
        Intstatus: 0,
        Dexstatus: 0,

    },
    methods: {
        angenamn: function(){
            this.tempnamn = event.target.value;
        },
        create: function () {
            this.strstatus = 0;
            this.Intstatus = 0;
            this.Dexstatus = 0;

            this.Namn = this.tempnamn;
            this.strstatus += Math.floor(Math.random() * 18) + 1;
            this.Intstatus += Math.floor(Math.random() * 18) + 1;
            this.Dexstatus += Math.floor(Math.random() * 18) + 1;

            this.Dexstatus += this.Dexpoints;
            this.Intstatus += this.Intpoints;
            this.strstatus += this.strpoints;


        },
        strpointsclick: function () {

            if (0 < this.bonus) {
                this.bonus--;
                this.strpoints++;
            } else if (this.bonus <= 0) {
                this.bonus = "You have 0 points ";
            }
        },
        intpointsclick: function () {

            if (0 < this.bonus) {
                this.bonus--;
                this.Intpoints++;
            } else if (this.bonus <= 0) {
                this.bonus = "You have 0 points ";
            }
        }, 
        dexpointsclick: function () {

            if (0 < this.bonus) {
                this.bonus--;
                this.Dexpoints++;
            } else if (this.bonus <= 0) {
                this.bonus = "You have 0 points ";
            }
        }
    }
});