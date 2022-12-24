import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/containers/home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
    
  {
    path: '', component: HomeComponent
  },{
    path: 'home', component: HomeComponent
  }
  
  ,{ path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent }
        
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
