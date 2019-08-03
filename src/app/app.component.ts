import { Component , OnInit } from '@angular/core';

import { ConfigService } from '././config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private taxas;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
      this.configService.getHistory().subscribe(taxas => { this.taxas = taxas;});
      //this.configService.getAverage().subscribe(medias => { this.medias = medias;});
      //this.configService.getCumulative().subscribe(acumulados => { this.acumulados = acumulados;});
  }

}