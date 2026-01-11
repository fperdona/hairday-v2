import type { Appointment } from "../models/appointment";
import { SCHEDULE_PERIODS } from "../constants/schedule";

/**
 * Filtra appointments por data
 */
export function filterByDate(
  appointments: Appointment[],
  date: Date
): Appointment[] {
  const dateString = date.toISOString().split("T")[0]; // "2026-01-10"
  return appointments.filter((apt) => apt.date === dateString);
}

/**
 * Filtra appointments por período (manhã, tarde, noite)
 */
export function filterByPeriod(
  appointments: Appointment[],
  period: "MORNING" | "AFTERNOON" | "EVENING"
): Appointment[] {
  const { startHour, endHour } = SCHEDULE_PERIODS[period];

  return appointments.filter((apt) => {
    const hour = parseInt(apt.time.split(":")[0]);
    return hour >= startHour && hour < endHour;
  });
}
