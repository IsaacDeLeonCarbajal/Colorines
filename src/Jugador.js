class Jugador {
    static COLOR_JUGADORES = ["rgb(0, 70, 255)", "rgb(23, 180, 0)"]; //Color de la posición actual de los jugadores
    static COLOR_ESTELAS = ["rgb(78, 148, 252)", "rgb(0, 255, 128)"]; //Color de las celdas ocupadas por los jugadores

    pos; //Posición del jugador
    movX = 0; //Dirección del movimiento en x
    movY = 0; //Dirección del movimiento en y
    tablero; //Tablero por el cual se mueve el jugador

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

        this.init(); //Inicializar al jugador
    }

    /**
     * Inicializar jugador.
     * 
     * Se agrega un listener para el teclado, para que el jugador pueda cambiar de dirección.
     */
    init() {
        let teclas;

        switch (this.numJugador) {
            case 0: //Jugador 1
                teclas = ["w", "s", "a", "d"]; //Moverse con las letras
                this.movX = 1;
                break;
            case 1: //Jugador 2
                teclas = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; //Moverse con las flechas
                this.movX = -1;
                break;
            default:
                throw "El número del jugador debe ser 0 o 1";
        }

        document.addEventListener("keydown", (e) => {
            if (teclas.includes(e.key)) { //Si la tecla presionada corresponde al jugador
                //Reiniciar el movimiento
                this.movX = 0;
                this.movY = 0;

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
            }
        });
    }

    /**
     * Mover al jugador según la dirección en la que apunte.
     * 
     * Se actualiza el estado de la celda por la que acaba de pasar y la que está ocupando.
     */
    mover() {
        this.tablero.getCelda(this.pos).vista.style.backgroundColor = Jugador.COLOR_ESTELAS[this.numJugador]; //Cambiar el color de la celda ocupada

        //Actualizar la posición del jugador
        this.pos.x += this.movX;
        this.pos.y += this.movY;

        //Evitar que se salga del tablero en el eje x
        if (this.pos.x >= this.tablero.ancho) {
            this.pos.x = this.tablero.ancho - 1;
        } else if (this.pos.x <= 0) {
            this.pos.x = 0;
        }

        //Evitar que se salga del tablero en el eje y
        if (this.pos.y >= this.tablero.alto) {
            this.pos.y = this.tablero.alto - 1;
        } else if (this.pos.y <= 0) {
            this.pos.y = 0;
        }

        this.tablero.getCelda(this.pos).setStatus(this.numJugador); //Actualizar el status de la celda
    }

}
