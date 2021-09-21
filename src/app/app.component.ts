import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import * as React from 'react';

import * as ReactDOM from 'react-dom';
import MyReactComponent from './MyReactComponent'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'petrofac';

}
