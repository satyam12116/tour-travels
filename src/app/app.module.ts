import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { PackageComponent } from './package/package.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PopularpackageComponent } from './popularpackage/popularpackage.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { RequestStatusComponent } from './request-status/request-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicespageComponent,
    PackageComponent,
    ContactmeComponent,
    PopularpackageComponent,
    AdminAuthComponent,
    UserAuthComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    EditProfileComponent,
    EditDashboardComponent,
    RequestStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
