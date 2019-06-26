new Vue({
    el: '#desafio',
    data: {
        nome: 'Rafael Dantas',
        idade: 34,
        imagem: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg'
    },
    methods: {
        numeroRandomico: function() {
            return Math.random()
        },
        idadeVezes3: function() {
            return this.idade * 3
        }
    }
}) 
