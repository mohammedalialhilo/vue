new Vue({
    el: '#app',
    data: {
        greet: "Hello there todays number is",
        click: 0,
        x: 0,
        y: 0,
        message: ""
    },
    methods: {
        todaysNumber: function() {
            return Math.floor(Math.random() * 10) + 1;
        },
        increaselick: function(number) {
            this.click += number;
        },
        reppos: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        uptext: function() {
            this.message = event.target.value;
        }
    }
});