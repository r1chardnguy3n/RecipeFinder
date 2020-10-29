import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {RecipelistComponent} from './recipelist/recipelist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipelist', component: RecipelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
