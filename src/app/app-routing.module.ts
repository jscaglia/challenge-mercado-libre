
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ResultDetailsComponent } from './components/result-details/result-details.component';

const appRoutes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '' },
{ path: 'index.html', pathMatch: 'full', redirectTo: '' },
{ path: 'items', component: SearchResultsComponent, canActivate: [] },
{ path: 'items/:id', component: ResultDetailsComponent, canActivate: [] },
{ path: 'detailProduct', component: ResultDetailsComponent, canActivate: [] },
{ path: '**', redirectTo: 'not-found', }
];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
