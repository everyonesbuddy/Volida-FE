import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { AuthGuard } from './guard/auth.guard';
import { FaqComponent } from './components/faq/faq.component';
import { ReferAFriendComponent } from './components/refer-a-friend/refer-a-friend.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { VolidaFilmsComponent } from './components/volida-films/volida-films.component';
import { PpvsComponent } from './components/ppvs/ppvs.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { NewComponent } from './components/new/new.component';
import { PaymentProcessedComponent } from './components/payment-processed/payment-processed.component';
import { FreeEventsComponent } from './components/free-events/free-events.component';
import { FreeEventsDetailsComponent } from './components/free-events-details/free-events-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'films',
    component: VolidaFilmsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'freeEvents',
    component: FreeEventsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'freeEventsDetailPage/:id',
    component: FreeEventsDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ppvs',
    component: PpvsComponent,
  },
  {
    path: 'news',
    component: NewComponent,
  },
  {
    path: 'processed',
    component: PaymentProcessedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'support',
    component: FaqComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'pricing',
    component: SubscriptionPageComponent,
  },
  {
    path: 'referAFriend',
    component: ReferAFriendComponent,
  },
  {
    path: 'stripe/success',
    component: StripeSuccessComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'newsPage/:id',
    component: NewsPageComponent,
  },
  {
    path: 'filmPage/:id',
    component: FilmPageComponent,
  },
  {
    path: 'detailPage/:id',
    component: EventDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
