import {Component} from '@angular/core';
import { GoBack } from './goback.component';
import { ThisTitle } from './thisTitle.component';
import {ThisSave } from './thisSave.component';
// import { TitleService } from '../services/thisTitle.service';

@Component({
	selector: 'session-ctrls',
	templateUrl: '../../assets/templates/body/sessionCtrls.template.html',
	directives: [GoBack, ThisTitle, ThisSave]
})export class SessionCtrls{
}