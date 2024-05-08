import { useState } from "react";
import projectImg from "../../../assets/task_titans.png";
import PropTypes from 'prop-types';

const ProjectCard = ({ project, title, numOfDev, developers }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="card card-compact w-96 bg-base-100 shadow-md border border-primary_color rounded-md overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-1">
                <img 
                    src={projectImg} 
                    alt="" 
                    className={`transform transition duration-300 ${isHovered ? "transform scale-110" : ""}`}
                />
            </div>
            <div className="card-body border-t border-primary_color grid grid-cols-2 text-center">
                <div className="col-span-1 font-semibold border-r border-primary_color">
                    <h1 className="text-primary_font text-2xl">{project}</h1>
                    <h1 className="text-p_text text-1xl">{title}</h1>
                </div>
                <div className="col-span-1 font-semibold">
                    <h1 className="text-primary_font text-2xl">{numOfDev}</h1>
                    <h1 className="text-p_text text-1xl">{developers}</h1>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    numOfDev: PropTypes.string.isRequired,
    developers: PropTypes.string.isRequired
};

export default ProjectCard;
