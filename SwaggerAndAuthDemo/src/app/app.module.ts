import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { LoginComponent } from './login/login.component';
import { ShopsComponent } from './shops/shops.component';
import { ApiInterceptor } from './api/ApiInterceptor';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule.forRoot({rootUrl: 'http://localhost:5001'}),
  ],
  providers: [ ApiInterceptor,
    API_INTERCEPTOR_PROVIDER],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
