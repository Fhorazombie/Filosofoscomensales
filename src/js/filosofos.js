export class Filosofo {
    nombre = "";
    tenedor1;
    tenedor2;
    constructor(nombre, tenedor1, tenedor2){
        this.nombre = nombre
        this.tenedor1 = tenedor1
        this.tenedor2 = tenedor2
        this.createHTML()
        console.log(`Hola ${this.nombre}, va a agarrar el tenedor ${this.tenedor1.name} y ${this.tenedor2.name}`)
        this.pensar();
    }

    createHTML(){
        const mesa = document.getElementById("mesa");
        let asiento = document.createElement("div");
        asiento.classList.add("asiento");

        
        let filosofos = document.createElement("div");
        filosofos.classList.add("filosofos");
        let imgfilosofo = document.createElement('img');
        imgfilosofo.src = `/src/img/${this.nombre}.jpg`;
        imgfilosofo.setAttribute("id", this.nombre+"_img");
        filosofos.appendChild(imgfilosofo);
        asiento.appendChild(filosofos);

        
        let sopas = document.createElement("div");
        sopas.classList.add("sopas");
        let imgsopa = document.createElement('img');
        imgsopa.src = `/src/img/spagety.png`;
        sopas.appendChild(imgsopa);
        asiento.appendChild(sopas);

        
        let tenedor = document.createElement("div");
        tenedor.classList.add("tenedor");
        let h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(this.tenedor1.name));
        tenedor.appendChild(h1);
        let imgtenedor = document.createElement('img');
        imgtenedor.src = `/src/img/fork.png`;
        tenedor.appendChild(imgtenedor);        
        tenedor.setAttribute("id", this.tenedor1.name);
        asiento.appendChild(tenedor);

        
        let tenedor2 = document.createElement("div");
        tenedor2.classList.add("tenedor");
        tenedor2.classList.add("volteado");
        let h12 = document.createElement('h1');
        h12.appendChild(document.createTextNode(this.tenedor2.name));
        tenedor2.appendChild(h12);
        let imgtenedor2 = document.createElement('img');
        imgtenedor2.src = `/src/img/fork.png`;
        tenedor2.appendChild(imgtenedor2);
        tenedor2.setAttribute("id", this.tenedor2.name+"izquierdo");
        asiento.appendChild(tenedor2);

        asiento.setAttribute("id", this.nombre);
        mesa.appendChild(asiento);
    }

    pensar(){
        console.log(`${this.nombre} esta pensando`)
        let filoInstance = this;
        setTimeout(function(){
            filoInstance.tieneHambre();
        },20000)
    }

    tieneHambre(){
            console.log(`Tiene hambre ${this.nombre}`)
            this.agregarCola()
            this.verificarTenedores()
    }

    agregarCola(){
        this.tenedor1.cola(this.nombre)
        this.tenedor2.cola(this.nombre)
    }
    

    verificarTenedores(){
        if(this.tenedor1.libre() == this.nombre){
            this.tenedor1.tomar(this.nombre)
            if(this.tenedor2.libre() == this.nombre){
                this.tenedor2.tomar(this.nombre)
            }
        }
        if(this.tenedor1.ocupado == this.nombre && this.tenedor2.ocupado == this.nombre){
            this.comer()
        }else{
            this.esperar();
        }
    }

    esperar(){
        this.liberarTenedores()
        console.log(`${this.nombre} esta esperando...`)
        let filoInstance = this;
        setTimeout(function(){
            filoInstance.agregarCola()
            filoInstance.verificarTenedores()
        },10000)
    }

    comer(){
        console.log(`${this.nombre} esta comiendo, chomp! chomp!`)
        const tenedor2 = document.getElementById(this.tenedor2.name);
        const tenedor2iz = document.getElementById(this.tenedor2.name+"izquierdo");
        tenedor2.style.display = "none";
        tenedor2iz.style.display = "block";

        const imgfilosofo = document.getElementById(this.nombre+"_img");
        imgfilosofo.src = `/src/img/${this.nombre}_eat.png`;
        let filoInstance = this;
        setTimeout(function(){
            console.log(`${filoInstance.nombre} termino de comer`)
            filoInstance.liberarTenedores();
            imgfilosofo.src = `/src/img/${filoInstance.nombre}.jpg`;
            tenedor2.style.display = "";
            tenedor2iz.style.display = "";
            filoInstance.pensar();
        },15000)
    }

    liberarTenedores(){
        this.tenedor1.liberar(this.nombre)
        this.tenedor2.liberar(this.nombre)
    }
}