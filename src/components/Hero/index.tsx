import React from "react";
import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiTauri,
    SiHtml5,
    SiCss3,
    SiRust,
} from "react-icons/si";
import { GiMountainClimbing, GiCoffeeCup } from "react-icons/gi";
import { LuMountainSnow } from "react-icons/lu";

import HeroButton from "../HeroButton";
import { HobbyIcon, StackIcon } from "../../types/icon";

const techStack: StackIcon[] = [
    {
        name: "Typescript",
        icon: <SiTypescript />,
        knowledge: 4,
    },
    {
        name: "React",
        icon: <SiReact />,
        knowledge: 4,
    },
    {
        name: "Tauri",
        icon: <SiTauri />,
        knowledge: 4,
    },
    {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        knowledge: 4,
    },
    {
        name: "HTML",
        icon: <SiHtml5 />,
        knowledge: 3,
    },
    {
        name: "CSS",
        icon: <SiCss3 />,
        knowledge: 3,
    },
    {
        name: "Rust",
        icon: <SiRust />,
        knowledge: 2,
    },
];

const hobbies: HobbyIcon[] = [
    {
        name: "Mountaineering",
        icon: <LuMountainSnow />,
        description: "Idk what to put here",
    },
    {
        name: "Sport Climbing",
        icon: <GiMountainClimbing />,
        description: "Idk what to put here",
    },
    {
        name: "Coffee & Tea",
        icon: <GiCoffeeCup />,
        description: "Idk what to put here",
    },
];

const Hero: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-between w-screen h-screen text-neutral-200 z-10">
                <div />

                <div className="hidden md:block">
                    <HeroButton icons={techStack} sheetPosition="left" />
                </div>

                <div className="flex flex-col items-start justify-center gap-6">
                    <p className="max-md:text-5xl text-7xl font-alphacentauri">
                        BAMBOOOZ
                    </p>
                    <p className="max-md:text-xl text-3xl font-alphacentauri ml-[6px]">
                        WEB DEVELOPER
                    </p>

                    <div className="flex gap-6 md:hidden">
                        <HeroButton icons={techStack} sheetPosition="left" />
                        <HeroButton icons={hobbies} sheetPosition="right" />
                    </div>
                </div>

                <div className="hidden md:block">
                    <HeroButton icons={hobbies} sheetPosition="right" />
                </div>

                <div />
            </div>
        </>
    );
};

export default Hero;
