import { ArrowUpRightIcon, BoltIcon, BookIcon, FolderIcon, type LucideIcon } from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Pages",
    items: [
      {
        title: "Default",
        url: "/dashboard/default",
        icon: FolderIcon,
      },
      {
        title: "Catalog",
        url: "/catalog",
        icon: FolderIcon,
      },
      {
        title: "UI Patterns",
        url: "/ui-patterns/page-section",
        icon: BoltIcon,
        subItems: [
          {
            title: "Page Section",
            url: "/ui-patterns/page-section",
            icon: ArrowUpRightIcon,
          },
          {
            title: "Header Section",
            url: "/ui-patterns/header-section",
            icon: ArrowUpRightIcon,
          },
          {
            title: "Card",
            url: "/ui-patterns/card",
            icon: ArrowUpRightIcon,
          },
          {
            title: "Table",
            url: "/ui-patterns/table",
            icon: ArrowUpRightIcon,
          },
          {
            title: "Editor",
            url: "/ui-patterns/editor",
            icon: ArrowUpRightIcon,
          },
        ],
      },

      {
        title: "Yellow Line",
        url: "/yellow-line",
        icon: FolderIcon,
      },
      {
        title: "Virtual Assistant",
        url: "/virtual-assistant",
        icon: BoltIcon,
      },
      {
        title: "System Copilot",
        url: "/system-copilot",
        icon: BookIcon,
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        title: "Notifications",
        url: "/dashboard/coming-soon",
        icon: FolderIcon,
        comingSoon: true,
      },
      {
        title: "Service Desk",
        url: "/dashboard/coming-soon",
        icon: FolderIcon,
        comingSoon: true,
      },
      {
        title: "Release Notes",
        url: "/release-notes",
        icon: FolderIcon,
      },
      {
        title: "Learning",
        url: "/dashboard/coming-soon",
        icon: FolderIcon,
        comingSoon: true,
      },
    ],
  },
];
