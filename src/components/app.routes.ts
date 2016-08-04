import { provideRouter, RouterConfig } from '@angular/router';
import { PersonalInformation } from './options/personalInformation.component';
import { EducationalExperience } from './options/educationalExperience.component';
import { ProfessionalExperience } from './options/professionalExperience.component';
import { EmploymentPreferences } from './options/employmentPreferences.component';
import { GroupsAfilliations } from './options/groupAfilliations.component';
import { PrivacySettings} from './options/privacySettings.component';
import { Dummy} from './options/dummy.component';
import { Home } from './app.component';

export const routes: RouterConfig = [
	{ 
		path: '', 
		component: Home,
		children: [
			{path: '', component: Dummy },
			{ path: 'Personal_Information', component: PersonalInformation },
			{ path: 'Educational_Experience', component: EducationalExperience },
			{ path: 'Professional_Experience', component:  ProfessionalExperience},
			{ path: 'Employment_Preferences', component: EmploymentPreferences },
			{ path: 'Groups_and_Afilliations', component: GroupsAfilliations },
			{ path: 'Privacy_Settings', component: PrivacySettings }	
		] 
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];