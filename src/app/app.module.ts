import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdvancedComponent } from './advanced.component';
import { HistoryComponent } from './history.component';


const appRoutes: Routes = [
  { path: 'medias', component: AdvancedComponent },
  { path: 'taxas',        component: HistoryComponent },
  { path: '',   redirectTo: '/taxas', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AdvancedComponent,
    HistoryComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent], entryComponents: [AdvancedComponent, HistoryComponent]
})
export class AppModule { }