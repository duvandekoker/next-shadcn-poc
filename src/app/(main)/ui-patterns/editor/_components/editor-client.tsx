"use client";

import dynamic from "next/dynamic";

const ExampleEditor = dynamic(() => import("@/components/editor/examples/full/editor"), { ssr: false });

export default function EditorClient() {
  return <ExampleEditor />;
}

