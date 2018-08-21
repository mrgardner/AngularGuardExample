import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProtectedComponent} from './components/protected/protected.component';
import {AuthGuard} from './guards/auth/auth.guard';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: ProtectedComponent, canDeactivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
