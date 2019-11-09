function Pessoa() {
    this.idade = 0
    
    // Com problema
    /* setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000) */

    // Solução 1 (bind)
    /* setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) */

    // Solução 2 (self)
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)

}

new Pessoa