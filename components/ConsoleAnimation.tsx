"use client";

import { useState } from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import ConsoleInput from "./ConsoleInput";
import { cn } from "@/utils";

export default function ConsoleAnimation() {
  const [finished, setFinished] = useState<boolean>(false);

  return (
    <>
      <div>
        <ConsoleInput />

        <span className={cn(finished && "hidden")}>
          <ReactTyped
            strings={["neofetch"]}
            typeSpeed={120}
            onComplete={() => setFinished(true)}
          />
        </span>

        <span className={cn(!finished && "hidden")}>neofetch</span>
      </div>

      <div className={cn("flex items-start justify-start gap-6", !finished && "hidden")}>
        <Image
          src="/favicon.png"
          alt="icon"
          width={150}
          height={150}
          className="max-sm:hidden select-none"
          priority
        />

        <div>
          <p>Name: Bamboooz</p>
          <p>Age: 16</p>
          <p>Languages: Polish, English</p>
          <p>Knowledge: Javascript, Typescript, React, Next.js, Rust, Tauri</p>
          <p>Hobbies: Mountaineering, Climbing, Gym, Programming</p>
          <p>GitHub: @bamboooz</p>
          <p>Twitter: @bambooozdev</p>
          <p>Discord: @bamboooz</p>
        </div>
      </div>

      <div className={cn(!finished && "hidden")}>
        <ConsoleInput />
        <ReactTyped strings={[""]} />
      </div>
    </>
  );
}
