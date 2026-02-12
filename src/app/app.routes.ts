import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PolicyPage } from '../policy/policy.page';

export const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'policy', component: PolicyPage },
	{ path: '**', redirectTo: '' }
];
