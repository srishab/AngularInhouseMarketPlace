import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { UpdateRequirementComponent } from './update-requirement/update-requirement.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'add-users', component: AddUsersComponent},
  {path: '', redirectTo: 'resources', pathMatch: 'full'},
  {path: 'update-users/:userId', component: UpdateUsersComponent},
  {path:'getallemployee',component:EmployeeListComponent}, 
  {path:'addemployee',component:CreateEmployeeComponent},
  {path:'updateEmployee',component:UpdateEmployeeComponent},
  {path: 'offers', component: OfferListComponent},
  {path: 'add-offer', component: AddOfferComponent},
  {path: 'update-offer', component: UpdateOfferComponent},
  {path: 'proposals' , component: ProposalListComponent},
  {path:'create-proposal', component:CreateProposalComponent},
  {path: 'requirements', component: RequirementListComponent},
  {path: 'add-requirement', component: AddRequirementComponent},
  {path: 'update-requirement', component: UpdateRequirementComponent},
  {path: 'login',component:LoginComponent},
  {path:'resources', component: ResourceListComponent},
  {path:'logout',component:LogoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
