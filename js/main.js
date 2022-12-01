const { createApp } = Vue;
createApp({
    data() {
        return {
            mails: [],
        }
    },
    methods: {
        getMailList(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail?")
            .then((resp) => {
                this.mails.push(resp.data.response)
            });
        }, get10Mails(){
            for (let i = 0; i < 9; i++) {
                this.getMailList();
            }
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail?")
            .then((resp) => {
                this.mails.push(resp.data.response)
            });
        }, reset() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail?")
            .then(() => {
                this.mails = []
            });
        },
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getMailList();
        }
    }
}).mount('#app');