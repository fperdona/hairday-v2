import { useState } from "react";
import PeriodCard from "../components/period-card";
import SunHorizon from "../assets/icons/sun-horizon.svg?react";
import CloudSun from "../assets/icons/cloud-sun.svg?react";
import MoonStars from "../assets/icons/moon-stars.svg?react";
import CalendarBlank from "../assets/icons/calendar-blank.svg?react";
import CaretDown from "../assets/icons/caret-down.svg?react";
import { useOutletContext } from "react-router";
import Text from "../core-components/text";
import DateSelect from "../core-components/date-select";
import { filterByDate, filterByPeriod } from "../helpers/appointment-utils";
import { SCHEDULE_PERIODS } from "../constants/schedule";

export default function PageHome() {
  const { appointments, removeAppointment } = useOutletContext<{
    appointments: any[];
    removeAppointment: (id: string) => void;
  }>();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const dayAppointments = filterByDate(appointments, selectedDate);
  const morningAppointments = filterByPeriod(dayAppointments, "MORNING");
  const afternoonAppointments = filterByPeriod(dayAppointments, "AFTERNOON");
  const eveningAppointments = filterByPeriod(dayAppointments, "EVENING");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <Text variant="body-lg-bold">Sua agenda</Text>
          <Text className="text-gray-200 text-sm">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>
        <DateSelect
          selected={selectedDate}
          calendarBlank={CalendarBlank}
          caretDown={CaretDown}
          className="w-full"
          onChange={(date) => date && setSelectedDate(date)}
        />
      </div>

      {/* Cards de período */}
      <PeriodCard
        icon={SunHorizon}
        period={SCHEDULE_PERIODS.MORNING.name}
        schedule={SCHEDULE_PERIODS.MORNING.schedule}
        appointments={morningAppointments}
        onDelete={removeAppointment}
      />

      <PeriodCard
        icon={CloudSun}
        period={SCHEDULE_PERIODS.AFTERNOON.name}
        schedule={SCHEDULE_PERIODS.AFTERNOON.schedule}
        appointments={afternoonAppointments}
        onDelete={removeAppointment}
      />

      <PeriodCard
        icon={MoonStars}
        period={SCHEDULE_PERIODS.EVENING.name}
        schedule={SCHEDULE_PERIODS.EVENING.schedule}
        appointments={eveningAppointments}
        onDelete={removeAppointment}
      />
    </div>
  );
}
