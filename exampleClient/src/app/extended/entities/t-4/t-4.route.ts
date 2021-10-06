
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate.guard';
import { T4DetailsExtendedComponent, T4ListExtendedComponent , T4NewExtendedComponent } from './';

const routes: Routes = [
	{ path: '', component: T4ListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: ':id', component: T4DetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: 'new', component: T4NewExtendedComponent },
];

export const t4Route: ModuleWithProviders<any> = RouterModule.forChild(routes);