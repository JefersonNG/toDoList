import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import Skeleton from "./skeleton";
import spinnerIcon from "../assets/icons/spinner.svg?react";

const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-pink-base hover:bg-pink-dark",
        tertiary: "bg-transparent hover:bg-pink-base",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },

      handle: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
      handle: false,
    },
  },
);

const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-gray-100 group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-100",
    },
    size: {
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export interface ButtonIconProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
  handle?: boolean;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  handle,
  ...props
}: ButtonIconProps) {
  if (loading)
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: "none", size, className })}
      />
    );
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon
        className={buttonIconIconVariants({ variant, size })}
        svg={handle ? spinnerIcon : icon}
        animate={handle}
      />
    </button>
  );
}
