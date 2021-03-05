import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatesListComponent} from './components/states-list/states-list.component';

const routes: Routes = [{
  path: '',
  component: StatesListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
