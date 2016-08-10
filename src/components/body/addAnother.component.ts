import { Component,ViewChild, Input, DynamicComponentLoader,ViewContainerRef, ElementRef, Injector } from '@angular/core';
import { Language } from './container.component';

@Component({
	selector: 'add-another',
	template: `
				<container type="type" #container></container>
				<button (click)="addAnother(\'language\')" >
					+ Add Another Language
				<button>
			`,
	directives: [Language]
})export class AddAnother{
	// gets an instance of a childview (container) so that it can dynamic loader can drop
	// component into it
	@ViewChild('container', {read: ViewContainerRef}) container:ViewContainerRef;
	@Input() type;

	constructor(
		private view:ViewContainerRef,
		private loader:DynamicComponentLoader
	){}

	ngOnInit(){
		// console.log( this.type );
	}

	addAnother(which){
		/*
			need to implement switch so it knows what template to pick up
			also, this can help to know the container???
		*/
		this.loader.loadNextToLocation(Language, this.container );
	}
}