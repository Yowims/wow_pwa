new Vue({
    el: '#app',

    data: {
        linkToGithub: "https://github.com/Yowims/wow_pwa",
        linkToGithubMessage: "Lien vers le Github du projet",
        success: true,
        title: 'WOW CAVERN'
    },

    methods: {
        close: function(){
            this.success = false;
        },

        getToken: function() {
            
        },
        openGithub: function() {
            window.open(this.linkToGithub);
        }
    }
})