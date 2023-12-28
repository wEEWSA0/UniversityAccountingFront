import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsListComponent } from './pages/buildings-list/buildings-list.component';
import { RoomsListComponent } from './pages/rooms-list/rooms-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'buildings', pathMatch: 'full' },
  { path: 'buildings', component: BuildingsListComponent },
  { path: 'rooms', component: RoomsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
