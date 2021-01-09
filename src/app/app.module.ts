import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxImagePreviewModule } from 'projects/ngx-image-preview/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxImagePreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
