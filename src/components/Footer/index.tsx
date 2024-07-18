import React from "react";

import Link from "../Link";

import github from "../../assets/icons/github.png";
import twitter from "../../assets/icons/twitter.png";
import kofi from "../../assets/icons/kofi.png";

const Footer: React.FC = () => {
    return (
        <>
            <div className="w-screen h-screen fixed top-0 left-0 flex flex-col items-center justify-end z-0">
                <div className="w-full h-20 flex items-center justify-center gap-6">
                    <Link
                        icon={github}
                        url="https://github.com/bamboooz"
                        text="GitHub"
                    />
                    <Link
                        icon={twitter}
                        url="https://twitter.com/_bamboooz"
                        text="Twitter"
                    />
                    <Link
                        icon={kofi}
                        url="https://ko-fi.com/bamboooz"
                        text="Ko-fi"
                    />
                </div>
            </div>
        </>
    );
};

export default Footer;
