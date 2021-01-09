import { Component } from "@angular/core";

export interface Source {
    src : string,
    styles : Object,
    loaderSource : string,
    loading : boolean,
    delay?:number
}