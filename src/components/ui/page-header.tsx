import * as React from "react";

import { cn } from "@/lib/utils";

function PageHeader({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex flex-col gap-0 border-b", className)}>
			{children}
		</div>
	);
}

function PageHeaderBreadcrumb({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("px-6 pt-4 pb-2 text-sm text-muted-foreground", className)}>
			{children}
		</div>
	);
}

function PageHeaderMeta({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4", className)}>
			{children}
		</div>
	);
}

function PageHeaderIcon({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex size-12 shrink-0 items-center justify-center rounded-full border bg-muted text-muted-foreground ", className)}>
			{children}
		</div>
	);
}

function PageHeaderSummary({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex min-w-0 flex-1 flex-col gap-1", className)}>
			{children}
		</div>
	);
}

function PageHeaderTitle({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<h1 className={cn("flex items-center gap-1 font-semibold text-xl", className)}>
			{children}
		</h1>
	);
}

function PageHeaderDescription({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<p className={cn("text-muted-foreground text-sm leading-tight", className)}>
			{children}
		</p>
	);
}

function PageHeaderAside({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center", className)}>
			{children}
		</div>
	);
}

function PageHeaderNavigationTabs({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("flex items-end gap-1 px-6 pt-2", className)}>
			{children}
		</div>
	);
}

export {
	PageHeader,
	PageHeaderBreadcrumb,
	PageHeaderMeta,
	PageHeaderIcon,
	PageHeaderSummary,
	PageHeaderTitle,
	PageHeaderDescription,
	PageHeaderAside,
	PageHeaderNavigationTabs,
};


