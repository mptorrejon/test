import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SetTemplate{
	private languageType = new BehaviorSubject<any>({
		language: false,
		state: false
	});

	languageShow = this.languageType.asObservable();
	stateShow = this.languageType.asObservable();

	updateType(t){
		
		if(t == "language"){
			this.languageType.next({
				language: true,
				state: false
			});	
		}else if(t == "state"){
			this.languageType.next({
				language: false,
				state: true
			});
		}
		
	}
}
