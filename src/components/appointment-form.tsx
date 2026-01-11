import { useState } from "react";
import Text from "../core-components/text";
import DateSelect from "../core-components/date-select";
import InputText from "../core-components/input-text";
import TimeSelection from "../core-components/time-select";
import Button from "../core-components/button";
import CalendarBlank from "../assets/icons/calendar-blank.svg?react";
import CaretDown from "../assets/icons/caret-down.svg?react";
import UserSquare from "../assets/icons/user-square.svg?react";
import SunHorizon from "../assets/icons/sun-horizon.svg?react";
import CloudSun from "../assets/icons/cloud-sun.svg?react";
import MoonStars from "../assets/icons/moon-stars.svg?react";
import type { Appointment } from "../models/appointment";
import { isTimeSlotBooked, formatDateToBR } from "../helpers/appointment-utils";
import { SCHEDULE_PERIODS } from "../constants/schedule";

interface AppointmentFormProps {
  onSchedule: (date: string, time: string, clientName: string) => void;
  appointments: Appointment[];
}

export default function AppointmentForm({
  onSchedule,
  appointments,
}: AppointmentFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");

  function handleSchedule() {
    const formattedDate = formatDateToBR(selectedDate);
    onSchedule(formattedDate, selectedTime, clientName.trim());

    // Limpa o formulário
    setSelectedTime("");
    setClientName("");
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Text variant="body-lg-bold">Agende um atendimento</Text>
        <Text className="text-gray-200 text-sm">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      {/* Data */}
      <div className="flex flex-col gap-2 ">
        <Text variant="body-md-bold" className="text-gray-200">
          Data
        </Text>
        <DateSelect
          selected={selectedDate}
          onChange={(date) => date && setSelectedDate(date)}
          calendarBlank={CalendarBlank}
          caretDown={CaretDown}
          className="w-full"
        />
      </div>

      {/* Horários */}
      <div className="flex flex-col gap-4">
        <Text variant="body-md-bold" className="text-gray-200">
          Horários
        </Text>

        {/* Manhã */}
        <div className="flex flex-col gap-2">
          <Text className="text-gray-300 flex items-center">
            <SunHorizon className="h-4 fill-yellow" />
            {SCHEDULE_PERIODS.MORNING.name}
          </Text>
          <div className="flex flex-wrap gap-2">
            {SCHEDULE_PERIODS.MORNING.times.map((time) => (
              <TimeSelection
                key={time}
                time={time}
                selected={selectedTime === time}
                disabled={isTimeSlotBooked(appointments, selectedDate, time)}
                onClick={() => setSelectedTime(time)}
              />
            ))}
          </div>
        </div>

        {/* Tarde */}
        <div className="flex flex-col gap-2">
          <Text className="text-gray-300 flex items-center">
            <CloudSun className="h-4 fill-yellow" />
            {SCHEDULE_PERIODS.AFTERNOON.name}
          </Text>
          <div className="flex flex-wrap gap-2">
            {SCHEDULE_PERIODS.AFTERNOON.times.map((time) => (
              <TimeSelection
                key={time}
                time={time}
                selected={selectedTime === time}
                disabled={isTimeSlotBooked(appointments, selectedDate, time)}
                onClick={() => setSelectedTime(time)}
              />
            ))}
          </div>
        </div>

        {/* Noite */}
        <div className="flex flex-col gap-2">
          <Text className="text-gray-300 flex items-center">
            <MoonStars className="h-4 fill-yellow" />
            {SCHEDULE_PERIODS.EVENING.name}
          </Text>
          <div className="flex flex-wrap gap-2">
            {SCHEDULE_PERIODS.EVENING.times.map((time) => (
              <TimeSelection
                key={time}
                time={time}
                selected={selectedTime === time}
                disabled={isTimeSlotBooked(appointments, selectedDate, time)}
                onClick={() => setSelectedTime(time)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cliente */}
      <div className="flex flex-col gap-2">
        <Text variant="body-md-bold" className="text-gray-200">
          Cliente
        </Text>
        <InputText
          icon={UserSquare}
          placeholder="Nome do cliente"
          value={clientName}
          className="w-full"
          onChange={(e) => {
            setClientName(e.target.value);
          }}
        />
      </div>

      {/* Botão Agendar */}
      <Button
        disabled={
          !selectedTime || !clientName.trim() || clientName.trim().length < 3
        }
        onClick={handleSchedule}
      >
        AGENDAR
      </Button>
    </div>
  );
}
