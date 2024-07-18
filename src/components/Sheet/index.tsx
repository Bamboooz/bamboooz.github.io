import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";

import { Icon } from "../../types/icon";
import { cn } from "../../utils/cn";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

interface SheetProps {
    sheetVisible: boolean;
    setSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
    sheetPosition: "left" | "right";
    icon: Icon;
}

const Sheet: React.FC<SheetProps> = ({
    sheetVisible,
    setSheetVisible,
    sheetPosition,
    icon,
}) => {
    const sheetRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(sheetRef, () => setSheetVisible(false));

    const className = cn(
        "fixed top-0 h-full z-40 bg-secondary border-neutral-700 transition-all overflow-hidden duration-200",
        sheetVisible
            ? cn(
                  "sm:w-96 w-screen",
                  sheetPosition === "left" ? "sm:border-r" : "sm:border-l",
                  "opacity-100"
              )
            : cn("w-0", "opacity-0", "overflow-hidden"),
        sheetPosition === "left" ? "left-0" : "right-0"
    );

    return (
        <div ref={sheetRef} className={className}>
            <div
                onClick={() => setSheetVisible(false)}
                className="flex items-center justify-between w-full p-4 border-b border-neutral-700"
            >
                <div className="flex items-center justify-start gap-4">
                    {React.cloneElement(icon.icon, {
                        className: "text-2xl",
                    })}
                    <p>{icon.name}</p>
                </div>

                <button className="flex items-center justify-center p-1 hover:bg-neutral-700 rounded-lg">
                    <IoClose className="text-2xl" />
                </button>
            </div>

            <div className="p-4">
                <p className="text-wrap">{icon.description}</p>
            </div>
        </div>
    );
};

export default Sheet;
