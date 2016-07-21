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
	{path: '/PersonalInformation', component: PersonalInformation, useAsDefault:true, as: 'PersonalInformation'},
	{path: '/EducationalExpererience', component: EducationalExperience, as: 'EducationalExpererience'}/*,
	{path: '/ProfessionalExpererience', component: ProfessionalExperience},
	{path: '/EmploymentPreferences', component: EmploymentPreferences},
	{path: '/GroupsAndAffiliations', component: GroupsAndAffiliations},
	{path: '/PrivacyAndSettings', component: PrivacyAndSettings}*/
])
export class Body{
	options: Array<string>;

	constructor(private myoptions: HOMEPAGE_OPTIONS){
		this.options = this.myoptions.options;
		
	}
}