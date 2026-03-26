import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },

  defaultVariants: {
    animate: false,
  },
});

export interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  children,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
