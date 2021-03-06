import {NgModule, TemplateRef} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
// import {FormsModule} from "@angular/forms"; // can remove this if using templateref

import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

import {AppComponent} from "./app.component";

const routes: Routes = [
	// {path: '', component: HomeComponent, pathMatch: 'full'},
	{path: '', redirectTo: 'passengers', pathMatch: 'full'},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NotFoundComponent
	],
	imports: [
		//angular
		BrowserModule,
		CommonModule,
		RouterModule.forRoot(routes, /*{useHash: true}*/),
		// custom
		PassengerDashboardModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}