
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
// import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate.guard';

// import { T3DetailsComponent, T3ListComponent, T3NewComponent } from './';

const routes: Routes = [
	// { path: '', component: T3ListComponent, canDeactivate: [CanDeactivateGuard] },
	// { path: ':id', component: T3DetailsComponent, canDeactivate: [CanDeactivateGuard] },
	// { path: 'new', component: T3NewComponent },
];

export const t3Route: ModuleWithProviders<any> = RouterModule.forChild(routes);