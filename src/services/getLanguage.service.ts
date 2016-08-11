import {Injectable} from '@angular/core';
import { LANGUAGES } from '../constants/languages.constant';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GetLanguage{
	private lang = new BehaviorSubject<Array<string>>(LANGUAGES);

	thisLang = this.lang.asObservable();
	resp:Array<string> = [];
	constructor(){
		// this.subs = this.thisLang.subscribe(
		// 	x=> console.log(x)
		// );
	}

	getLanguage(ch){
		// console.log(ch);
		// let that = this.ch;
		let arr = this.lang.value;
		console.log(this.lang.value.length);

		for(let i=0; i<arr.length; i++ ){
			// console.log(arr);
			// console.log(i);
			// console.log( arr[i][0].toUpperCase() );
			// console.log(ch.toUpperCase());

			if( arr[i][0].toUpperCase() == ch.toUpperCase()){
				// console.log( arr[i] );
				this.resp.push(arr[i]);
			}
		}
		console.log(this.resp);
	}
};