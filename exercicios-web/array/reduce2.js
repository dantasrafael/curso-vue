const alunos = [
    { nome: 'João' , nota: 7.3, bolsista: true  },
    { nome: 'Maria', nota: 8.2, bolsista: false  },
    { nome: 'Pedro', nota: 9.0, bolsista: true },
    { nome: 'Tiago', nota: 6.4, bolsista: false }
]

// Desafio 1 - todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2 - algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))