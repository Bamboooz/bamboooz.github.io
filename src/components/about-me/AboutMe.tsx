import React from 'react';
import { Link } from 'react-router-dom';
import { PiGithubLogo } from "react-icons/pi";
import { GoFileCode } from "react-icons/go";
import { FiCoffee } from "react-icons/fi";

const AboutMe = () => {
    return (
        <>
            <div className="me-container opacity-0 translate-x-full flex items-center justify-start mt-4 gap-2">
                <p className="who-am-i font-medium font-alphacentauri leading-tight relative text-[30px] mx-2 text-white z-50">web developer</p>

                <div className="flex items-center justify-center gap-1 z-50">
                    <a href="https://github.com/Bamboooz" target="_blank" className="page-button size-[32px] rounded-lg flex items-center justify-center group">
                        <PiGithubLogo className="text-white group-hover:text-slate-300 group-hover:group-active:text-slate-400" size={20} />
                    </a>

                    <Link to="/projects">
                        <div className="page-button size-[32px] rounded-lg flex items-center justify-center group">
                            <GoFileCode className="text-white group-hover:text-slate-300 group-hover:group-active:text-slate-400" size={20} />
                        </div>
                    </Link>

                    <a href="https://ko-fi.com/bamboooz" target="_blank" className="page-button size-[32px] rounded-lg flex items-center justify-center group">
                        <FiCoffee className="text-white group-hover:text-slate-300 group-hover:group-active:text-slate-400" size={20} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
