export class Productofactura{
    constructor(
        public cantidad: number,
        public creado_por: string,
        public factura_id: number,
        public producto_id: string,
        public subtotal: number,
        public id: number
    ){

    }
}
