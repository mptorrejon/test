import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AddRemoveClass } from '../../services/addRemoveClass.service';
import { HOME_OPTIONS } from '../../constants/homeOptions.constant';
import { TitleService } from '../../services/thisTitle.service';
import { Subscription } from 'rxjs/Subscription';
import { ShowDivs } from '../../services/showDivs.service';

@Component({
	selector: 'my-body',
	templateUrl: '../../assets/templates/body/body.template.html',
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ AddRemoveClass ]
})export class Body{
	home_options : Array<string>;
	// ARC;
	subscription: Subscription;
	isHome;
	constructor( private ARC:AddRemoveClass, private title:TitleService, private show:ShowDivs) {
		//TODO
		// return string so it is readable, not concatanated with "_"
		this.home_options = HOME_OPTIONS.map(i=>{
			return i.split(" ").join("_");
		});
		this.ARC = ARC;

	}

	showRouterOutlet(e){
		//toggles option element when user clicks on different options
		this.toggleActive(document.querySelectorAll('.options'), e);

		//fires event to place correct title
		this.title.changeValue( e.target.innerText.trim()  );

		//update service to hide add-picture container
		this.show.updateView(true);
	}

	toggleActive(options, e){
		//sets all elements to disable class
		for(let i=0; i<options.length; i++)	{
			this.ARC.RemoveClass(options[i], "active");
			this.ARC.AddClass(options[i], 'disable');
		}
		//sets element with proper class 'active'
		this.ARC.RemoveClass(e.target, 'disable');
		this.ARC.AddClass(e.target, 'active');
	}
	ngOnInit(){
		//subscribes to update view for sub-menu/main-menu accordingly
		this.show.isShow.subscribe(val=>{
			// console.log(val);
			this.isHome = val;
		});
	}
}