import { Component , OnInit } from '@angular/core';

import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'selic';
  private taxas;
  
  constructor(private configService: ConfigService) { }

  getTodos() {
    return this.configService.get().subscribe(
      taxas => { this.taxas = taxas;
    });
  }

  ngOnInit() {
    this.getTodos();

  }

}