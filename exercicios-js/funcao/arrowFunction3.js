
console.log('------ Com function normal ------')
let comparaComThis = function (params) {
    console.log(this === params)    
}
comparaComThis(global)
comparaComThis(module.exports)
comparaComThis(this)

console.log('------ Com function normal com bind ------')
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
comparaComThis(module.exports)
comparaComThis(this)

console.log('------ Com arrow function ------')
let comparaComThisArrow = params => console.log(this === params)
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

console.log('------ Com arrow function com bind (não muda o this) ------')
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
