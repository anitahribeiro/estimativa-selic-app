import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config/config.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./app.component.css']
})

export class HistoryComponent implements OnInit {

  title = 'selic';
 
  private taxas;

  private anos = ['2007','2008','2009','2009','2010','2011','2012','2013','2014','2015','2016','2017'];

  private meses = [
    {
      id: 1,
      nome: 'Janeiro'
    },
    {
      id: 2,
      nome: 'Fevereiro'
    },
    {
      id: 3,
      nome: 'Março'
    },
    {
      id: 4,
      nome: 'Abril'
    },
    {
      id: 5,
      nome: 'Maio'
    },
    {
      id: 6,
      nome: 'Junho'
    },
    {
      id: 7,
      nome: 'Julho'
    },
    {
      id: 8,
      nome: 'Agosto'
    },
    {
      id: 9,
      nome: 'Setembro'
    },
    {
      id: 10,
      nome: 'Outubro'
    },
    {
      id: 11,
      nome: 'Novembro'
    },
    {
      id: 12,
      nome: 'Dezembro'
    },
  ];

  constructor(private configService: ConfigService) { }

  filter() {
      let year = (<HTMLInputElement>document.getElementById("yearFilter")).value;
      let month = (<HTMLInputElement>document.getElementById("monthFilter")).value;

      if (year == "0" && month == "0") {
      return this.configService.getHistory().subscribe(taxas => { this.taxas = taxas;});
      } else {
         return this.configService.get(year, month).subscribe(taxas => { this.taxas = taxas;}); 
      }
  }

  ngOnInit() {
      this.configService.getHistory().subscribe(taxas => { this.taxas = taxas;});
  }

}