

export interface IPaginate {
    current_page: number;
    last_page: number;
    per_page: number;
    total_results: number;
    results: any[];
}