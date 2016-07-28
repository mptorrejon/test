/*
	This service will add|remove a class(cn) from a given element (el)
	it will also check if given element has a class
*/

import {Injectable} from '@angular/core';

@Injectable()
export class AddRemoveClass{
	AddClass(el, cn){
		el.classList.add(cn);
	}
	RemoveClass(el, cn){
		if(this.HasClass(el, cn)){
			var reg = new RegExp('(\\s|^)' + cn + '(\\s|$)')
			el.className = el.className.replace(reg, ' ');
		}
	}
	HasClass(el, cn){
		return el.classList.contains(cn);
	}	
}

/*
TODO
+ add some validation for:
	- el not valid
	- classname doest not exists
+ return some confirmation(boolean) that add/remove has been succesfull
*/