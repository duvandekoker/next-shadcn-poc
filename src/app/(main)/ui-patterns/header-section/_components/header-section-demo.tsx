"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Database } from "lucide-react";

import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderAside,
  PageHeaderBreadcrumb,
  PageHeaderDescription,
  PageHeaderIcon,
  PageHeaderMeta,
  PageHeaderNavigationTabs,
  PageHeaderSummary,
  PageHeaderTitle,
} from "@/components/ui/page-header";
import { cn } from "@/lib/utils";

const breadcrumbItems = [
  { label: "Home", href: "/project/demo" },
  { label: "Header Section", href: "/project/demo/functions" },
];

const navigationItems = [
  { label: "Overview", href: "/dashboard/header-section" },
  { label: "Invocations", href: "/dashboard/header-section?tab=invocations" },
  { label: "Logs", href: "/dashboard/header-section?tab=logs" },
];

export function HeaderSectionDemo() {
  const pathname = usePathname();

  return (
    <PageHeader>
      <PageHeaderBreadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </PageHeaderBreadcrumb>

      <PageHeaderMeta>
        <PageHeaderIcon>
          <Database className="size-5" />
        </PageHeaderIcon>
        <PageHeaderSummary>
          <PageHeaderTitle>Header Section (text-xl)</PageHeaderTitle>
          <PageHeaderDescription>
            Serverless functions that run at the edge with low latency and automatic scaling.
          </PageHeaderDescription>
        </PageHeaderSummary>
        <PageHeaderAside>
          <Button size="sm" variant="outline" className="w-full sm:w-auto">
            Secondary
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            Deploy Function
          </Button>
        </PageHeaderAside>
      </PageHeaderMeta>

      <PageHeaderNavigationTabs>
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "-mb-px border-b-2 px-3 py-2 font-medium text-sm transition-colors",
              pathname === item.href
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}
      </PageHeaderNavigationTabs>
    </PageHeader>
  );
}
