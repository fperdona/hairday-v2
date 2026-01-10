import PeriodCard from "../components/period-card";
import SunHorizon from "../assets/icons/sun-horizon.svg?react";
import { useOutletContext } from "react-router";

export default function PageHome() {
  const { appointments, removeAppointment } = useOutletContext<{
    appointments: any[];
    removeAppointment: (id: string) => void;
  }>();

  return (
    <div className="flex flex-col gap-6">
      <PeriodCard
        icon={SunHorizon}
        period="Manhã"
        schedule="9h - 12h"
        appointments={appointments}
        onDelete={removeAppointment}
      />
      <PeriodCard
        icon={SunHorizon}
        period="Tarde"
        schedule="13h - 18h"
        appointments={appointments}
        onDelete={removeAppointment}
      />
      <PeriodCard
        icon={SunHorizon}
        period="Noite"
        schedule="19h - 21h"
        appointments={appointments}
        onDelete={removeAppointment}
      />
    </div>
  );
}
