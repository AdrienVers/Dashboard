interface ProjectsRow {
	label: string;
	values: string[];
}

interface ProjectsSection {
	header: string;
	rows: ProjectsRow[];
}

export const PROJECTS_DATA: ProjectsSection[] = [
	{
		header: "Appels d'offres",
		rows: [
			{
				label: "Appels d'offres en cours",
				values: ["0", "0", "0", "1", "2", "3"],
			},
			{
				label: "Taux de réussite",
				values: ["50%", "55%", "48%", "60%", "52%", "53%"],
			},
		],
	},
	{
		header: "Projets",
		rows: [
			{ label: "Projets en cours", values: ["0", "0", "1", "2", "4", "7"] },
			{ label: "Projets en retard", values: ["0", "0", "1", "0", "1", "2"] },
			{ label: "Projets livrés", values: ["10", "12", "16", "10", "2", "50"] },
			{
				label: "Projets facturés",
				values: ["10", "12", "15", "10", "2", "49"],
			},
		],
	},
	{
		header: "Satisfaction",
		rows: [
			{
				label: "Satisfaction clients",
				values: ["82%", "90%", "92%", "80%", "89%", "87%"],
			},
			{
				label: "Satisfaction salariés",
				values: ["81%", "87%", "89%", "80%", "88%", "85%"],
			},
		],
	},
];
