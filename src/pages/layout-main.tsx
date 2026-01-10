import { Outlet } from "react-router";
import Logo from "../assets/images/logo.svg?react";
import Button from "../core-components/button";
import { useAppointments } from "../hooks/use-appointment";

export default function LayoutMain() {
  const { appointments, addAppointment, removeAppointment } = useAppointments();

  const handleAdd = () => {
    addAppointment({
      clientName: "João Silva" + appointments.length,
      date: "2026-01-10",
      time: "09:00",
    });
    console.log("✅ Adicionado! Total:", appointments.length + 1);
  };

  const handleRemove = () => {
    if (appointments.length > 0) {
      removeAppointment(appointments[0].id);
      console.log("❌ Removido! Total:", appointments.length - 1);
    }
  };

  console.log("📋 Appointments:", appointments);

  return (
    <>
      <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
        <div className="py-3 px-5 bg-gray-600 rounded-br-xl absolute top-0 left-0">
          <Logo />
        </div>

        <aside className="p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col gap-6 overflow-visible">
          <Button onClick={handleAdd}>Adicionar</Button>
          <Button onClick={handleRemove}>Remover Primeiro</Button>
        </aside>

        <div className="w-full px-28 py-20">
          <Outlet />
        </div>
      </main>
    </>
  );
}
