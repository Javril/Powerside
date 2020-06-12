import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols: any[];
  data$: Observable<Register[]>;

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'firstname', header: 'Prénom' },
      { field: 'name', header: 'Nom' },
      { field: 'status', header: 'Statut' },
      { field: 'gender', header: 'Genre' }
    ];
    this.data$ = this.register.registerBS$ as any;
  }

}
