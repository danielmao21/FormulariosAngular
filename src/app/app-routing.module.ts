import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './formularios/producto/producto.component';
import { ReactiveComponent } from './formularios/reactive/reactive.component';
import { TemplatesComponent } from './formularios/templates/templates.component';

const routes: Routes = [
  {path:'templates', component:TemplatesComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'producto',component:ProductoComponent},
  {path:'**',pathMatch:'full',component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
