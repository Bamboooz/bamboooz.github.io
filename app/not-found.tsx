"use client";

import { ReactTyped } from "react-typed";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center select-none">
      <ReactTyped strings={["404 not found"]} typeSpeed={100} />
    </div>
  );
}
