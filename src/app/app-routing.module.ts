import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ShownComponent } from './shown/shown.component';


const routes: Routes = [
  {path:'' ,component:TestComponent},
  {path:'show' ,component:ShownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
