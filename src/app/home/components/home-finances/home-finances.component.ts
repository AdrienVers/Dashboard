import { Component } from "@angular/core";
import { FINANCES_DATA } from "./financesDatas";

@Component({
	selector: "[app-home-finances]",
	templateUrl: "./home-finances.component.html",
	styleUrls: ["./home-finances.component.scss"],
})
export class HomeFinancesComponent {
	data = FINANCES_DATA;
	years = ["2020", "2021", "2022", "2023", "2024"];
	empty = ["", "", "", "", ""];
	lineChartData: any = {
		labels: ["2019", "2020", "2021", "2022", "2023"],
		datasets: [
			{
				data: [2.0, 2.5, 3.8, 4.2],
				label: "Chiffre d'affaires (M €)",
				backgroundColor: "rgba(77,83,96,0.2)",
				borderColor: "rgba(77,83,96,1)",
				pointBackgroundColor: "rgba(77,83,96,1)",
				pointBorderColor: "#fff",
				fill: "origin",
			},
			{
				data: [2.0, 2.5, 3.8, 4.2, 5.8],
				label: "CA prévu (M €)",
				backgroundColor: "rgba(77,83,96,0.2)",
				borderColor: "rgba(77,83,96,1)",
				pointBackgroundColor: "rgba(77,83,96,1)",
				pointBorderColor: "#fff",
				fill: "origin",
				borderDash: [0, 0, 0, 1, 1],
			},
		],
	};
	lineChartOptions = {
		responsive: true,
		scales: {
			y: {
				min: 0,
				ticks: {
					beginAtZero: true,
					callback: function (value: any) {
						return value + " M €";
					},
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				labels: {
					filter: (legendItem: any) => {
						return legendItem.text !== "CA prévu (M €)";
					},
				},
			},
			tooltip: {
				enabled: true,
				filter: (tooltipItem: any) => {
					const dataset = tooltipItem.dataset;
					const index = tooltipItem.dataIndex;
					const label = dataset.label;

					if (label === "CA prévu (M €)") {
						if (index === dataset.data.length - 1) {
							return true;
						} else {
							return false;
						}
					} else {
						return true;
					}
				},
			},
		},
	};
	lineChartType: any = "line";
}
