import { Component/*, ViewEncapsulation*/ } from '@angular/core';
import { SubMenu } from './subMenu.component';
import { ThisForm } from './thisForm.component';
import { GoBack } from './goback.component';
import { ThisTitle } from './thisTitle.component';
import { ThisSave } from './thisSave.component';

@Component({
	selector:'personal-information',
	templateUrl: '../../assets/templates/body/options/personalInformation.template.html',
	styleUrls: ['../../assets/styles/css/personalInformation.css'],
	directives: [SubMenu, GoBack, ThisTitle, ThisSave, ThisForm]/*,
	encapsulation: ViewEncapsulation.None*/
}) export class PersonalInformation{}