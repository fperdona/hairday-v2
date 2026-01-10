export interface Appointment {
  id: string;
  clientName: string;
  date: string; // ISO date string (YYYY-MM-DD)
  time: string; // "09:00", "14:30", etc
}
