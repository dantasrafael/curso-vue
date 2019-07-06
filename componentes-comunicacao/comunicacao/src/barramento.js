import Vue from 'vue'

export default new Vue({
    methods: {
        alterarSobrenome(sobrenome) {
            this.$emit('sobrenomeMudou', sobrenome)
        },
        quandoIdadeMudar(callback) {
            this.$on('sobrenomeMudou', callback)
        }
    }
})