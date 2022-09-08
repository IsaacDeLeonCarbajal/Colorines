class Celda {
    /**
     * Estado de la celda
     * -1 para celda vacía
     * 0 para el jugador 1
     * 1 para el jugador 2
     */
    status;
    pos; //Posición de la celda en el tablero
    vista; //Elemento HTML que representa a la celda

    constructor(pos, vista) {
        this.pos = pos;
        this.vista = vista;

        this.setStatus(-1); //Inicializar el estado como celda vacía
    }

    /**
     * Actualizar el estado de la celda.
     * Esto también cambia el color de la celda
     * 
     * El estado de be ser un número de -1, 0 y 1.
     * 
     * @param {number} status El nuevo estao de la celda.
     */
    setStatus(status) {
        this.status = status; //Actualizar el estado

        switch (this.status) {
            case -1: //Celda vacía
                this.vista.style.backgroundColor = "red";
                break;
            case 0: //Jugador 1
                this.vista.style.backgroundColor = Jugador.COLOR_JUGADORES[0];
                break;
            case 1: //Jugador 2
                this.vista.style.backgroundColor = Jugador.COLOR_JUGADORES[1];
                break;
            default:
                this.vista.style.backgroundColor = "black";
                throw "El status de la celda debe ser -1, 0 o 1";
        }
    }

}
