import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { GraphComponent } from './graph.component';
import { LegendComponent } from './legend.component';
import { OptionsComponent } from './options.component';

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    GraphComponent,
    LegendComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
