import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { PackageComponent } from './package/package.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PopularpackageComponent } from './popularpackage/popularpackage.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'service', component:ServicespageComponent},
  {path: 'popular', component:PopularpackageComponent},
  {path: 'package', component:PackageComponent},
  {path: 'contact', component:ContactmeComponent},
  {path: 'admin-auth', component:AdminAuthComponent},
  {path: 'user-auth', component:UserAuthComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent},
  {path: 'user-dashboard', component:UserDashboardComponent},
  {path:'req',component:RequestStatusComponent},
  {path:'editprofile',component:EditDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
