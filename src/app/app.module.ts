import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from 'angular-icon';

import { routing } from './app.routing';

import { HomedataService } from './homedata.service';
import { LogindataService } from "./logindata.service";
import { RegisterdataService } from "./registerdata.service";
import { CartdataService } from "./cartdata.service";
import {  UserdataService} from "./userdata.service";
import { EmaildataService } from "./emaildata.service";
import { BilldataService } from "./billdata.service";
import { CombodataService } from "./combodata.service";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ComboComponent } from './combo/combo.component';
import { CartComponent } from './cart/cart.component';
import {OrderComponent} from './order/order.component';
import {NewheaderComponent} from './newheader/newheader.component';
import { ForgetComponent } from './forget/forget.component';
import { ProdoneComponent } from './prodone/prodone.component';
import { PaymentComponent } from './payment/payment.component';
import { BillComponent } from './bill/bill.component';
import {VisitordetailprodComponent} from './visitordetailprod/visitordetailprod.component';
import { VisitorhomeComponent } from './visitorhome/visitorhome.component';
import { PriceoneComponent } from './priceone/priceone.component';
import { VisitorpriceoneComponent } from './visitorpriceone/visitorpriceone.component';
import { VisitorprobrandComponent } from './visitorprobrand/visitorprobrand.component';




import {MatFormFieldModule, MatInputModule, MatButtonModule,
  MatTableModule,
MatPaginatorModule
} from '@angular/material';
import { ProbrandComponent } from './probrand/probrand.component';
import { MyorderComponent } from './myorder/myorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutusComponent,
    FooterComponent,
    ContactusComponent,
    DetailproductComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ComboComponent,
    CartComponent,
    ProdoneComponent,
    OrderComponent,
    NewheaderComponent,
    PaymentComponent,
    ForgetComponent,
    BillComponent,
    VisitordetailprodComponent,
    VisitorhomeComponent,
    PriceoneComponent,
    ProbrandComponent,
    MyorderComponent,
    VisitorpriceoneComponent,
    VisitorprobrandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
     MatTableModule,
    MatPaginatorModule,
    IconModule
  ],
  providers: [HomedataService,CombodataService,LogindataService,RegisterdataService,CartdataService,BilldataService,EmaildataService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
