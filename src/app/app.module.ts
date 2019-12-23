import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ShownComponent } from './shown/shown.component';
import { DialogModule } from 'primeng/dialog'

import {OverlayPanelModule} from 'primeng/overlaypanel';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ShownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    FilterPipeModule,
    DialogModule,
    OverlayPanelModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
