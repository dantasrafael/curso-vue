const alunos = [
    { nome: 'João' , nota: 7.3, bolsista: true  },
    { nome: 'Maria', nota: 8.2, bolsista: true  },
    { nome: 'Pedro', nota: 9.0, bolsista: false },
    { nome: 'Tiago', nota: 6.4, bolsista: false }
]

// normal
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)

// com valor inicial de 10
const resultado2 = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)
console.log(resultado2)
