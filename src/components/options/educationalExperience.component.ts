import {Component} from '@angular/core';
import {SubMenu} from '../subMenu.component';
import { ThisForm } from '../thisForm.component';
import { GoBack } from '../goback.component';
import { ThisTitle } from '../thisTitle.component';
import { ThisSave } from '../thisSave.component';
import{ TitleService } from '../../services/thisTitle.service';

@Component({
	templateUrl: '../../assets/templates/body/options/educationalExperience.template.html',
	styleUrls: ['../../assets/styles/css/content.css'],
	providers: [TitleService]
	// directives: [SubMenu, GoBack, ThisTitle, ThisSave, ThisForm]
}) export class EducationalExperience{
	title:string = "Educational-Experience";
	constructor( t:TitleService ){
		t.title = this.title;
	}
}