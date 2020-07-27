import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPlayerComponent } from './features/main-player/main-player.component';

const routes: Routes = [
  { path: '', component: MainPlayerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
