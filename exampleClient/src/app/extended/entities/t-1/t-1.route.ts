
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate.guard';
import { T1DetailsExtendedComponent, T1ListExtendedComponent , T1NewExtendedComponent } from './';

const routes: Routes = [
	{ path: '', component: T1ListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: ':id', component: T1DetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: 'new', component: T1NewExtendedComponent },
];

export const t1Route: ModuleWithProviders<any> = RouterModule.forChild(routes);