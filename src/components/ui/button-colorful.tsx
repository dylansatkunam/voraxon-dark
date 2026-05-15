import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export function ButtonColorful({
  className,
  label = "Book a Call",
  ...props
}: ButtonColorfulProps) {
  return (
    <Button
      className={cn(
        "relative h-10 overflow-hidden rounded-full px-6",
        "border border-[#4ade80]/30 bg-zinc-900",
        "transition-all duration-200 hover:border-[#4ade80]/50",
        "group",
        className
      )}
      {...props}
    >
      {/* Voraxon green gradient glow */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-[#166534] via-[#1f9955] to-[#4ade80]",
          "opacity-50 group-hover:opacity-85",
          "blur transition-opacity duration-500"
        )}
      />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2">
        <span className="text-white font-semibold">{label}</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
      </div>
    </Button>
  );
}
