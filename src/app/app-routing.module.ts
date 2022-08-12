import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { EmployeesComponent } from './employees/employees.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
{path:'',redirectTo:'home',pathMatch:'full'},
{path:"home", component:HomeComponent},  
{path:"products", component: ProductsComponent},
{path:"categories", component:CategoriesComponent},
{path:"employees",component:EmployeesComponent},
{path:"contact", component:ContactComponent},
{path:"login", component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
