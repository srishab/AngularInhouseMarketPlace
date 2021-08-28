import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { FormsModule } from '@angular/forms';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HeadComponent } from './head/head.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { LoginComponent } from './login/login.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { UpdateRequirementComponent } from './update-requirement/update-requirement.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUsersComponent,
    UpdateUsersComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    HeadComponent,
    OfferListComponent,
    AddOfferComponent,
    ProposalListComponent,
    CreateProposalComponent,
    RequirementListComponent,
    AddRequirementComponent,
    LoginComponent,
    ResourceListComponent,
    UpdateOfferComponent,
    UpdateRequirementComponent,
    LogoutComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
