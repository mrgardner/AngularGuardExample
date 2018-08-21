import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {ProtectedComponent} from '../../components/protected/protected.component';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor() {}
  canDeactivate(
    component: ProtectedComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm('Are you sure?');
  }
}
