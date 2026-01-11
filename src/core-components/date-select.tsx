import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import { textVariants } from "./text";

registerLocale("pt-BR", ptBR);

const customStyles = `
  .react-datepicker-wrapper {
    width:100%;
  }
  .react-datepicker {
    background-color: var(--color-gray-900);
    border: 2px solid var(--color-gray-500);
    border-radius: 8px;
  }
  
  .react-datepicker__header {
    background-color: var(--color-gray-800);
    border-bottom: 1px solid var(--color-gray-500);
  }
  
  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: var(--color-gray-200);
  }
  
  .react-datepicker__day {
    color: var(--color-gray-200);
  }
  
  .react-datepicker__day:hover {
    background-color: var(--color-gray-600);
    color: var(--color-gray-900);
  }
  
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: var(--color-yellow) !important;
    color: var(--color-gray-900) !important;
    font-weight: bold;
  }
  
  .react-datepicker__day--disabled {
    color: var(--color-gray-500);
    cursor: not-allowed;
  }
  
  .react-datepicker__navigation-icon::before {
    border-color: var(--color-gray-200);
  }
  
  .react-datepicker__navigation:hover *::before {
    border-color: var(--color-yellow);
  }
`;

export const dateSelectVariants = cva(
  `
    relative flex items-center justify-between gap-2
    border-2 border-solid border-gray-500 rounded-lg
    bg-transparent outline-none h-12 px-3 text-gray-200
    cursor-pointer transition
    hover:border-gray-400 w-full
  `,
  {
    variants: {
      size: {
        md: "h-12",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface DateSelectProps extends VariantProps<typeof dateSelectVariants> {
  selected?: Date;
  onChange?: (date: Date | null) => void;
  calendarBlank?: React.FC<React.ComponentProps<"svg">>;
  caretDown?: React.FC<React.ComponentProps<"svg">>;
  disabled?: boolean;
  className?: string;
  minDate?: Date; // Adiciona esta linha
}

export default function DateSelect({
  size,
  disabled,
  className,
  selected,
  onChange,
  calendarBlank,
  caretDown,
  minDate, // Adiciona aqui
}: DateSelectProps) {
  return (
    <>
      <style>{customStyles}</style>
      <div>
        <DatePicker
          selected={selected}
          onChange={onChange}
          disabled={disabled}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          minDate={minDate} // Adiciona esta linha
          customInput={
            <button
              className={cx(dateSelectVariants({ size, disabled }), className)}
              type="button"
            >
              {calendarBlank && (
                <Icon svg={calendarBlank} className="h-5 fill-yellow" />
              )}
              <span className={cx(textVariants(), "flex-1 text-left")}>
                {selected
                  ? selected.toLocaleDateString("pt-BR")
                  : "Selecione uma data"}
              </span>
              {caretDown && (
                <Icon svg={caretDown} className="h-4 fill-gray-200" />
              )}
            </button>
          }
        />
      </div>
    </>
  );
}
