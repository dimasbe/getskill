import type { Partner } from "../Partner";

const API_URL = "https://core.getskill.id/api/partners2";

export const fetchPartners = async (): Promise<Partner[]> => {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (result.success && result.data) {
            return result.data as Partner[];
        }

        return [];
    } catch (error) {
        console.error("Failed to fetch partners:", error);
        return [];
    }
};