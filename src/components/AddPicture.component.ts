import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
	selector: "add-picture",
	templateUrl: '../../assets/templates/addPicture.template.html',
	styleUrls: ['../../assets/styles/css/addPicture.css'],
	directives: [ROUTER_DIRECTIVES]
	
})export class AddPicture{
	path;
	constructor(private router: Router){
		this.path = (this.router.config[0].path =="")?true:false;
	}
}