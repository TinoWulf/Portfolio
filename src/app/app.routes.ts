import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PolicyPage } from '../policy/policy.page';
import { ImprintPage } from '../imprint/imprint.page';

export const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'imprint', component: ImprintPage },
	{ path: 'policy', component: PolicyPage },
	{ path: '**', redirectTo: '' }
];
