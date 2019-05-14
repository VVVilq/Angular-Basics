import { Component, OnInit } from '@angular/core';
import {WalutyService} from '../services/waluty.service';
import { Table } from '../services/table';


@Component({
  selector: 'app-cantor',
  templateUrl: './cantor.component.html',
  styleUrls: ['./cantor.component.css']
})

export class CantorComponent implements OnInit {
  
  tabela: Table;

  constructor(private walutyService: WalutyService) { }

  ngOnInit() {
  }

  onClickMe(letter) {
    this.getData(String(letter));
  }

  getData(letter): void {
    this.walutyService.getData(String(letter))
    .subscribe(tabela => this.tabela = tabela[0]);
  }

}
