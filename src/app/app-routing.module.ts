import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { RecentStreamDetailsComponent } from './components/recent-stream-details/recent-stream-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { AuthGuard } from './guard/auth.guard';
import { FaqComponent } from './components/faq/faq.component';
import { ReferAFriendComponent } from './components/refer-a-friend/refer-a-friend.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { VolidaFilmsComponent } from './components/volida-films/volida-films.component';

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
    path: 'volidaFilms',
    component: VolidaFilmsComponent,
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
    path: 'detailPage/:id',
    component: EventDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recentStreamPage/:id',
    component: RecentStreamDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
