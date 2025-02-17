import React from "react";
import { cn } from "@/utils/cn"; // Adjust the import path as needed

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // Accepts text, icon, or both
  variant?: "solid" | "outlined"; // Solid or outlined button
  className?: string; // Additional custom classes
}

export default function Button({
  children,
  variant = "solid",
  className,
  ...props // Collect other button attributes like type, disabled, etc.
}: ButtonProps) {
  return (
    <button
      {...props} // Spread the additional props here
      className={cn(
        "w-fit text-[13px] text-white py-6 px-8 rounded-full flex items-center justify-center transition-all",
        variant === "solid" ? "bg-brand" : "border border-brand",
        className
      )}
    >
      {children}
    </button>
  );
}
