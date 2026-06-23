import Link from "next/link";

import { BotIcon } from "lucide-react";

import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import {
  PageHeader,
  PageHeaderBreadcrumb,
  PageHeaderDescription,
  PageHeaderIcon,
  PageHeaderMeta,
  PageHeaderNavigationTabs,
  PageHeaderSummary,
  PageHeaderTitle,
} from "@/components/ui/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CustomerContent } from "./_components/customer/content";
import { SystemContent } from "./_components/system/content";

export default function SystemCopilotPage() {
  return (
    <div className="@container/main flex flex-col">
      <Tabs defaultValue="system">
        <div className="-mx-4 -mt-4 mb-6 md:-mx-6 md:-mt-6">
          <PageHeader>
            <PageHeaderBreadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard/default">Pages</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>System Copilot</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </PageHeaderBreadcrumb>
            <PageHeaderMeta>
              <PageHeaderIcon>
                <BotIcon className="size-5" />
              </PageHeaderIcon>
              <PageHeaderSummary>
                <PageHeaderTitle>System Copilot</PageHeaderTitle>
                <PageHeaderDescription>
                  Manage and explore vehicle systems and customer functions.
                </PageHeaderDescription>
              </PageHeaderSummary>
            </PageHeaderMeta>
            <PageHeaderNavigationTabs>
              <TabsList variant="line" className="gap-4">
                <TabsTrigger value="system">System</TabsTrigger>
                <TabsTrigger value="customer">Customer</TabsTrigger>
              </TabsList>
            </PageHeaderNavigationTabs>
          </PageHeader>
        </div>
        <TabsContent value="system">
          <SystemContent />
        </TabsContent>
        <TabsContent value="customer">
          <CustomerContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}

