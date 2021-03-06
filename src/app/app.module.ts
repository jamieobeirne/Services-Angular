import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wine/wineitem/wineitem.component';
import { WinelistComponent } from './winelist/winelist.component';
import { WineNewReactiveComponent } from './wine-new-reactive/wine-new-reactive.component';
import { WineService } from './services/wine.service';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewReactiveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
