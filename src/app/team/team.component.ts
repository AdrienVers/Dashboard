import { Component } from "@angular/core";

@Component({
	selector: "app-fetch-data",
	templateUrl: "./team.component.html",
	styleUrls: ["./team.component.scss"],
})
export class TeamComponent {
	public forecasts: WeatherForecast[] = [];
}

interface WeatherForecast {
	date: string;
	temperatureC: number;
	temperatureF: number;
	summary: string;
}
