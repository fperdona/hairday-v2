import Text from "./core-components/text";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <Text variant="body-lg-bold" as="h1">
        Hairday
      </Text>
      <Text variant="body-md">Sistema de agendamento</Text>
      <Text variant="body-sm" className="text-gray-400">
        Versão 2.0
      </Text>
    </div>
  );
}
