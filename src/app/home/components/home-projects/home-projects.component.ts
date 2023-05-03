import { Component } from "@angular/core";

@Component({
	selector: "[app-home-projects]",
	templateUrl: "./home-projects.component.html",
	styleUrls: ["./home-projects.component.scss"],
})
export class HomeProjectsComponent {
	barChartData = {
		labels: ["05/21", "11/21", "05/22", "11/22", "05/23", "11/23"],
		datasets: [
			{ data: [40, 41, 44, 46, 48, 50, 52], label: "Pertes" },
			{ data: [28, 68, 55, 79, 86, 90, 102], label: "Bénéfices" },
		],
	};
	barChartOptions = {
		responsive: false,
	};
	barChartType: any = "bar";
}
