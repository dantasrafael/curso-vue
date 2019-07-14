<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label='Nome:'>
				<b-form-input type="text" size="lg"
					v-model="usuario.nome" placeholder="Informe o Nome" />
			</b-form-group>
			<b-form-group label='E-mail:'>
				<b-form-input type="text" size="lg"
					v-model="usuario.email" placeholder="Informe o E-mail" />
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(u, i) in usuarios" :key="i">
				<strong>Nome: </strong> {{ u.nome }}<br>
				<strong>E-mail: </strong> {{ u.email }}<br>
				<strong>ID: </strong> {{ i }}<br>
				<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2"
					@click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar() {
			this.$http.post('usuarios.json', this.usuario)
				.then(res => {
					this.usuario.nome = ''
					this.usuario.email = ''
				})			
		},
		obterUsuarios() {
			this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data
			})
			//this.$http.defaults.headers.common['Authorization'] = 'abc123'
		}
	}
	/* created() {
		this.$http.post('usuarios.json', {
			nome: 'Maria',
			email: 'maria@gmail.com'
		}).then(res => console.log(res))
	} */
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
