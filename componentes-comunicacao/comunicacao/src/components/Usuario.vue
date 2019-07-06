<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <p>Sobrenome é <strong>{{ sobrenome }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" @nomeMudou="nome = $event" :reiniciarFn="reiniciarNome" :idade="idade" :sobrenome="sobrenome" />
            <app-usuario-editar :idade="idade" :sobrenome="sobrenome" @idadeMudou="idade = $event" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 21,
            sobrenome: 'Silva'
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
