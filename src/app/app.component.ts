import { Component } from '@angular/core';
import { Source } from 'projects/ngx-image-preview/src/lib/interfaces/source.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public title = 'ngx-image-preview';
  public catApi = 'https://placekitten.com/';
  public source : Source[] = [];

  ngOnInit(): void {
    let path : Source  = <Source>{};
    const randomNumber = (min : number , max  : number ) => Math.floor(Math.random() * (max - min ) + min) 
    for (let i = 0; i < 220; i++) {
      let widthRandom = randomNumber(350,720);
      let heightRandom = randomNumber(200,820);
      path = { 
        src : `${this.catApi}${widthRandom}/${heightRandom}`,
        styles : { width:`${widthRandom}px`,height:`${heightRandom}px` , 'border-radius':"1%" , "filter": "grayscale(10%)"},
        loading : true,
        loaderSource : "https://thememyxbox.net/images/loading.gif" 
      }
      this.source = [...this.source , path ]
    }
  }

}
