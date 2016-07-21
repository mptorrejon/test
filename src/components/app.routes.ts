import { provideRouter, RouterConfig } from '@angular/router';
import { PersonalInformation } from './personalInformation.component';
import { EducationalExperience } from './educationalExperience.component';
import { ProfessionalExperience } from './professionalExperience.component';
import { EmploymentPreferences } from './employmentPreferences.component';
import { GroupsAfilliations } from './groupAfilliations.component';
import { PrivacySettings} from './privacySettings.component';
import { Home } from './home.component';

export const routes: RouterConfig = [
	{ path: '', component: Home},
	{ path: 'Personal Information', component: PersonalInformation },
	{ path: 'Educational Experience', component: EducationalExperience },
	{ path: 'Professional Experience', component:  ProfessionalExperience},
	{ path: 'Employment Preferences', component: EmploymentPreferences },
	{ path: 'Groups and Afilliations', component: GroupsAfilliations },
	{ path: 'Privacy Settings', component: PrivacySettings }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];