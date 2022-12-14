import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean; // This is a custom prop
  className?: string; // This is a custom prop
}

export function Text({ size = "md", children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
        },

        className,
      )}
    >
      {children}
    </Comp>
  );
}
