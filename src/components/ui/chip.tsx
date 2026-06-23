"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { StatusDot } from "@/components/ui/status-dot";
import type { StatusDotProps } from "@/components/ui/status-dot";

export interface ChipProps extends React.HTMLAttributes<HTMLButtonElement> {
	selected?: boolean;
	onRemove?: () => void;
	variant?: "default" | "success" | "warning" | "danger";
	size?: "sm" | "md";
	disabled?: boolean;
	showDot?: boolean;
}

const variantToStatus: Record<NonNullable<ChipProps["variant"]>, StatusDotProps["status"]> = {
	default: "offline",
	success: "online",
	warning: "away",
	danger: "busy",
};

const variantToDotSize: Record<NonNullable<ChipProps["size"]>, StatusDotProps["size"]> = {
	sm: "sm",
	md: "sm",
};

export function Chip({
	selected = false,
	onRemove,
	variant = "default",
	size = "sm",
	disabled = false,
	showDot = true,
	className,
	children,
	...props
}: ChipProps) {
	const variants: Record<string, { base: string; active: string }> = {
		default: {
			base: "border border-foreground/25! text-foreground/60 hover:border-foreground/40! hover:text-foreground/60",
			active: "border border-primary/60! bg-primary/10 text-primary",
		},
		success: {
			base: "border border-emerald-400/20! text-emerald-400/40 hover:border-emerald-400/50! hover:text-emerald-400/70",
			active: "border border-emerald-400/60! bg-emerald-400/10 text-emerald-400",
		},
		warning: {
			base: "border border-amber-400/20! text-amber-400/40 hover:border-amber-400/50! hover:text-amber-400/70",
			active: "border border-amber-400/60! bg-amber-400/10 text-amber-400",
		},
		danger: {
			base: "border border-red-400/20! text-red-400/40 hover:border-red-400/50! hover:text-red-400/70",
			active: "border border-red-400/60! bg-red-400/10 text-red-400",
		},
	};

	const v = variants[variant];

	return (
		<button
			type="button"
			disabled={disabled}
			data-slot="chip"
			className={cn(
				"inline-flex items-center gap-1.5 rounded-full font-sans font-semibold uppercase tracking-widest transition-all",
				size === "sm" ? "px-2.5 py-0.5 text-[8px]" : "px-3 py-1 text-[10px]",
				disabled && "cursor-not-allowed opacity-40",
				selected ? v.active : v.base,
				className,
			)}
			{...props}
		>
			{showDot && (
				<StatusDot
					status={variantToStatus[variant]}
					size={variantToDotSize[size]}
					pulse={selected && variant !== "default"}
				/>
			)}
			{children}
			{onRemove && (
				<span
					role="button"
					tabIndex={0}
					onClick={(e) => {
						e.stopPropagation();
						onRemove();
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e.stopPropagation();
							onRemove();
						}
					}}
					className="ml-0.5 flex h-3 w-3 items-center justify-center rounded-full hover:bg-foreground/10"
				>
					<svg width="5" height="5" viewBox="0 0 5 5" fill="none">
						<path d="M0.5 0.5l4 4M4.5 0.5l-4 4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
					</svg>
				</span>
			)}
		</button>
	);
}



