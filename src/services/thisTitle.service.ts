import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TitleService{
	private title = new BehaviorSubject<string>("");
	thisTitle = this.title.asObservable();

	changeValue(t){
		console.log('new value');
		this.title.next(t);
	}
}