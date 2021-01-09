import { Component } from '@angular/core';
import { Source } from 'projects/ngx-image-preview/src/lib/interfaces/source.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-image-preview';
  public source : Source[] = [
    {
    src : "https://fondosmil.com/fondo/17009.jpg",
    styles : { width:"50px",height:"50px" , 'border-radius':"5%",transition: 'width 2s'},
    loading : true,
    loaderSource : "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  },
  {
    src : "https://fondosmil.com/fondo/16009.jpg",
    styles : { width:"100px",height:"100px" , 'border-radius':"5%",transition: 'width 2s'},
    loading : true,
    loaderSource : "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  },
  {
    src : "https://fondosmil.com/fondo/16109.jpg",
    styles : { width:"200px",height:"200px" , 'border-radius':"5%",transition: 'width 2s'},
    loading : true,
    loaderSource : "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  },
  {
    src : "https://fondosmil.com/fondo/15009.jpg",
    styles : { width:"400px",height:"400px" , 'border-radius':"5%",transition: 'width 2s'},
    loading : true,
    loaderSource : "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  },
  {
    src : "https://fondosmil.com/fondo/109.jpg",
    styles : { width:"800px",height:"800px" , 'border-radius':"5%",transition: 'width 2s'},
    loading : true,
    loaderSource : "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  },
];

  ngOnInit(): void {
   
  }

}
