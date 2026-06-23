"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { previewConfig, previewNotes } from "./preview-mock-data";
import { PreviewStats } from "./preview-stats";
import { RELEASE_SECTIONS, SECTION_META } from "./preview-types";
import { SectionGroup } from "./section-group";

export function PreviewStep() {
  const notes = previewNotes;
  const config = previewConfig;

  const [query, setQuery] = useState("");
  const [artFilter, setArtFilter] = useState("all");
  const [sectionFilter, setSectionFilter] = useState("all");

  const arts = useMemo(
    () => [...new Set(notes.map((n) => n.art))].sort(),
    [notes],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter((n) => {
      if (artFilter !== "all" && n.art !== artFilter) return false;
      if (sectionFilter !== "all" && n.section !== sectionFilter) return false;
      if (q) {
        const hay = [n.title, n.summary, ...n.components].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [notes, query, artFilter, sectionFilter]);

  const groupedBySection = useMemo(() => {
    const g = Object.fromEntries(RELEASE_SECTIONS.map((s) => [s, [] as typeof notes]));
    for (const n of filtered) g[n.section].push(n);
    return g;
  }, [filtered]);

  const filledSections = RELEASE_SECTIONS.filter((s) => groupedBySection[s].length > 0);
  const isFiltered = query.trim() || artFilter !== "all" || sectionFilter !== "all";

  return (
    <div className="flex flex-col gap-5">
      {/* Release header */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant={config.status === "published" ? "default" : "secondary"}>
              {config.status}
            </Badge>
            {config.publishedAt && (
              <span className="text-sm text-muted-foreground">
                {new Date(config.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
          <CardTitle>SoftwareFactory Platform Release – {config.pi}</CardTitle>
          {config.overview && (
            <CardDescription className="leading-relaxed">
              {config.overview}
            </CardDescription>
          )}
        </CardHeader>
      </Card>

      {/* Stats */}
      <PreviewStats notes={filtered} />

      {/* Search + filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-45 flex-1">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features, components, summaries…"
            className="h-8 pl-8 text-sm"
          />
        </div>
        <div className="flex items-center gap-1.5">
          <Filter className="size-3.5 text-muted-foreground" />
          <Select value={artFilter} onValueChange={setArtFilter}>
            <SelectTrigger className="h-8 w-44 text-sm">
              <SelectValue placeholder="All ARTs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All ARTs</SelectItem>
              {arts.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sectionFilter} onValueChange={setSectionFilter}>
            <SelectTrigger className="h-8 w-48 text-sm">
              <SelectValue placeholder="All sections" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All sections</SelectItem>
              {filledSections.map((s) => (
                <SelectItem key={s} value={s}>
                  {SECTION_META[s].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count */}
      {isFiltered && filtered.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">{filtered.length}</span> of{" "}
          <span className="font-medium text-foreground">{notes.length}</span> items
        </p>
      )}

      {/* Sections */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-8">
          {filledSections.map((s) => (
            <SectionGroup
              key={s}
              section={s}
              notes={groupedBySection[s]}
              highlight={query.trim()}
            />
          ))}
        </div>
      ) : (
        isFiltered && (
          <div className="py-16 text-center text-sm text-muted-foreground">
            No items match your search or filters.
          </div>
        )
      )}

      {/* Divider before sections when not filtering */}
      {!isFiltered && filtered.length > 0 && <Separator />}
    </div>
  );
}
