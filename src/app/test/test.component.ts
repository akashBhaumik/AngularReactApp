import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as React from 'react';

import * as ReactDOM from 'react-dom';
import MyReactComponent from '../MyReactComponent'; 

@Component({
  selector: 'app-test',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  public rootId = "rootId"

  // ngOnChanges(){
  // this.render();

  // }
  ngAfterViewInit(){
    this.render();

  }
  // ngOnDestroy(){

  // }
  private render(){
     
    ReactDOM.render(React.createElement(MyReactComponent ),document.getElementById(this.rootId))
  }
}
