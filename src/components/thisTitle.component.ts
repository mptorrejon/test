import { Component, Inject, Injectable } from '@angular/core';
import { TitleService } from '../services/thisTitle.service';
import { Subscription } from 'rxjs/Subscription';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
	selector: 'this-title',
	templateUrl: '../../assets/templates/body/thisTitle.template.html',
	styleUrls: ['../../assets/styles/css/personalInformation.css'],
	directives: [ROUTER_DIRECTIVES]

}) export class ThisTitle{
	title:string = "Hi";
	subscription: Subscription;
	
	constructor( private titleService:TitleService, private router:Router ) {}

	ngOnInit(){
		this.subscription = this.titleService.thisTitle.subscribe( t=>{
			this.title = t;
		});
	}
}