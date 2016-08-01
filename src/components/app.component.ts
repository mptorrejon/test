import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AddRemoveClass } from '../services/addRemoveClass.service';
import { Body } from './body.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { SessionCtrls } from './sessionCtrls.component';
// import { TitleService } from '../services/thisTitle.service';

@Component({
	selector: 'landing-site',
	templateUrl: '../../assets/templates/body/app.template.html',
	directives: [ ROUTER_DIRECTIVES, Header, Footer, SessionCtrls, Body ],
	providers: [ AddRemoveClass ],
	styleUrls: ['../../assets/styles/css/home-page.css']
})
export class AppComponent {
}