import { Component, Input, Output } from '@angular/core';
import { SetTemplate } from '../../services/setTemplate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'container',
	templateUrl: '../../assets/templates/body/container.template.html'
})
export class Language{
	@Input() type;
	@Output() languageType:boolean;
	@Output() stateType:boolean;
	subscription:Subscription;

	constructor( private setTemplate:SetTemplate ){}

	ngOnInit(){
		this.subscription = this.setTemplate.languageShow.subscribe(t=>{	
			this.languageType = t.language;
			this.stateType = t.state;
		});

		if( this.type == "language" ){
			this.languageType = true;
			this.stateType = false;
		}else if(this.type == "stateLic"){
			this.stateType = true;
			this.languageType = false
		}
	}
}