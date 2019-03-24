import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MembersComponent} from './members/members.component'
import {AboutusComponent} from './aboutus/aboutus.component';
import {FullstoryComponent} from './fullstory/fullstory.component';
// import {TdfComponent} from './tdf/tdf.component';
 import {RecordsComponent} from './records/records.component';
 import { RegistrationComponent } from './registration/registration.component'
const routes: Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'members', component:MembersComponent},
{path:'registration', component:RegistrationComponent},
{path:'members/:id', component:RecordsComponent},
{path:'members/:id/:ch_id', component:FullstoryComponent  },
{path:'aboutus', component:AboutusComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
