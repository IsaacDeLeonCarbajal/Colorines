class Celda {
    /**
     * Estado de la celda
     * -1 para celda vacía
     * 0 para el jugador 1
     * 1 para el jugador 2
     */
    status;
    pos;
    vista;

    constructor(pos, vista) {
        this.pos = pos;
        this.status = -1;
        this.vista = vista;
    }

    setStatus(status) {
        this.status = status;

        switch (this.status) {
            case -1:
                this.vista.style.backgroundColor = "red";
                break;
            case 0:
                this.vista.style.backgroundColor = Jugador.COLOR_JUGADORES[0];
                break;
            case 1:
                this.vista.style.backgroundColor = Jugador.COLOR_JUGADORES[1];
                break;
            default:
                throw "El status de la celda debe ser -1, 0 o 1";
        }
    }

}
