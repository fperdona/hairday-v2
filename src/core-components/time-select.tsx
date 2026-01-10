import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const timeSelection = cva(
  `
    inline-flex items-center justify-center cursor-pointer transition 
    border-2 border-gray-500 bg-gray-600 text-gray-200
    hover:bg-gray-500 rounded-lg 
    `,
  {
    variants: {
      size: {
        sm: "w-19 h-10 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none bg-gray-900",
      },
      selected: {
        true: "border-yellow bg-gray-700 text-yellow hover:border-yellow",
      },
    },
    defaultVariants: {
      size: "sm",
      disabled: false,
      selected: false,
    },
  }
);

interface TimeSelectionProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof timeSelection> {
  time: string;
}

export const timeSelectionTextVariants = cva("", {
  variants: {
    selected: {
      true: "text-yellow",
      false: "text-gray-200",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export default function TimeSelection({
  size,
  disabled,
  selected,
  className,
  time,
  ...props
}: TimeSelectionProps) {
  return (
    <button
      className={timeSelection({ className, size, disabled, selected })}
      {...props}
    >
      <Text className={timeSelectionTextVariants({ selected })}>{time}</Text>
    </button>
  );
}
