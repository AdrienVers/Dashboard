import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TeamComponent } from "./team/team.component";
import { AnalyseComponent } from "./analyse/analyse.component";

const routes: Routes = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{ path: "team", component: TeamComponent },
	{ path: "projects", component: ProjectsComponent },
	{ path : "analyse", component : AnalyseComponent }, 
	{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
