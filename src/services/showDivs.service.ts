import {Component, Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShowDivs{
	private show = new BehaviorSubject<boolean>(false);

	isShow = this.show.asObservable();

	updateView(b){
		this.show.next(b);
	}
}