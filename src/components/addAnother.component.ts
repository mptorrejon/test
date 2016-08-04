import { Component,ViewChild, Input, DynamicComponentLoader,ViewContainerRef, ElementRef } from '@angular/core';
import { Language } from './language.component';

@Component({
	selector: 'add-another',
	template: '<button (click)="addAnother(\'language\')" >+ Add Another Language<button>'
})export class AddAnother{
	// @ViewChild('target', {read: ViewContainerRef}) target;
	ele;
	constructor(private view:ViewContainerRef ,private loader:DynamicComponentLoader, private eleRef:ElementRef){}

	@Input() type;

	ngOnInit(){
		console.log( this.type );
	}

	addAnother(which){
		let elem = this.eleRef;
		console.log(which);
		this.loader.loadNextToLocation(Language, this.view)
	}
}