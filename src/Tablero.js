class Tablero {
    alto;
    ancho;
    celdas;

    constructor(divTablero, alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
        this.celdas = [];

        for (let x = 0; x < ancho; x++) {
            let celdasAux = [];

            for (let y = 0; y < alto; y++) {
                let vista = document.createElement('div');
                vista.style.position = "absolute";
                vista.style.width = (100 / ancho) + "%";
                vista.style.height = (100 / alto) + "%";
                vista.style.top = ((100 / alto) * y) + "%";
                vista.style.left = ((100 / ancho) * x) + "%";
                vista.style.backgroundColor = "red";
                vista.style.borderColor = "white";
                vista.style.borderStyle = "solid";
                vista.style.borderWidth = "2px";

                divTablero.insertAdjacentElement("beforeend", vista);

                celdasAux.push(new Celda(new Posicion(x, y), vista));
            }

            this.celdas.push(celdasAux);
        }
    }

    getCelda(pos) {
        return this.celdas[pos.x][pos.y];
    }

    contarPuntos() {
        let puntos = [0, 0];

        for (let x = 0; x < this.ancho; x++) {
            for (let y = 0; y < this.alto; y++) {
                let celda = this.getCelda(new Posicion(x, y));

                if (celda.status != -1) {
                    puntos[celda.status] ++;
                }
            }
        }

        return puntos;
    }

}
