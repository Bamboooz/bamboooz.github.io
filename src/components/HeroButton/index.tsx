import React, { useState, useEffect, useCallback } from "react";

import Sheet from "../Sheet";
import { HobbyIcon, StackIcon } from "../../types/icon";

interface HeroButtonProps {
    icons: (StackIcon | HobbyIcon)[];
    sheetPosition: "left" | "right";
}

const HeroButton: React.FC<HeroButtonProps> = ({ icons, sheetPosition }) => {
    const [index, setIndex] = useState<number>(0);
    const [sheetVisible, setSheetVisible] = useState<boolean>(false);

    const updateIconIndex = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, [icons.length]);

    useEffect(() => {
        if (icons.length === 0) return;

        if (!sheetVisible) {
            const interval = setInterval(updateIconIndex, 2000);
            return () => clearInterval(interval);
        }
    }, [icons.length, updateIconIndex, sheetVisible]);

    if (icons.length === 0) return null;

    return (
        <>
            <button
                onClick={() => setSheetVisible(true)}
                className="relative flex items-center justify-center w-14 h-14 bg-transparent text-neutral-200 z-20"
            >
                <div className="absolute inset-0 border-2 border-dashed border-neutral-200 bg-primary rounded-full animate-spin-slow" />
                {React.cloneElement(icons[index].icon, {
                    className: "text-[26px] z-30",
                })}
            </button>

            <Sheet
                sheetPosition={sheetPosition}
                setSheetVisible={setSheetVisible}
                sheetVisible={sheetVisible}
                icon={icons[index]}
            />
        </>
    );
};

export default HeroButton;
