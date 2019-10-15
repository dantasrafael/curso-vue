// let e const
{
    var a = 2
    let b = 3
    const c = 4
    console.log(b)
    console.log(c)
}

console.log(a)
//console.log(b) erro, pois B esta somente no escopo de bloco
//console.log(c) erro, pois C esta somente no escopo de bloco

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)
