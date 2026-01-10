import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const buttonVariants = cva(
  `
    flex items-center justify-center cursor-pointer
    transition rounded-lg
    w-full uppercase
    bg-yellow hover:bg-yellow-light
  `,
  {
    variants: {
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ className, disabled, size })}
      disabled={disabled === true}
      {...props}
    >
      <Text variant="body-sm-bold" className="text-gray-900">
        {children}
      </Text>
    </button>
  );
}
