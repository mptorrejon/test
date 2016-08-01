import { Component, Inject, Injectable } from '@angular/core';
import { TitleService } from '../services/thisTitle.service';
// import { AppComponent } from './app.component';
import { Subscription } from 'rxjs/Subscription';


@Component({
	selector: 'this-title',
	templateUrl: '../../assets/templates/body/thisTitle.template.html',
	styleUrls: ['../../assets/styles/css/personalInformation.css']/*,
	providers: [ TitleService ]*/
	// directives: [AppComponent]
}) export class ThisTitle{
	title:string = "Hi";
	subscription: Subscription;
	
	constructor( private titleService:TitleService ) {}


	ngOnInit(){
		// this.subscription = this.titleService.thisTitle.subscribe( t=>{
		// 	console.log(t);
		// 	this.title = t;
		// })
	}
	valueChange(){
		console.log('Value CHANGED');
	}
}