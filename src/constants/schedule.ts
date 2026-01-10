export const SCHEDULE_PERIODS = {
  MORNING: {
    name: "Manhã",
    schedule: "09h-12h",
    times: ["09:00", "10:00", "11:00", "12:00"],
    startHour: 9,
    endHour: 13,
  },
  AFTERNOON: {
    name: "Tarde",
    schedule: "13h-18h",
    times: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    startHour: 13,
    endHour: 19,
  },
  EVENING: {
    name: "Noite",
    schedule: "19h-21h",
    times: ["19:00", "20:00", "21:00"],
    startHour: 19,
    endHour: 22,
  },
} as const;

export type PeriodKey = keyof typeof SCHEDULE_PERIODS;
