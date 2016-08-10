import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { AddRemoveClass} from '../../services/addRemoveClass.service';
import { ShowDivs }from '../../services/showDivs.service';

@Component({
	selector: 'go-back',
	templateUrl: '../../assets/templates/body/goback.template.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ AddRemoveClass ]
})export class GoBack{
	router:Router;
	ARC;

	constructor(router:Router, ARC:AddRemoveClass, private show:ShowDivs){
		this.router = router;
		this.ARC = ARC;
	}
	
	goBack(){
		this.router.navigate([ '' ]);
	}
}