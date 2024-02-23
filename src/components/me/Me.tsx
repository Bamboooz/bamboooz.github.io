import React from 'react';
import AboutMe from '../about-me/AboutMe';

const Me = () => {
    return (
        <>
            <div className="text-container absolute flex flex-col items-left justify-center">
               <p className="username font-alphacentauri font-medium leading-tight relative text-[72px] text-white z-50">BAMBOOOZ</p>
               <AboutMe />
            </div>
        </>
    );
};

export default Me;
