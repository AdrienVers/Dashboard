import { Component } from "@angular/core";

@Component({
	selector: "app-analyse",
	templateUrl: "./analyse.component.html",
	styleUrls: ["./analyse.component.scss"],
})
export class AnalyseComponent {
	title = "chartman";
	barChartLabels: string[] = [
		"05/21",
		"11/21",
		"05/22",
		"11/22",
		"05/23",
		"11/23",
	];
	barChartData = {
		labels: this.barChartLabels,
		datasets: [
			{ data: [40, 41, 44, 46, 48, 50, 52], label: "Pertes" },
			{ data: [28, 68, 55, 79, 86, 90, 102], label: "Bénéfices" },
		],
	};
	barChartOptions = {
		responsive: false,
	};
	barChartType: any = "bar";
	pieChartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [, 59, 80, 81, 56, 55, 40],
			},
		],
	};
	pieChartOptions = {
		responsive: false,
	};
	pieChartType: any = "pie";
	radarChartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [65, 59, 80, 81, 56, 55, 40],
			},
		],
	};
	radarChartOptions = {
		responsive: false,
	};
	radarChartType: any = "radar";

	customerSatisfaction: number = 75; // par exemple, 75%
	workerSatisfaction: number = 65; // par exemple, 50%
	doughnutChartLabels: string[] = ["Positif", "Négatif"];

	doughnutChartData = {
		labels: this.doughnutChartLabels,
		datasets: [
			{
				data: [this.customerSatisfaction, 100 - this.customerSatisfaction],
				backgroundColor: ["#008000", "#FF0000"],
			},
		],
	};

	doughnutChartOptions = {
		responsive: false,
		legend: {
			display: false, // Ajoutez cette ligne pour cacher la légende
		},
		rotation: 28.6 * Math.PI,
	};

	doughnutChartType: any = "doughnut";
}
