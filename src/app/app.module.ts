import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdvancedComponent } from './advanced.component';

const routes: Routes = [
    {
        path: '', component: AppComponent, pathMatch: 'prefix',
        children: [
            {path: 'medias', component: AdvancedComponent}
        ]
    },
];

@NgModule({
  declarations: [
    AppComponent,
    AdvancedComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent], entryComponents: [AdvancedComponent]
})
export class AppModule { }