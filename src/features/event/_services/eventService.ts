import api from "../../../services/api";
import type { Event } from "../_event";

export async function fetchEvents(): Promise<Event[]> {
  try {
    const response = await api.get("/events-user");
    return response.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil data event:", error);
    throw error;
  }
}

export async function fetchEventDetail(slug: string): Promise<Event> {
  try {
    const response = await api.get(`/events/${slug}`);
    return response.data?.data;
  } catch (error) {
    console.error(`Gagal mengambil detail event ID ${slug}:`, error);
    throw error;
  }
}
