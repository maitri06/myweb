export class procart {
    public constructor(
        public pk_pro_id: number,
        public pro_name: string,
        public pro_price: number,
        public pro_color: string,
        public pro_img1: string,
        public pro_img2: string,
        public pro_img3: string,
        public pro_desci: string,
        public pro_brand:string,
        public pro_gen:string,
        public fk_cat_id: number,
        public pk_cart_id:number,
        public cart_qty:number,
        public cart_amount:number,
        public fk_email_id:string,
        public fk_pro_id:number
    ) { }
}