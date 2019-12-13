import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TypesComponent,
    ServicesComponent,
    DermatologistComponent,
    AboutComponent,
    CountComponent,
    ReviewsComponent,
    FactsComponent,
    NewsComponent,
    ContactComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
