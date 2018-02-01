import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routing';

import { HomedataService } from './homedata.service';
import { LogindataService } from "./logindata.service";
import { RegisterdataService } from "./registerdata.service";
import { CartdataService } from "./cartdata.service";


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
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [HomedataService,LogindataService,RegisterdataService,CartdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
