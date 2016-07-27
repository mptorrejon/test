import {Component} from '@angular/core';
import { SearchBar } from './searchBar.component';
import { UserProfile} from './userProfile.component';
import { Hamburguer} from './hamburguer.component';

@Component({
	selector: 'header',
	templateUrl: '../../../assets/templates/header/header.template.html',
	styleUrls: ['../../../assets/styles/css/header/header.css'],
	directives: [SearchBar, UserProfile, Hamburguer]
}) export class Header{}