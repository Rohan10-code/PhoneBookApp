import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import { ContactAddUpdateComponent } from './contact-add-update/contact-add-update.component';

const routes: Routes = 
[
  {path:'',component:ContactsComponent},
  {path:'Add-Update/:id',component:ContactAddUpdateComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
