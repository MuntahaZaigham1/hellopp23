
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
// import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate.guard';

// import { T4DetailsComponent, T4ListComponent, T4NewComponent } from './';

const routes: Routes = [
	// { path: '', component: T4ListComponent, canDeactivate: [CanDeactivateGuard] },
	// { path: ':id', component: T4DetailsComponent, canDeactivate: [CanDeactivateGuard] },
	// { path: 'new', component: T4NewComponent },
];

export const t4Route: ModuleWithProviders<any> = RouterModule.forChild(routes);