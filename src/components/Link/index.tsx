import React from "react";

interface LinkProps {
    icon: string;
    url: string;
    text: string;
}

const Link: React.FC<LinkProps> = ({ icon, url, text }) => {
    return (
        <a
            href={url}
            target="_blank"
            className="flex items-center justify-center gap-2 text-[14px] hover:underline text-neutral-200"
        >
            <img src={icon} className="h-6" />
            {text}
        </a>
    );
};

export default Link;
