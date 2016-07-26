import {Component} from '@angular/core';
import {HOMEPAGE_OPTIONS} from '../constants/homepageOptions.constant';
import {Router, RouteParams, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {PersonalInformation} from './PersonalInformation.component';
import {EducationalExperience} from './EducationalExperience.component';


@Component({
	selector: 'mybody',
	templateUrl: '../../assets/templates/body/main.template.html',
	providers: [HOMEPAGE_OPTIONS],
	styleUrls: ['../../assets/styles/css/block-options.css'],
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/Home', component: PersonalInformation, useAsDefault:true, as: 'Home'  }//,
	// { path: '/About/:id', component: EducationalExperience, as: 'About' }
])
export class Body{
	options: Array<string>;

	constructor(private myoptions: HOMEPAGE_OPTIONS){
		this.options = this.myoptions.options;
		
	}
}