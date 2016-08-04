import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { AddRemoveClass} from '../services/addRemoveClass.service';

@Component({
	selector: 'go-back',
	templateUrl: '../../assets/templates/body/goback.template.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ AddRemoveClass ]
})export class GoBack{
	router:Router;
	ARC;
	constructor(router:Router, ARC:AddRemoveClass){
		this.router = router;
		this.ARC = ARC;
	}
	goBack(){
		// =====================MOVE THIS TO A BUILDER PATTERN =====================
		//get el to add/remove class
		/*let el = document.getElementsByClassName('home-wrapper-main')[0];
		//removes class so landing page menu goes back to normal
		this.ARC.RemoveClass(el, 'home-wrapper-submenu');
		//gets element for session controller
		el = document.getElementsByClassName('sessionCtrl')[0];
		//hides session controllers
		this.ARC.RemoveClass(el, 'show-ctrls');
		this.ARC.AddClass(el, 'hide-ctrls');

		//set route to home
		let el = document.getElementsByClassName('home-wrapper-main')[0];
		this.ARC.AddClass(el, 'home-wrapper-submenu');
		el = document.getElementsByClassName('sessionCtrl')[0];
		
		this.ARC.AddClass(el, 'show-ctrls');
		this.ARC.RemoveClass(el, 'hide-ctrls');*/
		// =============================================================

		this.router.navigate([ '' ]);

		/*el = document.getElementsByClassName('addPicture-wrapper')[0];
		this.ARC.RemoveClass(el, 'hide');
		this.ARC.AddClass(el, 'show');*/
	}
}