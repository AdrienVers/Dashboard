import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
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
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(77,83,96,1)",
				fill: "origin",
			},
			{
				data: [2.0, 2.5, 3.8, 4.2, 5.8],
				label: "CA prévu (M €)",
				backgroundColor: "rgba(77,83,96,0.2)",
				borderColor: "rgba(77,83,96,1)",
				pointBackgroundColor: "rgba(77,83,96,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(77,83,96,1)",
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

	tableau = [
		["Performances", "2019", "2020", "2021", "2022", "2023"],
		["CA initialement prévu (€)", "1,7M", "2,6M", "3,0M", "4,0M", "5,8M"],
		["Chiffre d’affaires (€)", "2,0M", "2,5M", "3,8M", "4,2M", "5,2M"],
		["Marge brute (€)", "1,0M", "1,3M", "2,0M", "2,4M", "3,0M"],
		["EBITDA - EBE (€)", "0,6M", "0,8M", "1,3M", "1,6M", "2,0M"],
		["Résultat d’exploitation (€)", "0,4M", "0,6M", "1,0M", "1,3M", "1,6M"],
		["Résultat net (€)", "0,3M", "0,5M", "0,8M", "1,0M", "1,3M"],
		["Croissance"],
		["Taux de marge d’EBITDA (%)", "30%", "32%", "34%", "38%", "40%"],
		["Taux des capitaux propres (%)", "40%", "42%", "45%", "48%", "50%"],
		["Gestion BFR"],
		["BFR (€)", "0,5M", "0,6M", "0,8M", "0,9M", "1,1M"],
	];
}
