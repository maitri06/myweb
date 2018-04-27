import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComboComponent } from './combo/combo.component';
import { CartComponent } from './cart/cart.component';
import { ProdoneComponent } from './prodone/prodone.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgetComponent } from './forget/forget.component';
import { BillComponent } from './bill/bill.component';
import {PriceoneComponent  } from './priceone/priceone.component';
import {ProbrandComponent  } from './probrand/probrand.component';
import {MyorderComponent  } from './myorder/myorder.component';
import { DetailcomboComponent } from './detailcombo/detailcombo.component';
import { DetailtproductComponent } from './detailtproduct/detailtproduct.component';

import { TrendComponent } from './trend/trend.component';

import { VisitorhomeComponent } from './visitorhome/visitorhome.component';
import { VisitordetailprodComponent } from './visitordetailprod/visitordetailprod.component';
import { VisitorpriceoneComponent } from './visitorpriceone/visitorpriceone.component';
import { VisitorprobrandComponent } from './visitorprobrand/visitorprobrand.component';

const router:Routes=[
  { path: '', redirectTo: '/visitorhome', pathMatch: 'full' },
  { path: 'visitorhome', component: VisitorhomeComponent },
  { path: 'visitordetailprod/:p_id', component: VisitordetailprodComponent },
  {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'detailproduct/:p_id',component:DetailproductComponent},
    {path:'order/:c_id',component:OrderComponent},
    {path:'prodone/:p_name',component:ProdoneComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'combo',component:ComboComponent},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent},
    {path:'payment',component:PaymentComponent},
    {path:'forget',component:ForgetComponent},
    {path:'bill',component:BillComponent},
    {path:'priceone/:p_price',component:PriceoneComponent},
    {path:'probrand/:p_brand',component:ProbrandComponent},
    {path:'myorder',component:MyorderComponent},
    {path:'visitorpriceone',component:VisitorpriceoneComponent},
    {path:'visitorprobrand',component:VisitorprobrandComponent},
    {path:'detailcombo/:p_id',component:DetailcomboComponent},
    {path:'trend',component:TrendComponent},
    {path:'detailtproduct/:t_id',component:DetailproductComponent}

];

export const routing= RouterModule.forRoot(router);
