class Tablero {
    alto; //Cantidad de celdas a lo alto
    ancho; //Cantidad de celdas a lo ancho
    celdas; //Arreglo bidimensional de las celdas

    constructor(divTablero, alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
        this.celdas = [];

        for (let x = 0; x < ancho; x++) {
            let celdasAux = []; //Arreglo auxiliar para guardar las celdas

            for (let y = 0; y < alto; y++) {
                //Inicializar la vista de cada celda
                let vista = document.createElement('div');
                vista.style.position = "absolute";
                vista.style.width = (100 / ancho) + "%";
                vista.style.height = (100 / alto) + "%";
                vista.style.top = ((100 / alto) * y) + "%";
                vista.style.left = ((100 / ancho) * x) + "%";
                vista.style.borderColor = "white";
                vista.style.borderStyle = "solid";
                vista.style.borderWidth = "2px";

                divTablero.insertAdjacentElement("beforeend", vista); //Insertar la vista en el tablero

                celdasAux.push(new Celda(new Posicion(x, y), vista)); //Crear la celda
            }

            this.celdas.push(celdasAux); //Guardar el arreglo auxiliar
        }
    }

    /**
     * Obtener una celda del tablero.
     * 
     * @param {Posicion} pos Poisición de la celda deseada
     * @returns La Celda en la posición indicada
     */
    getCelda(pos) {
        return this.celdas[pos.x][pos.y];
    }

    /**
     * Contar los puntos obtenidos por los jugadores.
     * 
     * Se recorren todas las celdas y en baso al status de cada una se suman puntos a los jugadores.
     * 
     * @returns Arreglo con la puntuación de los jugadores 1 y 2
     */
    contarPuntos() {
        let puntos = [0, 0]; //Inicializar el arreglo para contar los puntos

        //Recorrer todas las celdas
        for (let x = 0; x < this.ancho; x++) {
            for (let y = 0; y < this.alto; y++) {
                let celda = this.getCelda(new Posicion(x, y)); //Obtener la celda

                if (celda.status != -1) { //Si la celda no está vacía
                    puntos[celda.status] ++; //Agregar un punto al jugador que ocupa esa celda
                }
            }
        }

        return puntos; //Devolver el arreglo con la información de los puntos
    }

}
