new Vue({
    el: '#app',

    data: {
        number: null,
        max: 12,
        results: [],
    },

    methods: {
        times: function() {
            this.results = [];

            if (! this.number || this.number === "0") {
                return;
            }

            for (var i = 1; i <= this.max; i++) {
                this.results.push(
                    this.number + ' &times; ' + i + ' = ' + this.number * i
                );
            }
        },
    },
});