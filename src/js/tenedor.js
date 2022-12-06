export class Tenedor{
    name = "";
    listaDeEspera = [];
    ocupado = "";
    constructor(nombre){
        this.name = nombre
    }
    cola(name){
        this.listaDeEspera.push(name);
    }
    libre(){
        return this.listaDeEspera[0];
    }
    tomar(name){
        let colaPrimero = this.listaDeEspera[0];
        if(name == colaPrimero){
            this.ocupado = this.listaDeEspera[0];
        }
    }
    liberar(name){
        const index = this.listaDeEspera.indexOf(name);
        if(index >= 0){
            this.listaDeEspera.splice(index, 1);
        }
    }
}