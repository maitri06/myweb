export class cart{
    public constructor(
        public pk_cart_id:number,
        public cart_qty:number,
        public cart_amount:number,
        public fk_email_id:string,
        public fk_pro_id:number,
        public cart_amount1?:number
    ){}
}