import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
 import {   HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

// services
import { AuthenticationService } from './shared/services/authentication.service';
import {  UserService } from './shared/services/user.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';


import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';


import {
  AuthGuard,
  JwtInterceptor,
  ErrorInterceptor } from './shared';

import {
  MenuComponent,
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective } from './core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    LoadingBarRouterModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot()

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
