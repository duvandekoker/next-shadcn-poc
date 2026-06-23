import * as React from "react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

function PageSection({ children, className, bordered = true }: { children: React.ReactNode; className?: string; bordered?: boolean }) {
	return (
		<div className={cn("flex flex-col gap-0 overflow-hidden rounded-lg", bordered && "border", className)}>
			{children}
		</div>
	);
}

function PageSectionMeta({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4", className)}>
			{children}
		</div>
	);
}

function PageSectionSummary({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex min-w-0 flex-1 flex-col gap-1", className)}>
			{children}
		</div>
	);
}

function PageSectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<h3 className={cn("font-semibold text-lg leading-snug", className)}>
			{children}
		</h3>
	);
}

function PageSectionDescription({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<p className={cn("text-muted-foreground text-sm leading-relaxed", className)}>
			{children}
		</p>
	);
}

function PageSectionAside({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex shrink-0 items-center gap-2", className)}>
			{children}
		</div>
	);
}

function PageSectionContent({ children, className, showSeparator = true }: { children: React.ReactNode; className?: string; showSeparator?: boolean }) {
	return (
		<>
			{showSeparator && <Separator />}
			<div className={cn("p-6", className)}>{children}</div>
		</>
	);
}

export {
	PageSection,
	PageSectionMeta,
	PageSectionSummary,
	PageSectionTitle,
	PageSectionDescription,
	PageSectionAside,
	PageSectionContent,
};






