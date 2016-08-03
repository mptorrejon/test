/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './components/app.routes';
import { AppComponent } from './components/app.component';
import { FormlyProviders } from 'ng2-formly'; 
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap( AppComponent, [
	APP_ROUTER_PROVIDERS,
	FormlyProviders
])
.catch(err=>{
	console.error(err);
});
