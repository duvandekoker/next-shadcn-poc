"use client";

import "prosekit/basic/style.css";
import "prosekit/basic/typography.css";

import { useRef } from "react";

import { createEditor, type NodeJSON } from "prosekit/core";
import { ProseKit } from "prosekit/react";

import { sampleContent } from "../../sample/sample-doc-full";
import { tags } from "../../sample/sample-tag-data";
import { sampleUploader } from "../../sample/sample-uploader";
import { users } from "../../sample/sample-user-data";
import { BlockHandle } from "../../ui/block-handle";
import { DropIndicator } from "../../ui/drop-indicator";
import { InlineMenu } from "../../ui/inline-menu";
import { SlashMenu } from "../../ui/slash-menu";
import { TableHandle } from "../../ui/table-handle";
import { TagMenu } from "../../ui/tag-menu";
import { Toolbar } from "../../ui/toolbar";
import { UserMenu } from "../../ui/user-menu";
import { defineExtension } from "./extension";

interface EditorProps {
  initialContent?: NodeJSON;
}

export default function Editor(props: EditorProps) {
  // useRef lazy-init: truly created once — unlike useMemo, React never discards useRef values
  const editorRef = useRef<ReturnType<typeof createEditor> | null>(null);
  if (!editorRef.current) {
    editorRef.current = createEditor({
      extension: defineExtension(),
      defaultContent: props.initialContent ?? sampleContent,
    });
  }
  const editor = editorRef.current;

  return (
    <ProseKit editor={editor}>
      <div className="box-border flex h-full min-h-36 w-full flex-col overflow-x-hidden overflow-y-hidden rounded-md border border-border border-solid bg-background text-foreground shadow-sm">
        <Toolbar uploader={sampleUploader} />
        <div className="relative box-border w-full flex-1 overflow-y-auto">
          {/* ref={editor.mount} is ProseKit's native ref-callback pattern.
              React 18 calls it null→element synchronously in the same commit,
              which avoids the async gap that causes "this.docView is null". */}
          <div
            ref={editor.mount}
            className="ProseMirror box-border min-h-full px-[max(4rem,calc(50%-20rem))] py-8 outline-0 outline-hidden [&_span[data-mention=tag]]:text-violet-500 [&_span[data-mention=user]]:text-blue-500"
          />
          <InlineMenu />
          <SlashMenu />
          <UserMenu users={users} />
          <TagMenu tags={tags} />
          <BlockHandle />
          <TableHandle />
          <DropIndicator />
        </div>
      </div>
    </ProseKit>
  );
}
