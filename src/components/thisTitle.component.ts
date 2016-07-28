import { Component } from '@angular/core';
import { TitleService } from '../services/thisTitle.service';

@Component({
	selector: 'this-title',
	templateUrl: '../../assets/templates/body/thisTitle.template.html',
	styleUrls: ['../../assets/styles/css/personalInformation.css'],
	providers: [ TitleService ]
}) export class ThisTitle{
	title:string;
	constructor(t: TitleService){
		console.log( t.title );
		this.title = t.title;
		console.log(this.title);
	}
}