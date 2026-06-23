"use client";

import { type ReactNode, useId, useState } from "react";

import type { Uploader } from "prosekit/extensions/file";
import type { ImageExtension } from "prosekit/extensions/image";
import { useEditor } from "prosekit/react";
import { PopoverContent, PopoverRoot, PopoverTrigger } from "prosekit/react/popover";

import { Button } from "../button";

export default function ImageUploadPopover(props: {
  uploader: Uploader<string>;
  tooltip: string;
  disabled: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const ariaId = useId();

  const editor = useEditor<ImageExtension>();

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setFile(file);
      setUrl("");
    } else {
      setFile(null);
    }
  };

  const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const url = event.target.value;

    if (url) {
      setUrl(url);
      setFile(null);
    } else {
      setUrl("");
    }
  };

  const deferResetState = () => {
    setTimeout(() => {
      setUrl("");
      setFile(null);
    }, 300);
  };

  const handleSubmit = () => {
    if (url) {
      editor.commands.insertImage({ src: url });
    } else if (file) {
      editor.commands.uploadImage({ file, uploader: props.uploader });
    }
    setOpen(false);
    deferResetState();
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      deferResetState();
    }
    setOpen(open);
  };

  return (
    <PopoverRoot open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger>
        <Button pressed={open} disabled={props.disabled} tooltip={props.tooltip}>
          {props.children}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[side=bottom]:slide-in-from-top-2 motion-safe:data-[side=bottom]:slide-out-to-top-2 motion-safe:data-[side=left]:slide-in-from-right-2 motion-safe:data-[side=left]:slide-out-to-right-2 motion-safe:data-[side=right]:slide-in-from-left-2 motion-safe:data-[side=right]:slide-out-to-left-2 motion-safe:data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[side=top]:slide-out-to-bottom-2 z-10 box-border flex w-sm flex-col gap-y-4 rounded-lg border border-border bg-popover p-6 text-popover-foreground text-sm shadow-lg will-change-transform motion-safe:data-[state=closed]:animate-duration-200 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:animate-duration-150 motion-safe:data-[state=open]:animate-in [&:not([data-state])]:hidden">
        {file ? null : (
          <>
            <label htmlFor={`id-link-${ariaId}`}>Embed Link</label>
            <input
              id={`id-link-${ariaId}`}
              className="box-border flex h-9 w-full rounded-md border border-border border-solid bg-background px-3 py-2 text-foreground text-sm outline-hidden ring-0 ring-transparent transition file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Paste the image link..."
              type="url"
              value={url}
              onChange={handleUrlChange}
            />
          </>
        )}

        {url ? null : (
          <>
            <label htmlFor={`id-upload-${ariaId}`}>Upload</label>
            <input
              id={`id-upload-${ariaId}`}
              className="box-border flex h-9 w-full rounded-md border border-border border-solid bg-background px-3 py-2 text-foreground text-sm outline-hidden ring-0 ring-transparent transition file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              accept="image/*"
              type="file"
              onChange={handleFileChange}
            />
          </>
        )}

        {url ? (
          <button
            type="button"
            className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border-0 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={handleSubmit}
          >
            Insert Image
          </button>
        ) : null}

        {file ? (
          <button
            type="button"
            className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border-0 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={handleSubmit}
          >
            Upload Image
          </button>
        ) : null}
      </PopoverContent>
    </PopoverRoot>
  );
}
