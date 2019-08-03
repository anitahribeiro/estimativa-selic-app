import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-daniel',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

	title = 'selic';
  private medias;
  private acumulado;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
        this.configService.getAverage().subscribe(
          medias => { this.medias = medias;}
        ); 

        this.configService.getCumulative().subscribe(
          acumulado => { this.acumulado = acumulado;}
        );
        


  }

}