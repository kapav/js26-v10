import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {
    let value = true
    console.log('Метод AuthGuard\'а canActivate возвращает: ' + value)
    return true
  }
  
}
