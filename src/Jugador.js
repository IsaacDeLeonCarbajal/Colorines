class Jugador {
    static COLOR_JUGADORES = ["rgb(0, 70, 255)", "rgb(23, 180, 0)"];
    static COLOR_ESTELAS = ["rgb(78, 148, 252)", "rgb(0, 255, 128)"];

    pos;
    movX = 0;
    movY = 0;
    tablero;

    /**
     * Número del jugador.
     * 0 para el jugador 1
     * 1 para el jugador 2
     */
    numJugador;

    constructor(numJugador, pos, tablero) {
        this.numJugador = numJugador;
        this.tablero = tablero;
        this.pos = pos;

        this.init();
    }

    init() {
        let teclas;

        switch (this.numJugador) {
            case 0:
                teclas = ["w", "s", "a", "d"];
                this.movX = 1;
                break;
            case 1:
                teclas = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                this.movX = -1;
                break;
            default:
                throw "El número del jugador debe ser 0 o 1";
        }

        document.addEventListener("keydown", (e) => {
            if (teclas.includes(e.key)) {
                this.movX = 0;
                this.movY = 0;
            }

            switch (e.key) {
                case teclas[0]: //Arriba
                    this.movY = -1;
                    break;
                case teclas[1]: //Abajo
                    this.movY = 1;
                    break;
                case teclas[2]: //Izquierda
                    this.movX = -1;
                    break;
                case teclas[3]: //Derecha
                    this.movX = 1;
                    break;
            }
        });
    }

    mover() {
        this.tablero.getCelda(this.pos).vista.style.backgroundColor = Jugador.COLOR_ESTELAS[this.numJugador];

        this.pos.x += this.movX;
        this.pos.y += this.movY;

        if (this.pos.x >= this.tablero.ancho) {
            this.pos.x = this.tablero.ancho - 1;
        } else if (this.pos.x <= 0) {
            this.pos.x = 0;
        }

        if (this.pos.y >= this.tablero.alto) {
            this.pos.y = this.tablero.alto - 1;
        } else if (this.pos.y <= 0) {
            this.pos.y = 0;
        }

        this.tablero.getCelda(this.pos).setStatus(this.numJugador);
    }

}
