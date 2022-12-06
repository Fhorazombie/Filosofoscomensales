export class Tenedor{
    name = "";
    colaArray = [];
    ocupado = "";
    constructor(nombre){
        this.name = nombre
    }
    cola(name){
        this.colaArray.push(name);
    }
    libre(){
        return this.colaArray[0];
    }
    tomar(name){
        let colaPrimero = this.colaArray[0];
        if(name == colaPrimero){
            this.ocupado = this.colaArray[0];
        }
    }
    liberar(name){
        const index = this.colaArray.indexOf(name);
        if(index >= 0){
            this.colaArray.splice(index, 1);
        }
    }
}