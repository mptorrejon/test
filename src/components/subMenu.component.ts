import {Component} from '@angular/core';
import {HOME_OPTIONS} from '../constants/homeOptions.constant';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
	selector: 'sub-menu',
	templateUrl: '../../assets/templates/body/subMenu.template.html',
	styleUrls: ['../../assets/styles/css/submenu.css'],
	directives: [ROUTER_DIRECTIVES]
})export class SubMenu{
	options: Array<string>;
	router: Router;
	constructor(router:Router){
		this.options = HOME_OPTIONS;
		this.router = router;
	}

	navigate(val){
		// console.log(val);
		// console.log(val.target.innerHTML.trim());
		this.router.navigate([val.target.innerHTML.trim()]);
	}
}