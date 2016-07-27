import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Home} from './home.component'

@Component({
  selector: 'landing-site',
  templateUrl: '../../assets/templates/body/home.template.html',
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES, Home],
})
export class AppComponent {}