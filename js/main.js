const { createApp } = Vue;
createApp({
    data() {
        return {
            mails: [],
        }
    },
    methods: {
        getMailList(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail?" + Math.random())
            .then((resp) => {
                this.mails.push(resp.data.response)
            });
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getMailList();
        }
    }
}).mount('#app');