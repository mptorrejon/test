/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './components/app.routes';
import { AppComponent } from './components/app.component';
import { FormlyProviders } from 'ng2-formly';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import{ provide } from '@angular/core';
// new location for locationStrategy and HashLocationStrategy
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ShowDivs } from './services/showDivs.service';

bootstrap( AppComponent, [
	APP_ROUTER_PROVIDERS,
	FormlyProviders,
	disableDeprecatedForms(),
	provideForms(),
	provide(LocationStrategy, {useClass: HashLocationStrategy}),
	ShowDivs
])
.catch(err=>{
	console.error(err);
});
