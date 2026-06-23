"use client";

import type { CodeBlockAttrs } from "prosekit/extensions/code-block";
import { shikiBundledLanguagesInfo } from "prosekit/extensions/code-block";
import type { ReactNodeViewProps } from "prosekit/react";

export default function CodeBlockView(props: ReactNodeViewProps) {
  const attrs = props.node.attrs as CodeBlockAttrs;
  const language = attrs.language;

  const setLanguage = (language: string) => {
    const attrs: CodeBlockAttrs = { language };
    props.setAttrs(attrs);
  };

  return (
    <>
      <div className="relative top-3 mx-2 h-0 select-none overflow-visible text-xs" contentEditable={false}>
        <select
          aria-label="Code block language"
          className="relative box-border w-auto cursor-pointer select-none appearance-none rounded-sm border-none bg-transparent px-2 py-1 text-(--prosemirror-highlight) text-xs opacity-0 outline-unset transition hover:opacity-80 focus:outline-unset [div[data-node-view-root]:hover_&]:opacity-50 hover:[div[data-node-view-root]:hover_&]:opacity-80"
          onChange={(event) => setLanguage(event.target.value)}
          value={language || ""}
        >
          <option value="">Plain Text</option>
          {shikiBundledLanguagesInfo.map((info) => (
            <option key={info.id} value={info.id}>
              {info.name}
            </option>
          ))}
        </select>
      </div>
      <pre ref={props.contentRef} data-language={language} />
    </>
  );
}
