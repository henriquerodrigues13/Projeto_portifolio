import * as React from "react";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "default", ...props },
  ref
) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default:
      "bg-primary text-primary-foreground shadow hover:bg-primary/90 active:scale-[0.98]",
    outline:
      "border border-input bg-background/40 backdrop-blur-md hover:bg-accent/10 hover:text-accent-foreground hover:border-primary/35",
    ghost: "hover:bg-accent/10 hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-11 px-8 py-2",
    lg: "h-12 px-10 text-[0.95rem]",
    sm: "h-9 px-4",
    icon: "h-10 w-10",
  };

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});

