// Função em JS é Fisrt-Class Object (Citizens)
// Higher-Order function

// Forma literal
function fun1() {}

// armazenar numa variavel
const fun2 = function () {}

// armazenar num array
const array = [function (a,b) {return a+b}, fun1, fun2]
console.log(array[0](2,3))

// armazenar num atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar uma funcao como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Execuntado...') })

// Uma função retornando outra função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)        
    }    
}
soma(3,3)(4)
const seisMais = soma(3,3)
seisMais(4)