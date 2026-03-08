import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-primary/90 shadow-md hover:shadow-lg dark:text-background dark:bg-foreground dark:hover:bg-foreground/90",
    secondary: "bg-secondary text-primary hover:bg-secondary/90 shadow-md hover:shadow-lg dark:bg-secondary dark:text-primary dark:hover:bg-secondary/90",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 dark:border-foreground dark:text-foreground dark:hover:bg-foreground/10",
    ghost: "text-primary hover:bg-primary/10 dark:text-foreground dark:hover:bg-foreground/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base min-w-[120px]",
    lg: "px-8 py-4 text-lg min-w-[160px]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
