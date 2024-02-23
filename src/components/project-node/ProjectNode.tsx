import React from 'react';

interface ProjectNodeProps {
    name: string;
    description: string;
    url: string;
    img: React.ReactElement<HTMLImageElement>;
};

const ProjectNode: React.FC<ProjectNodeProps> = ({ name, description, url, img }) => {
    return (
        <>
            <a href={url} target="_blank" className="w-96 h-[300px] shadow-xl transform scale-100 transition-transform ease-in-out duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl flex flex-col items-start justify-between p-4 bg-neutral-800">
                <div className="w-full flex items-center justify-center">
                    {React.cloneElement(img, { className: "rounded-2xl h-auto max-h-44" })}
                </div>

                <div className="flex flex-col items-start justify-start">
                    <p className="text-neutral-200 text-[16px] font-semibold">{name}</p>
                    <p className="text-neutral-400 text-[16px]">{description}</p>
                </div>
            </a>
        </>
    );
};

export default ProjectNode;
