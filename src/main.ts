import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './components/app.routes';
import { AppComponent } from './components/app.component';

bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS
]);