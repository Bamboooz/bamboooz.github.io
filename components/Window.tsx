"use client";

import { useState, useEffect } from "react";

interface WindowProps {
  title: string;
  width: number;
  height: number;
  children?: React.ReactNode;
}

export default function Window({
  title,
  width,
  height,
  children,
}: WindowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPosition({
        x: (window.innerWidth - width) / 2,
        y: (window.innerHeight - height) / 2,
      });
      setIsInitialized(true);
    }
  }, [width, height]);

  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  useEffect(() => {
    const onDrag = (e: MouseEvent) => {
      if (!dragging) return;
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };

    const stopDrag = () => setDragging(false);

    if (dragging) {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", stopDrag);
    }

    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
    };
  }, [dragging, offset]);

  if (!isInitialized) return null;

  return (
    <div
      className="absolute border border-terminal rounded-t-lg shadow-lg overflow-hidden z-10"
      style={{ left: position.x, top: position.y, width, height }}
    >
      <div
        className="h-10 bg-terminal cursor-move flex items-center justify-center px-4 font-semibold select-none"
        onMouseDown={startDrag}
      >
        {title}
      </div>

      {children}
    </div>
  );
}
