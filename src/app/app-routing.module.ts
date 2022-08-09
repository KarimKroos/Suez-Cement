import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path:'',component:RegisterationComponent,pathMatch:'full'},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
