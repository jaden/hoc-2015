window.vue = new Vue({
    el: '#app',

    data: {
        synth: null,
        message: 'Hello there. I will take over the world.',
        voices: [],
        voice_id: 0,
    },

    ready: function () {
        if (window.speechSynthesis === undefined) {
            this.message = "Sorry, your browser doesn't support speech";
        }

        this.synth = window.speechSynthesis;

        this.synth.onvoiceschanged = this.updateVoices;
    },

    methods: {
        speak: function() {
            var phrase = new SpeechSynthesisUtterance(this.message);

            phrase.voice = this.voices[this.voice_id];

            this.synth.speak(phrase);
        },

        updateVoices: function(event) {
            this.voices = this.synth.getVoices();
        }
    },
});