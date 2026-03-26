import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const cardsVariants = cva(
  `rounded border border-solid border-gray-200 bg-white shadow-sm`,
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },

    defaultVariants: {
      size: "none",
    },
  },
);

export interface CardsProps
  extends VariantProps<typeof cardsVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: CardsProps) {
  return React.createElement(
    as,
    {
      className: cardsVariants({ size, className }),
      ...props,
    },
    children,
  );
}
