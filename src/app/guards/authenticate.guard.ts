import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        return true;
    }
}
