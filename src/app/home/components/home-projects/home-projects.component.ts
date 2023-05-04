import { Component } from "@angular/core";
import { PROJECTS_DATA } from "./projectsDatas";

@Component({
	selector: "[app-home-projects]",
	templateUrl: "./home-projects.component.html",
	styleUrls: ["./home-projects.component.scss"],
})
export class HomeProjectsComponent {
	data = PROJECTS_DATA;
	years = ["2019", "2020", "2021", "2022", "2023", "Total"];
	empty = ["", "", "", "", "", ""];

	chiffrageData = [70, 125, 80, 63, 98];
	coutsData = [15, 45, 70, 78, 48];

	generateBackgroundColors() {
		return this.coutsData.map((cout, index) => {
			if (cout > this.chiffrageData[index]) {
				return "rgba(255, 0, 0, 0.8)"; // Rouge
			} else {
				return "rgba(12, 200, 128, 0.8)"; // Couleur initiale (vert)
			}
		});
	}

	barChartData = {
		labels: ["P35", "P37", "P43", "P44", "P45"],
		datasets: [
			{
				data: this.chiffrageData,
				label: "Chiffrage",
				backgroundColor: "rgba(200, 200, 200, 0.8)",
			},
			{
				data: this.coutsData,
				label: "Coûts",
				backgroundColor: this.generateBackgroundColors(),
			},
		],
	};
	barChartOptions = {
		responsive: true,
	};
	barChartType: any = "bar";
}
