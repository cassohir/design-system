import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean; // This is a custom prop
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-green-300 rounded font-semibold text-gray-100 text-sm w-full transition-colors hover:bg-green-200 focus:ring-2 ring-white",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
