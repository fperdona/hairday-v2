export function isValidClientName(name: string): boolean {
  return name.trim().length >= 3;
}

export function isDateInPast(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const compareDate = new Date(date);
  compareDate.setHours(0, 0, 0, 0);
  return compareDate < today;
}

export function validateAppointment(
  date: Date,
  time: string,
  clientName: string
): { valid: boolean; error?: string } {
  if (isDateInPast(date)) {
    return { valid: false, error: "Não é possível agendar em datas passadas" };
  }

  if (!isValidClientName(clientName)) {
    return { valid: false, error: "Nome deve ter pelo menos 3 caracteres" };
  }

  if (!time) {
    return { valid: false, error: "Selecione um horário" };
  }

  return { valid: true };
}
