import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DoktoriComponent } from './doktori/doktori.component';
import { PacijentiComponent } from './pacijenti/pacijenti.component';
import { ShareService } from './share.service';

@NgModule({
  declarations: [
    AppComponent,
    DoktoriComponent,
    PacijentiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
