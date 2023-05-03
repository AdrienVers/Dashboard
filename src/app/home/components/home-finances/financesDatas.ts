interface FinancesRow {
	label: string;
	values: string[];
}

interface FinancesSection {
	header: string;
	rows: FinancesRow[];
}

export const FINANCES_DATA: FinancesSection[] = [
    {
      header: "Performance",
      rows: [
        {
          label: "CA initialement prévu (€)",
          values: ["1,7 M", "2,6 M", "3,0 M", "3,9 M", "5,8 M"],
        },
        {
          label: "Chiffre d'affaires (€)",
          values: ["2,0 M", "2,5 M", "3,8 M", "4,2 M", ""],
        },
        {
          label: "Marge brute (€)",
          values: ["1,0 M", "1,3 M", "2,0 M", "2,4 M", ""],
        },
        {
          label: "EBITDA - EBE (€)",
          values: ["0,6 M", "0,8 M", "1,3 M", "1,6 M", ""],
        },
        {
          label: "Résultat d'exploitation (€)",
          values: ["0,4 M", "0,6 M", "1,0 M", "1,3 M", ""],
        },
        {
          label: "Résultat net (€)",
          values: ["0,3 M", "0,5 M", "0,8 M", "1,0 M", ""],
        },
      ],
    },
    {
      header: "Croissance",
      rows: [
        {
          label: "Taux de marge d'EBITDA (%)",
          values: ["30 %", "32 %", "34 %", "38 %", ""],
        },
        {
          label: "Taux des capitaux propres (%)",
          values: ["40 %", "42 %", "45 %", "48 %", ""],
        },
      ],
    },
    {
      header: "Gestion BFR",
      rows: [
        { label: "BFR (€)", values: ["0,5 M", "0,6 M", "0,8 M", "0,9 M", ""] },
      ],
    },
  ];

