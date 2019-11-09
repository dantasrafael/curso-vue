Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i< this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]
console.log(carrinho)

// Retornar uma array apenas com os preços
let resultado = carrinho.map2((item) => JSON.parse(item).preco)
console.log(resultado)