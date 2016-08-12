import { Injectable } from '@angular/core';
import { LANGUAGES } from '../constants/languages.constant';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GetLanguage {
	resp:Array<string>=[];
	constructor(){}
	
	getLanguage( l, word){
		return LANGUAGES.filter( function(val, idx, arr){
			if(word.toUpperCase() == val.substring(0,l).toUpperCase() )
				return true;
			return false;
		});
	}
};