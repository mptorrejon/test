import { Component, Input } from '@angular/core';

@Component({
	selector: 'add-another',
	template: '<button (click)="addAnother(\'language\')" >+ Add Another Language<button>'
})export class AddAnother{
	@Input() type;

	ngOnInit(){
		console.log( this.type );
	}

	addAnother(which){
		console.log(which);
	}
}