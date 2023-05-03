import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TeamComponent } from "./team/team.component";
import { AnalyseComponent } from "./analyse/analyse.component";
import { NgChartsModule } from "ng2-charts";
import { OverviewComponent } from "./home/components/overview/overview.component";
import { HomeFinancesComponent } from "./home/components/home-finances/home-finances.component";
import { HomeProjectsComponent } from "./home/components/home-projects/home-projects.component";
import { ProjectsComponent } from "./projects/projects.component";

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HomeComponent,
		OverviewComponent,
		HomeFinancesComponent,
		HomeProjectsComponent,
		TeamComponent,
		ProjectsComponent,
		AnalyseComponent,
		PageNotFoundComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgChartsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
