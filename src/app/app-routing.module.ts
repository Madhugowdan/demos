import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';
const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'users', component:UsersComponent},
  {path:'contacts', component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
