<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário é <strong>{{ idade }}</strong></p>
        <p>Sobrenome do usuário é <strong>{{ sobrenome }}</strong></p>
        <button @click="alterarIdade">Alterar idade</button>
        <button @click="alterarSobrenome">Alterar sobrenome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        idade: Number,
        sobrenome: String
    },
    methods: {
        alterarIdade() {
            this.$emit('idadeMudou', 33)
        },
        alterarSobrenome() {
            this.sobrenome = 'Costa'
            barramento.alterarSobrenome(this.sobrenome)
        }        
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
