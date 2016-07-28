import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { AddRemoveClass} from '../services/addRemoveClass.service';

@Component({
	selector: 'go-back',
	templateUrl: '../../assets/templates/body/goback.template.html',
	directives: [ROUTER_DIRECTIVES]
})export class GoBack{
	router:Router;
	ARC;
	constructor(router:Router, ARC:AddRemoveClass){
		this.router = router;
		this.ARC = ARC;
	}
	goBack(){
		// this.router.navigate([val.target.innerHTML.trim()]);
		let el = document.getElementsByClassName('home-wrapper-main')[0];
		this.ARC.RemoveClass(el, 'home-wrapper-submenu');
	}
}