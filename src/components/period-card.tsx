import Text from "../core-components/text";
import Icon from "../core-components/icon";
import ButtonIcon from "../core-components/button-icon";
import Trash from "../assets/icons/trash.svg?react";

interface PeriodCardProps {
  icon: React.FC<React.ComponentProps<"svg">>;
  period: string;
  schedule: string;
  appointments?: Array<{
    id: string;
    time: string;
    clientName: string;
  }>;
  onDelete?: (id: string) => void;
}

export default function PeriodCard({
  icon,
  period,
  schedule,
  appointments = [],
  onDelete,
}: PeriodCardProps) {
  return (
    <div className="flex flex-col border rounded-lg border-gray-600">
      {/* Cabeçalho do período */}
      <div className="flex items-center justify-between py-3 px-5 border-b border-gray-600">
        <div className="flex items-center gap-2">
          <Icon svg={icon} className="h-5 fill-yellow" />
          <Text className="text-gray-200 text-sm">{period}</Text>
        </div>
        <Text className="text-gray-400">{schedule}</Text>
      </div>

      {/* Lista de agendamentos */}
      <div className="flex flex-col gap-4 p-4">
        {appointments.length === 0 ? (
          <Text className="text-gray-400 text-center text-sm py-4">
            Nenhum agendamento
          </Text>
        ) : (
          appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between"
            >
              <div className="flex gap-4">
                <Text variant="body-sm-bold" className="text-gray-200">
                  {appointment.time}
                </Text>
                <Text className="text-gray-200">{appointment.clientName}</Text>
              </div>
              <div className="px-4">
                <ButtonIcon
                  icon={Trash}
                  onClick={() => onDelete && onDelete(appointment.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
