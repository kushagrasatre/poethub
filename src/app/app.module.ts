import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatadisplayComponent } from './datadisplay/datadisplay.component';
import { ServicedataService } from './servicedata.service';
import { RecordsComponent } from './records/records.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TdfComponent } from './tdf/tdf.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FullstoryComponent } from "./fullstory/fullstory.component";
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MembersComponent } from './members/members.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DatadisplayComponent,
    RecordsComponent,
    HeaderComponent,
    NavigationComponent,
    TdfComponent,
    AboutusComponent,
    HomeComponent,
    FullstoryComponent,
    PageNotFoundComponentComponent,
    MembersComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [ServicedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
