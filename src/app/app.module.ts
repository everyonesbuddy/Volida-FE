import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { Info2Component } from './components/info2/info2.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { StripeCancelComponent } from './components/stripe-cancel/stripe-cancel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { SafeurlPipe } from './customepipe/safeurl.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FaqComponent } from './components/faq/faq.component';
import { ReferAFriendComponent } from './components/refer-a-friend/refer-a-friend.component';
import { UrlService } from './services/url.service';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { VolidaFilmsComponent } from './components/volida-films/volida-films.component';
import { PpvsComponent } from './components/ppvs/ppvs.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { NewComponent } from './components/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    InfoComponent,
    Info2Component,
    AboutComponent,
    LoginComponent,
    SignUpComponent,
    StripeSuccessComponent,
    StripeCancelComponent,
    DashboardComponent,
    EventDetailsComponent,
    SafeurlPipe,
    FaqComponent,
    ReferAFriendComponent,
    NewsPageComponent,
    VolidaFilmsComponent,
    PpvsComponent,
    FilmPageComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MarkdownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    UrlService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
