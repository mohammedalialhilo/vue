new Vue({
    el: '#app',
    data: {

        Namn: " ",
        bonus: 5,
        strpoints: 0,
        intpoints: 0,
        dexpoints: 0,
        strstatus: 0,
        Intstatus: 0,
        Dexstatus: 0,
        type: " ",
        yes: false,
        warr: false,
        rog: false,
        mage: false,
        extra: false,
        reset: false
    },
    methods: {

        create() {
            this.Namn = event.target.value;
            this.type = " ";
            this.strstatus = 0;
            this.Intstatus = 0;
            this.Dexstatus = 0;

            this.strstatus += Math.floor(Math.random() * 18) + 1;
            this.Intstatus += Math.floor(Math.random() * 18) + 1;
            this.Dexstatus += Math.floor(Math.random() * 18) + 1;

            this.type = "";
            if (12 <= this.strstatus) {
                this.type += "warrior" + " ";
                this.warr = true;
            }
            if (12 <= this.Dexstatus) {
                this.type += "rogue" + " ";
                this.rog = true;
            }
            if (12 <= this.Intstatus) {
                this.type += "mage" + " ";
                this.mage = true;
            } else if (this.Intstatus < 12 && this.Dexstatus < 12 && this.strstatus < 12) {
                this.type += "anything with those stats";
            }

            this.yes = true;
            this.extra = true;
            this.reset = true;
        },
        resetpoints() {
            this.bonus = 5;
            this.strstatus = 0;
            this.strpoints = 0;
            this.Intstatus = 0;
            this.intpoints = 0;
            this.Dexstatus = 0;
            this.dexpoints = 0;
            this.warr = false;
            this.mage = false;
            this.rog = false;
            this.type = "";
            this.yes = false;
            this.extra = false;
            this.reset = false;


        },
        strpointsclick() {

            if (0 < this.bonus) {
                this.bonus--;
                this.strstatus++;
                this.strpoints++;

                this.type = "";
                if (12 <= this.strstatus) {
                    this.type += "warrior" + " ";
                    this.warr = true;
                }
                if (12 <= this.Dexstatus) {
                    this.type += "rogue" + " ";
                    this.rog = true;
                }
                if (12 <= this.Intstatus) {
                    this.type += "mage" + " ";
                    this.mage = true;
                } else if (this.Intstatus < 12 && this.Dexstatus < 12 && this.strstatus < 12) {
                    this.type += "anything with those stats";
                }
            } else if (this.bonus <= 0) {
                this.bonus = "you have 0 points ";
                this.reset = true;
            }
        },
        intpointsclick() {

            if (0 < this.bonus) {
                this.bonus--;
                this.Intstatus++;
                this.intpoints++;

                this.type = "";
                if (12 <= this.strstatus) {
                    this.type += "warrior" + " ";
                    this.warr = true;
                }
                if (12 <= this.Dexstatus) {
                    this.type += "rogue" + " ";
                    this.rog = true;
                }
                if (12 <= this.Intstatus) {
                    this.type += "mage" + " ";
                    this.mage = true;
                } else if (this.Intstatus < 12 && this.Dexstatus < 12 && this.strstatus < 12) {
                    this.type += "anything with those stats";
                }
            } else if (this.bonus <= 0) {
                this.bonus = "you have 0 points ";
                this.reset = true;
            }
        },
        dexpointsclick() {

            if (0 < this.bonus) {
                this.bonus--;
                this.Dexstatus++;
                this.dexpoints++;

                this.type = "";
                if (12 <= this.strstatus) {
                    this.type += "warrior" + " ";
                    this.warr = true;
                }
                if (12 <= this.Dexstatus) {
                    this.type += "rogue" + " ";
                    this.rog = true;
                }
                if (12 <= this.Intstatus) {
                    this.type += "mage" + " ";
                    this.mage = true;
                } else if (this.Intstatus < 12 && this.Dexstatus < 12 && this.strstatus < 12) {
                    this.type += "anything with those stats";
                }
            } else if (this.bonus <= 0) {
                this.bonus = "you have 0 points ";
                this.reset = true;
            }
        }
    }
});