import React from 'react';
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

import ProjectNode from '../project-node/ProjectNode';
import octokit from "../../assets/octokit.png";
import osc from "../../assets/osc.png";
import highlanders from "../../assets/highlanders.png";
import trello from "../../assets/trello.png";

const Projects = () => {
    const projects: { [name: string]: { description: string, url: string, img: React.ReactElement<HTMLImageElement> } } = {
        "Highlanders": {
            description: "Highlanders is a full stack mountaineering forum.",
            url: "https://github.com/Bamboooz/highlanders",
            img: <img src={highlanders} />,
        },
        "os.c": {
            description: "os.c is an advanced C CLI to fetch real-time hardware information.",
            url: "https://github.com/Bamboooz/os.py",
            img: <img src={osc} />,
        },
        "trello-clone": {
            description: "trello-clone is a simple clone of trello (wow) with nodes lists etc.",
            url: "https://github.com/Bamboooz/trello-clone",
            img: <img src={trello} />,
        },
        "octokit.py": {
            description: "Octokit.py is a simple python library to interact with GitHub v3 API.",
            url: "https://github.com/Bamboooz/octokit.py",
            img: <img src={octokit} />,
        },
    };

    return (
        <>
            <div className="bg-primary flex flex-col p-12 size-full gap-12 !overflow-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-neutral-200 text-[32px] font-bold">My projects</h1>

                    <Link to="/">
                        <div className="flex items-center justify-center p-1 rounded-lg transition-colors hover:bg-neutral-800 active:hover:bg-neutral-700">
                            <IoMdHome className="text-neutral-200 text-[32px]" />
                        </div>
                    </Link>
                </div>
                
                <div className="flex items-start justify-start size-full gap-12 flex-wrap">
                    {Object.keys(projects).map(key => {
                        const project = projects[key];
                        return <ProjectNode name={key} description={project.description} url={project.url} img={project.img} />
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;
