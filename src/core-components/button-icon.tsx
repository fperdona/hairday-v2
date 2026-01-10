import { cva, type VariantProps } from "class-variance-authority";
import Icon from "../core-components/icon";

interface ButtonIconProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export const buttonIconVariants = cva(
  "transition cursor-pointer hover:fill-yellow-dark",
  {
    variants: {
      variant: {
        primary: "fill-yellow",
      },
      size: {
        sm: "w-4 h-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export default function ButtonIcon({
  variant,
  size,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button {...props}>
      <Icon className={buttonIconVariants({ size, variant })} svg={icon} />
    </button>
  );
}
