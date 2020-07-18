import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthHttpInterceptor } from './auth/auth-http-interceptor';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), AuthModule, AppRoutingModule, HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
