import { useState } from "react";
import ProjectCard from "../Reusable/Project_card/ProjectCard";
import Showall from "../Reusable/Showall_btn/Showall";

const GetProject = () => {

    const [dataLength, setDataLength] = useState(6);

    const projectInfo = [
        { project: "7", title: "React", numOfDev: "20", developers: "Developers"},
        { project: "23", title: "JavaScript", numOfDev: "13", developers: "Developers"},
        { project: "14", title: "Laravel", numOfDev: "75", developers: "Developers"},
        { project: "20", title: "Java", numOfDev: "49", developers: "Developers"},
        { project: "100", title: "Angular", numOfDev: "250", developers: "Developers"},
        { project: "43", title: ".Net", numOfDev: "7", developers: "Developers"},
        { project: "13", title: "Golang", numOfDev: "14", developers: "Developers"},
    ];

    const handleShowAll = () => {
        setDataLength(projectInfo.length);
    };

    return (
        <div className="font-poppins md:mt-24 mt-4 md:p-2 p-4 flex flex-col gap-8">
            <div className="text-center">
                <h1 className="md:text-4xl text-2xl text-primary_font font-semibold md:my-3 my-2">Get Project</h1>
                <p className="md:text-base text-xs text-p_text">High Performing Solutions To Your</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-9 gap-4">
                {projectInfo.slice(0, dataLength).map((card, index) => (
                    <div key={index} className="flex flex-col items-center md:w-full">
                        <ProjectCard project={card.project} title={card.title} numOfDev={card.numOfDev} developers={card.developers}></ProjectCard>
                    </div>
                ))}
            </div>
            <div className={`flex justify-center items-center ${dataLength === projectInfo.length ? 'hidden' : ''}`}>
                <Showall onClick={handleShowAll} />
            </div>
        </div>
    );
};

export default GetProject;

