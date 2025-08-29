export interface EventAttendance {
  id: number;
  event_id: string;
  attendance_date: string;
  attendance_link: string;
  created_at: string;
  updated_at: string;
}

export interface EventDetail {
  id: number;
  event_id: string;
  user: string;
  start: string;
  end: string;
  session: string;
  created_at: string;
  updated_at: string;
  event_date: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  location: string | null;
  map_link: string | null;
  capacity: number;
  capacity_left: number;
  has_certificate: number;
  is_online: number;
  is_auto_approve: number;
  email_content: string;
  start_date_raw: string;
  start_date: string;
  start_hour: string;
  end_date_raw: string;
  end_date: string;
  end_hour: string;
  image: string;
  start_in: string;
  created_at: string;
  eventAttendance: EventAttendance;
  event_details: EventDetail[];
}
