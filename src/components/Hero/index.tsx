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
import { Icon } from "../../types/icon";

const techStack: Icon[] = [
    {
        name: "Typescript",
        icon: <SiTypescript />,
        description:
            "I wrote some Typescript in my life it is pretty cool language ig.",
    },
    {
        name: "React",
        icon: <SiReact />,
        description: "React good framework.",
    },
    {
        name: "Tauri",
        icon: <SiTauri />,
        description: "Tauri good for desktop apps cool cool.",
    },
    {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        description: "CSS sucks.",
    },
    {
        name: "HTML",
        icon: <SiHtml5 />,
        description: "HTML is weird.",
    },
    {
        name: "CSS",
        icon: <SiCss3 />,
        description: "CSS sucks, please use TailwindCSS.",
    },
    {
        name: "Rust",
        icon: <SiRust />,
        description: "Rust > C++",
    },
];

const hobbies: Icon[] = [
    {
        name: "Mountaineering",
        icon: <LuMountainSnow />,
        description: "Mountains cool yes.",
    },
    {
        name: "Sport Climbing",
        icon: <GiMountainClimbing />,
        description: "Climbing cool.",
    },
    {
        name: "Coffee & Tea",
        icon: <GiCoffeeCup />,
        description: "Coffee & Tea is good yes yes.",
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
                    <p className="max-md:text-xl text-3xl font-alphacentauri ml-[4px]">
                        FRONTEND DEV
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
