import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomerGroupServiceService} from './services/customer-group-service.service';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular/src/aggrid.module';
import {RouterModule, Routes} from '@angular/router';
import { CustomerGroupComponent } from './customer-group/customer-group.component';
import { EnrolmentDetailsComponent } from './enrolment-details/enrolment-details.component';

const enrolmentRoutes: Routes  = [
  { path: 'customerGroup', component: CustomerGroupComponent },
  { path: 'enrolment-details/:organizationNumber', component: EnrolmentDetailsComponent },
  { path: '',   redirectTo: 'customerGroup', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerGroupComponent,
    EnrolmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(enrolmentRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [CustomerGroupServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
