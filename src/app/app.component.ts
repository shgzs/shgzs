import { BrowserModule } from '@angular/platform-browser';    
import { AfterContentInit, AfterViewInit, DoCheck, NgModule, OnChanges, OnInit } from '@angular/core';    
import {FormsModule,FormControl} from '@angular/forms'; 
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material';
 import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
  twoWay="";
  log:string[]=[];

  ngAfterViewInit(){
    this.log.push('ngAfterViewInit');
  }
  ngAfterContentInit(){
    this.log.push('ngAfterContentInit');
  }
  ngDoCheck(){
    this.log.push('ngDoCheck');
  }
  ngOnChanges(){
    this.log.push('ngOnChanges');
  }
  ngOnInit(): void {
    this.log.push("start")
  }
  title = 'my-app';

  name="ali";
}
