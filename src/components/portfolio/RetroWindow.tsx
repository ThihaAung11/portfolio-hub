import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  tone?: "green" | "success" | "blue" | "pink";
};

const toneClass = {
  green: "retro-titlebar",
  success: "retro-titlebar retro-titlebar-green",
  blue: "retro-titlebar retro-titlebar-blue",
  pink: "retro-titlebar retro-titlebar-pink",
};

export const RetroWindow = ({ title, children, className, bodyClassName, tone = "green" }: RetroWindowProps) => (
  <section className={cn("retro-window dithered", className)}>
    <div className={toneClass[tone]}>
      <span>{title}</span>
      <span className="flex items-center gap-1">
        <span className="retro-control">_</span>
        <span className="retro-control">x</span>
      </span>
    </div>
    <div className={cn("p-5 md:p-8", bodyClassName)}>{children}</div>
  </section>
);
