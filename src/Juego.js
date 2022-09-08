class Juego {
    static FPS = 5; //Cantidad de cuadros por segundo

    tablero;
    jugadores;
    tiempo; //Tiempo de juego en milisegundos

    constructor(divTablero, alto, ancho) {
        this.tablero = new Tablero(divTablero, alto, ancho);
        this.tiempo = 6000;

        this.jugadores = [
            new Jugador(0, new Posicion(0, parseInt(alto / 2)), this.tablero),
            new Jugador(1, new Posicion(ancho - 1, parseInt(alto / 2)), this.tablero)
        ];
    }

    jugar() {
        let cantIteraciones = (this.tiempo / (1000 / Juego.FPS)); //Cantidad de iteraciones hasta que termine el juego
        let cont = 0; //Contador de iteraciones ocurridas

        let idIntervalo = setInterval(() => {
            for (let i = 0; i < this.jugadores.length; i++) {
                this.jugadores[i].mover();
            }

            cont++;

            if (cont >= cantIteraciones) {
                clearInterval(idIntervalo);

                this.terminarJuego();
            }
        }, 1000 / Juego.FPS);
    }

    terminarJuego() {
        let puntos = this.tablero.contarPuntos();

        document.getElementById("lbl-puntos-1").innerHTML = "Jugador 1: " + puntos[0];
        document.getElementById("lbl-puntos-2").innerHTML = "Jugador 2: " + puntos[1];

        document.getElementById("dlg-juego-terminado").showModal();
    }
}
