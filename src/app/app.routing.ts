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

const router:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'detailproduct/:p_id',component:DetailproductComponent},
    {path:'prodone/:p_name',component:ProdoneComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'combo',component:ComboComponent},
    {path:'cart',component:CartComponent}
];

export const routing=RouterModule.forRoot(router);