const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (const i in notas) {
    if (notas[i] < 7.0) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

let notasAltas = []
notas.forEach(item => {
    if (item >= 7.0) {
        notasAltas.push(item)
    }
})
console.log(notasAltas)

// Com callback
notasBaixas = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas)

notasAltas = notas.filter(nota => nota >= 7)
console.log(notasAltas)

const notaMaiorIgualASete = nota => nota >= 7
notasAltas = notas.filter(notaMaiorIgualASete)
console.log(notasAltas)