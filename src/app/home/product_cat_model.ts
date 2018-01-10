export class product_cat {
    public constructor(public pro_id: number,
        public name: string,
        public price: number,
        public color: string,
        public img1: string,
        public img2: string,
        public img3: string,
        public desci: string,
        public fk_cat_id: number,
        public cat_id: number,
        public cat_name: string
    ) { }
}