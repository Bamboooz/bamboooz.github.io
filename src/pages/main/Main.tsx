import React from 'react';

import StarsContainer from "../../components/stars/StarsContainer";
import Me from "../../components/me/Me";

const MainPage = () => {
    return (
        <div className="App flex flex-col items-center justify-center select-none">
            <StarsContainer />
            <Me />
        </div>
    );
};

export default MainPage;
