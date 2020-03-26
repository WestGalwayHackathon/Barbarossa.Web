export interface Country {
    name:       string;
    status:     Status;
    statistics: Statistics;
}

export interface Statistics {
    confirmed: number;
    deaths:    number;
    recovered: number;
}

export interface Status {
    title:     string;
    startDate: number;
}