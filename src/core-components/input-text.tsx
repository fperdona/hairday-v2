import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import Icon from "./icon";

export const inputTextVariants = cva(
  `
    border-1 border-solid border-gray-500 rounded-lg focus:border-yellow
    bg-transparent outline-none h-12 text-md justify-center p-3 text-gray-200
    placeholder:text-gray-400 w-full
  `,
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface InputTextProps
  extends
    VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size"> {
  icon?: React.FC<React.ComponentProps<"svg">>;
}

export default function InputText({
  size,
  className,
  icon,
  ...props
}: InputTextProps) {
  if (icon) {
    return (
      <div className="relative flex items-center">
        <Icon
          svg={icon}
          className="absolute left-2 h-5 fill-yellow pointer-events-none"
        />
        <input
          className={cx(
            inputTextVariants({ size }),
            textVariants(),
            "pl-11",
            className
          )}
          {...props}
        />
      </div>
    );
  }

  return (
    <input
      className={cx(inputTextVariants({ size }), textVariants(), className)}
      {...props}
    />
  );
}
