export class bill{
  public constructor(
      public pk_bill_id:number,
      public bill_type:string,
      public bill_amount:number,
      public bill_date:string,
      public fk_email_id:string,
      public fk_cart_id:number

  ){}
}
