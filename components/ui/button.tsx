import React from "react";
import { cva } from "class-variance-authority";

const styles = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-3 py-2",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        outline: "border border-slate-200 hover:bg-slate-50",
        ghost: "hover:bg-slate-100"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4"
      }
    },
    defaultVariants: { variant: "default", size: "md" }
  }
);

export const Button = ({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost"; size?: "sm" | "md" }) => {
  return <button className={styles({ variant, size }) + (className ? ` ${className}` : "")} {...props} />;
};
