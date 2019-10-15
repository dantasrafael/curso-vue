const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)        
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre o paragdimas: funcional e OO

const pessoaFalar = pessoa.falar.bind(pessoa)
pessoaFalar()