<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpfAluno | cpf | inverter }}</p>
		<input type="text" :value="cpfAluno | cpf | inverter" />
		<hr>
		<Frutas />
		<hr>
        <ul>
            <li v-for="f in frutas" :key="f">{{ f }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" />		
	</div>
</template>

<script>
import usuarioMixin from './usuarioMixin'
import frutasMixin from './frutasMixin'
import Frutas from './Frutas.vue'

export default {
	components: {
		Frutas
	},
	mixins: [frutasMixin, usuarioMixin],
	filters: {
		cpf(valor) {
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpfAluno: '60070080090',
			frutas: ['abacate']
		}
	},
	created() {
		console.log('Created - App.vue')		
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

input {
	font-size: 1.5rem;
}
</style>
