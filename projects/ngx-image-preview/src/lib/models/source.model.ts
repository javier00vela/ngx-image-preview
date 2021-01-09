import { Component } from "@angular/core";

export class SourceModel {

    public src! : string;
    public styles! :  Object;
    public loaderSource! : string;
    public loading:boolean = true;
    public delay? :  number = 2000;
}