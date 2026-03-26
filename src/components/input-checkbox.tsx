import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import CheckedIcon from "../assets/icons/Check-Regular.svg?react";
import Skeleton from "./skeleton";

const inputCheckboxWrapperVariants = cva(
  "inline-flex item-center justify-center relative group",
);

const inputCheckboxVariants = cva(
  `appearance-none peer flex items-center justify-center cursor-pointer   transition overflow-hidden`,
  {
    variants: {
      variant: {
        none: "",
        default: `border-2 border-solid border-green-base
  hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark `,
      },
      size: {
        md: "w-5 h-5 rounded-md",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  },
);

const inputCheckboxIconVariants = cva(
  "absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white",
  {
    variants: {
      size: {
        md: "h-3 w-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface InputCheckboxProps
  extends
    VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function InputCheckbox({
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckboxProps) {
  if (loading)
    return (
      <Skeleton
        className={inputCheckboxVariants({ variant: "none", size, className })}
      />
    );
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        className={inputCheckboxVariants({ size, disabled, className })}
        type="checkbox"
        {...props}
      />

      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckedIcon} />
    </label>
  );
}
