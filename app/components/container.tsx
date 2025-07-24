import { cn } from "../lib/utils";
import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("bg-white dark:bg-neutral-900 relative mx-auto h-full w-full max-w-auto transition-colors", className)}>
            {children}
        </div>
    )
}