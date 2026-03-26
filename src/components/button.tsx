import React from "react";
import Icon from "./icon";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";
import spinnerIcon from "../assets/icons/spinner.svg?react";

const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 py-4 px-5",
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
      size: "md",
      disabled: false,
      handle: false,
    },
  },
);

const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  handle?: boolean;
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon,
  handle,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className, disabled })}
      {...props}
    >
      {icon && (
        <Icon
          svg={handle ? spinnerIcon : icon}
          className={buttonIconVariants({ variant, size })}
          animate={handle}
        />
      )}

      <Text className={buttonTextVariants({ variant })} variant="body-md">
        {children}
      </Text>
    </button>
  );
}
