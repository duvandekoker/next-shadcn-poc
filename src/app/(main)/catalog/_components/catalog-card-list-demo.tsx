"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import type { StatusDotProps } from "@/components/ui/status-dot";
import { StatusDot } from "@/components/ui/status-dot";

type CatalogItem = {
  id: number;
  name: string;
  category: string;
  description: string;
  status: string;
  tags: string[];
};

const items: CatalogItem[] = [
  {
    id: 1,
    name: "Product Alpha",
    category: "Category type",
    description: "A short description of the product and what it does for the end user.",
    status: "Operational",
    tags: ["API", "Web", "Enterprise"],
  },
  {
    id: 2,
    name: "Product Beta",
    category: "Category type",
    description: "A short description of the product and what it does for the end user.",
    status: "Operational",
    tags: ["Mobile", "Consumer"],
  },
  {
    id: 3,
    name: "Product Gamma",
    category: "Category type",
    description: "A short description of the product and what it does for the end user.",
    status: "Degraded",
    tags: ["API", "Analytics"],
  },
  {
    id: 4,
    name: "Product Delta",
    category: "Category type",
    description: "A short description of the product and what it does for the end user.",
    status: "Partial Outage",
    tags: ["Web", "Consumer", "Beta"],
  },
  {
    id: 5,
    name: "Product Epsilon",
    category: "Category type",
    description: "A short description of the product and what it does for the end user.",
    status: "Major Outage",
    tags: ["Enterprise", "Analytics"],
  },
  {
    id: 6,
    name: "Product Zeta",
    category: "Category type",
    description: "A short description of the product and what it does for the end user.",
    status: "Operational",
    tags: ["Mobile", "API", "Beta"],
  },
];

function getStatusDotState(status: string): StatusDotProps["status"] {
  switch (status) {
    case "Operational":
      return "online";
    case "Degraded":
    case "Partial Outage":
      return "away";
    case "Major Outage":
      return "busy";
    default:
      return "offline";
  }
}

export function CatalogCardListDemo() {
  return (
    <div className="grid @5xl/main:grid-cols-4 @xl/main:grid-cols-2 grid-cols-1 gap-4 *:data-[slot=card]:shadow-xs dark:*:data-[slot=card]:bg-card">
      {items.map((item) => (
        <Card key={item.id} className="@container/card">
          <CardHeader>
            <CardDescription>{item.category}</CardDescription>
            <CardTitle className="flex items-center gap-2 text-xl">
              <StatusDot status={getStatusDotState(item.status)} pulse={item.status === "Operational"} size="md" />
              {item.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-muted-foreground text-sm">{item.description}</p>
            <div className="mt-4 mb-2 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <Chip key={tag} variant="default" size="md" showDot={false}>
                  {tag}
                </Chip>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between text-sm">
            <Link
              href={`/dashboard/catalog/${item.id}`}
              className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Learn more
            </Link>
            <Button size="sm" variant="outline">
              Launch
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
