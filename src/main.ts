/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './components/app.routes';
import { AppComponent } from './components/app.component';
import { FormlyProviders } from 'ng2-formly';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import{ provide } from '@angular/core';
// new location for locationStrategy and HashLocationStrategy
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap( AppComponent, [
	APP_ROUTER_PROVIDERS,
	FormlyProviders,
	disableDeprecatedForms(),
	provideForms(),

	provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err=>{
	console.error(err);
});

/*
	TODO
		+ urls needs to be concatenated with hash instead of spaces
		+ site refreshes fine but route is not defined with spaces therefore no match
*/
