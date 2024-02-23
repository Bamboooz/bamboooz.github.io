import React from 'react';

const StarsContainer = () => {
    const starClass = "absolute top-0 left-0 w-1 h-1 bg-white rounded-[50%] shadow-star";

    return (
        <>
            <div className="star-container flex items-center justify-center h-full w-full overflow-hidden">
                {Array(10).fill(true).map((_, i) => <span className={starClass} key={i} />)}
            </div>
        </>
    );
};

export default StarsContainer;
