import { Component, Output, Input } from '@angular/core';

@Component({
	selector: 'word-counter',
	templateUrl: '../../assets/templates/body/wordCount.template.html'
})export class WordCount{
	@Input() count:number;
}