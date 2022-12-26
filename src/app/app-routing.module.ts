import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/containers/home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RProductComponent } from './r-product/r-product.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
    
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  
  {
    path: 'r-products', component: RProductComponent
  },
  {
    path: 'services', component: ServicesComponent
  }
  
  ,{ path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactsComponent },

  { path: 'products', component: ProductsComponent },

  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent }
        
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
