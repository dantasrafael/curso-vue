new Vue({
	el: '#app',
	data: {
		visivel: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		produtos: [
			{id:101, nome:"Café"},
			{id:202, nome:"Leite"},
			{id:303, nome:"Açucar"},
			{id:404, nome:"Feijão"},
			{id:505, nome:"Arroz"},
			{id:606, nome:"Pão"},
		]
	}
});
