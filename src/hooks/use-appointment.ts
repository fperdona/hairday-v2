import { useState, useEffect } from "react";
import type { Appointment } from "../models/appointment";

const STORAGE_KEY = "hairday:appointments";

export function useAppointments() {
  // Inicializa do localStorage
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  // Salva no localStorage sempre que appointments mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment: Omit<Appointment, "id">) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: crypto.randomUUID(),
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  const removeAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  };

  return {
    appointments,
    addAppointment,
    removeAppointment,
  };
}
