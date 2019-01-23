import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home.page.component';
import { CdDemoPageComponent } from './pages/cd-demo.page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'demo', component: CdDemoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
