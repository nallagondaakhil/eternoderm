import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TypesComponent } from './types/types.component';
import { ServicesComponent } from './services/services.component';
import { DermatologistComponent } from './dermatologist/dermatologist.component';
import { AboutComponent } from './about/about.component';
import { CountComponent } from './count/count.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FactsComponent } from './facts/facts.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'types', component: TypesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'count', component: CountComponent },
  { path: 'facts', component: FactsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'derma', component: DermatologistComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'apoointment', component: AppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
