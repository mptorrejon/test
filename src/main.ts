/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Body } from './components/body.component';
import { CONFIG } from './constants/config';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

bootstrap( Body, [
					CONFIG,
					ROUTER_PROVIDERS
				] 
);