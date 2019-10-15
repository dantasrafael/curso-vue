const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]
console.log(carrinho)

// Retornar uma array apenas com os preços
let resultado = carrinho.map((item) => JSON.parse(item).preco)
console.log(resultado)