import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxImagePreviewerModule } from 'projects/ngx-image-preview/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxImagePreviewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
