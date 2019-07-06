<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário é <strong>{{ idade }}</strong></p>
        <p>Sobrenome do usuário é <strong>{{ sobrenome }}</strong></p>
        <button @click="reinicializarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            required: true
            //caso nao seja requerido e tenha um valor default. exemplo => default: 'Anônimo' ou default: {return Array(10).fill(0).join(',')}
        },
        reiniciarFn: Function,
        idade: Number,
        sobrenome: String
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reinicializarNome() {
            //Eventos personalizados do filho para o pai
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created() {
        barramento.quandoIdadeMudar((sobrenome) => {
            this.sobrenome = sobrenome
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
