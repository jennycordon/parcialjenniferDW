export class Factura{
    constructor(
        public cliente_id: string,
        public creado: Date,
        public empleado_id: number,
        public estado: number,
        public id: number
    ){

    }
}
