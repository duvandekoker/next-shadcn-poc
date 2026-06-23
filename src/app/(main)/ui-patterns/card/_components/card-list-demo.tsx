"use client";

import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chip, type ChipProps } from "@/components/ui/chip";
import { StatusDot } from "@/components/ui/status-dot";

function getChipVariant(status: string): ChipProps["variant"] {
  switch (status) {
    case "Operational":
      return "success";
    case "Degraded":
    case "Partial Outage":
      return "warning";
    case "Major Outage":
      return "danger";
    default:
      return "default";
  }
}

export function CardListDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid @5xl/main:grid-cols-3 @xl/main:grid-cols-2 grid-cols-1 gap-4">
        {/* Example 1 — Default Card */}
        <Card>
          <CardHeader>
            <CardTitle>Default Card (text-lg)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              The card component supports a size prop that defaults to &quot;default&quot; for standard spacing and
              sizing.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>

        {/* Example 2 — Header with Border */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Header with Border</CardTitle>
            <CardDescription>This is a card with a header that has a bottom border.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              The header has a border-b class applied, creating a visual separation between the header and content
              sections.
            </p>
          </CardContent>
        </Card>

        {/* Example 3 — Custom Padding with Action */}
        <Card className="gap-0 p-0">
          <CardHeader className="flex items-center justify-between px-4 py-2">
            <CardTitle>Header</CardTitle>
            <CardAction>
              <Button variant="outline" className="w-full">
                Action
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="border-y px-4 py-3">
            <p className="text-muted-foreground text-sm">
              The footer has a border-t class applied, creating a visual separation between the content and footer
              sections.
            </p>
          </CardContent>
          <CardFooter className="border-none px-4 py-3">
            <Button variant="outline" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>

        {/* Example 4 — Link Footer */}
        <Card className="gap-3">
          <CardHeader>
            <CardTitle>Need help with a Claim?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Go to this step by step guideline process on how to certify for your weekly benefits.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0">
              See our guideline
              <ExternalLink aria-hidden="true" />
            </Button>
          </CardFooter>
        </Card>

        {/* Example 6 — Chip Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Chip Variants</CardTitle>
            <CardDescription>Status and filter chips with multiple variants.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <Chip variant="default" size="md">
                Default
              </Chip>
              <Chip variant="success" size="md" selected>
                Operational
              </Chip>
              <Chip variant="warning" size="md" selected>
                Degraded
              </Chip>
              <Chip variant="danger" size="md" selected>
                Major Outage
              </Chip>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip variant="default" size="md" onRemove={() => undefined}>
                Removable
              </Chip>
              <Chip variant="success" size="md" selected onRemove={() => undefined}>
                Operational
              </Chip>
              <Chip variant="danger" size="md" selected onRemove={() => undefined}>
                Danger
              </Chip>
              <Chip variant="default" size="md" disabled>
                Disabled
              </Chip>
            </div>
          </CardContent>
        </Card>

        {/* Example 7 — Catalog Card */}
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Category type</CardDescription>
            <CardTitle className="text-xl">Product Alpha</CardTitle>
            <CardAction>
              <Chip variant={getChipVariant("Operational")} selected size="md">
                Operational
              </Chip>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-muted-foreground text-sm">
              A short description of the product and what it does for the end user.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["API", "Web", "Enterprise"].map((tag) => (
                <Chip key={tag} variant="default" size="md" showDot={false}>
                  {tag}
                </Chip>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-4 flex items-center justify-between text-sm">
            <Link
              href="#"
              className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Learn more
            </Link>
            <Button size="sm" variant="outline">
              Launch
            </Button>
          </CardFooter>
        </Card>

        {/* Example 8 — Catalog Card List Demo */}
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Category type</CardDescription>
            <CardTitle className="flex items-center gap-2 text-xl">
              <StatusDot status="online" pulse size="md" />
              Product Alpha
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-muted-foreground text-sm">
              A short description of the product and what it does for the end user.
            </p>
            <div className="mt-4 mb-2 flex flex-wrap gap-1.5">
              {["API", "Web", "Enterprise"].map((tag) => (
                <Chip key={tag} variant="default" size="md" showDot={false}>
                  {tag}
                </Chip>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between text-sm">
            <Link
              href="#"
              className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Learn more
            </Link>
            <Button size="sm" variant="outline">
              Launch
            </Button>
          </CardFooter>
        </Card>

        {/* Example 5 — Depth Effect */}
        <div className="relative size-fit w-full">
          <Card className="relative z-1 w-full">
            <CardHeader>
              <CardTitle>Depth Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                The card component supports a size prop that defaults to &quot;default&quot; for standard spacing and
                sizing.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Action
              </Button>
            </CardFooter>
          </Card>
          <div className="-bottom-3 absolute inset-4 z-0 rounded-lg border bg-card shadow-black/1 shadow-md" />
          <div className="-bottom-1.5 absolute inset-2 z-0 rounded-lg border bg-card shadow-black/1 shadow-md" />
        </div>
      </div>
    </div>
  );
}
