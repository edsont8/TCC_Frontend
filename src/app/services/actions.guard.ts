import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from '../utils/localstorage';

@Injectable()
export class ActionsGuard implements CanActivate{

    localStorageUtils = new LocalStorageUtils();
    constructor(private router: Router){}

    canActivate() {
        if (!this.localStorageUtils.getUserToken()){
            this.router.navigate(['/Inicio/conta/entrar']);
        }

        return true;
    }
}
