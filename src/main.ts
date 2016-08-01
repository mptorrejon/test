import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './components/app.routes';
import { AppComponent } from './components/app.component';
import { FormlyProviders } from 'ng2-formly';
// import { TitleService } from './services/thisTitle.service';

bootstrap( AppComponent, [
	APP_ROUTER_PROVIDERS,
	FormlyProviders/*,
	TitleService*/
])
.catch(err=>{
	console.error(err);
});
