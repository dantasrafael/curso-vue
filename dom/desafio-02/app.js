new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        mostrarMensagem() {
            alert('Alerta do click')
        },
        pegarValor(event) {
            this.valor = event.target.value
        }
    }
})