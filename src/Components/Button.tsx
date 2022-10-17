import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean; // This is a custom prop
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-green-300 rounded font-semibold text-gray-100 text-sm w-full transition-colors hover:bg-green-200 focus:ring-2 ring-white",
      )}
    >
      {children}
    </Comp>
  );
}
