import type { Appointment } from "../models/appointment";
import { SCHEDULE_PERIODS, type PeriodKey } from "../constants/schedule";

export function formatDateToBR(date: Date): string {
  return date.toLocaleDateString("pt-BR");
}

export function getHourFromTime(time: string): number {
  return parseInt(time.split(":")[0]);
}

export function filterByPeriod(
  appointments: Appointment[],
  period: PeriodKey
): Appointment[] {
  const { startHour, endHour } = SCHEDULE_PERIODS[period];

  return appointments
    .filter((appointment) => {
      const hour = getHourFromTime(appointment.time);
      return hour >= startHour && hour < endHour;
    })
    .sort((a, b) => a.time.localeCompare(b.time));
}

export function filterByDate(
  appointments: Appointment[],
  date: Date
): Appointment[] {
  const formattedDate = formatDateToBR(date);
  return appointments.filter((app) => app.date === formattedDate);
}

export function isTimeSlotBooked(
  appointments: Appointment[],
  date: Date,
  time: string
): boolean {
  const formattedDate = formatDateToBR(date);
  return appointments.some(
    (app) => app.date === formattedDate && app.time === time
  );
}
