
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
// import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate.guard';

// import { T1DetailsComponent, T1ListComponent, T1NewComponent } from './';

const routes: Routes = [
	// { path: '', component: T1ListComponent, canDeactivate: [CanDeactivateGuard] },
	// { path: ':id', component: T1DetailsComponent, canDeactivate: [CanDeactivateGuard] },
	// { path: 'new', component: T1NewComponent },
];

export const t1Route: ModuleWithProviders<any> = RouterModule.forChild(routes);