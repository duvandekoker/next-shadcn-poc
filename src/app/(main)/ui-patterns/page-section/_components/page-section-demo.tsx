"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PageSection,
  PageSectionAside,
  PageSectionContent,
  PageSectionDescription,
  PageSectionMeta,
  PageSectionSummary,
  PageSectionTitle,
} from "@/components/ui/page-section";

export function PageSectionDemo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Section 1 — single action */}
      <PageSection>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Section Title</PageSectionTitle>
            <PageSectionDescription>
              This is a section with a title and description, plus optional actions.
            </PageSectionDescription>
          </PageSectionSummary>
          <PageSectionAside>
            <Button size="sm" variant="outline">
              Action
            </Button>
          </PageSectionAside>
        </PageSectionMeta>
        <PageSectionContent>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                Section content goes here. This could be forms, tables, or any other content.
              </p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>

      {/* Section 2 — multiple actions */}
      <PageSection>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Section with Multiple Actions</PageSectionTitle>
            <PageSectionDescription>
              This demonstrates PageSection with multiple actions in the Aside component.
            </PageSectionDescription>
          </PageSectionSummary>
          <PageSectionAside>
            <Button size="sm" variant="outline">
              Secondary
            </Button>
            <Button size="sm">Primary Action</Button>
          </PageSectionAside>
        </PageSectionMeta>
        <PageSectionContent>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                The Aside component positions actions horizontally aligned with the section summary, providing a clear
                separation between description and actions.
              </p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>

      {/* Section 3 — another section */}
      <PageSection>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Another Section</PageSectionTitle>
            <PageSectionDescription>A second section demonstrating the repeating pattern.</PageSectionDescription>
          </PageSectionSummary>
          <PageSectionAside>
            <Button size="sm" variant="outline">
              Action
            </Button>
          </PageSectionAside>
        </PageSectionMeta>
        <PageSectionContent>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                Section content goes here. This could be forms, tables, or any other content.
              </p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>

      {/* Section 4 — no aside */}
      <PageSection>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Section without Actions</PageSectionTitle>
            <PageSectionDescription>
              The aside is optional — sections can be used for read-only content or informational blocks.
            </PageSectionDescription>
          </PageSectionSummary>
        </PageSectionMeta>
        <PageSectionContent>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">Read-only content with no actions required.</p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>
    </div>
  );
}

export function PageSectionTabOverview() {
  return (
    <div className="flex flex-col gap-6">
      {/* Basic section */}
      <PageSection bordered={false}>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Section Title</PageSectionTitle>
            <PageSectionDescription>
              This is a section with a title and description, plus optional actions.
            </PageSectionDescription>
          </PageSectionSummary>
          <PageSectionAside>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </PageSectionAside>
        </PageSectionMeta>
        <PageSectionContent showSeparator={false}>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                Section content goes here. This could be forms, tables, or any other content.
              </p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>

      {/* Section with multiple actions */}
      <PageSection bordered={false}>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Section with Multiple Actions</PageSectionTitle>
            <PageSectionDescription>
              Sections can have multiple actions in the aside area, typically a secondary and a primary action.
            </PageSectionDescription>
          </PageSectionSummary>
          <PageSectionAside>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save changes</Button>
          </PageSectionAside>
        </PageSectionMeta>
        <PageSectionContent showSeparator={false}>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">Content area with primary and secondary actions.</p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>

      {/* Section without aside */}
      <PageSection bordered={false}>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Section without Actions</PageSectionTitle>
            <PageSectionDescription>
              The aside is optional — sections can be used for read-only content or informational blocks.
            </PageSectionDescription>
          </PageSectionSummary>
        </PageSectionMeta>
        <PageSectionContent showSeparator={false}>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">Read-only content with no actions required.</p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>
    </div>
  );
}

export function PageSectionWithAside() {
  return (
    <div className="flex flex-col gap-6">
      <PageSection bordered={false}>
        <PageSectionMeta>
          <PageSectionSummary>
            <PageSectionTitle>Section Title</PageSectionTitle>
            <PageSectionDescription>
              This demonstrates PageSection with actions in the Aside component.
            </PageSectionDescription>
          </PageSectionSummary>
          <PageSectionAside>
            <Button variant="outline" size="sm">
              Secondary
            </Button>
            <Button size="sm">Primary Action</Button>
          </PageSectionAside>
        </PageSectionMeta>
        <PageSectionContent showSeparator={false}>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                The Aside component positions actions horizontally aligned with the section summary, providing a clear
                separation between description and actions.
              </p>
            </CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>
    </div>
  );
}
