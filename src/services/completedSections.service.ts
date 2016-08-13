import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface SectionInterface{
		'personalInformation' : boolean;
		"educationalExperience": boolean,
		"professionalExperience": boolean,
		"employmentPreferences": boolean,
		"groupsAndAffiliations": boolean,
		"privacySettings": boolean
}

@Injectable()
export class CompleteSections{	
	completedSections:SectionInterface;
	private sectionListener = new BehaviorSubject<SectionInterface>( this.completedSections );
	
	thisSection = this.sectionListener.asObservable();
	
	constructor(){
		this.completedSections = {
			"personalInformation": false,
			"educationalExperience": false,
			"professionalExperience": false,
			"employmentPreferences": false,
			"groupsAndAffiliations": false,
			"privacySettings": false
		}
	}

	updateCompletedSections(type, isComplete){
		this.sectionListener.next( 
			this.completedSections[type] = isComplete
		);
	}
	getCompletedSections(){}

}