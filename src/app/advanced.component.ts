import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

	title = 'selic';
  private medias;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
        //return this.configService.getAverage().subscribe(
          //medias => { this.medias = medias;}
        //); 
  }

}