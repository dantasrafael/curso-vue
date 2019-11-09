const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 1.99, fragil: false},
]

console.log(produtos)
console.log(produtos.filter(function(p) {
    return p.preco > 2400
}))
console.log(produtos.filter(p => p.fragil))

const filtrarFrageis = p => p.fragil === true
const filtrarMenorQueDez = p => p.preco < 10.0
console.log(produtos.filter(filtrarFrageis).filter(filtrarMenorQueDez))
