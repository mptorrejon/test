import { Component, Input, Output } from '@angular/core';
import { SetTemplate } from '../../services/setTemplate.service';
import { Subscription } from 'rxjs/Subscription';
import { GetLanguage } from '../../services/getLanguage.service';

@Component({
	selector: 'container',
	templateUrl: '../../assets/templates/body/container.template.html'
})
export class Language{
	@Input() type;
	@Output() languageType:boolean;
	@Output() stateType:boolean;
	subscription:Subscription;
	langSub:Subscription;
	langArr:Array<string>=[];

	constructor( private setTemplate:SetTemplate, private lang:GetLanguage ){}

	ngOnInit(){
		this.subscription = this.setTemplate.languageShow.subscribe(t=>{	
			this.languageType = t.language;
			this.stateType = t.state;
		});
		// this.langSub = this.lang.thisLang.subscribe();

		if( this.type == "language" ){
			this.languageType = true;
			this.stateType = false;
		}else if(this.type == "stateLic"){
			this.stateType = true;
			this.languageType = false
		}
	}
	callService(event){
		this.langArr = this.lang.getLanguage( event.srcElement.value.length, event.target.value );
		console.log(this.langArr);
	}
}