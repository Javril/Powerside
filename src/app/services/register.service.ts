import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public registerBS = new BehaviorSubject<Register>(null);
  public registerBS$ = this.registerBS.asObservable();

  constructor() { }
}
