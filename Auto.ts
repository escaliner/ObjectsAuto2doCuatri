export class Auto {
    marca: string;
    modelo: string;
    anio: number;
    velocidad: number
    


    constructor (marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.velocidad = 0; //como en el televisor del caso de la clase, en este caso declaro la velocidad "a la que va el auto " en 0;
    
    }

  
    acelerar(acelerando: number): void {
        this.velocidad += acelerando;
        console.log(`El auto ${this.marca} ${this.modelo} está acelerando. Velocidad actual: ${this.velocidad} km/h`);
    
    }

    frenar(frenando: number): void {
        if (this.velocidad - frenando >= 0) {
            this.velocidad = this.velocidad - frenando;
        } else {
            this.velocidad == 0;
                    }
        console.log(`El auto ${this.marca} ${this.modelo} está frenando. Velocidad actual: ${this.velocidad} km/h`);        
        if (this.velocidad === 0) {
            console.log(`El auto ${this.marca}, esta frenado.`)
        }
    }
}




