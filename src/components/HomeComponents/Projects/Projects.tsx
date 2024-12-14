import ButtonCategory from "@/components/GeneralComponents/ButtonCategory/ButtonCategory";
import Section from "@/components/GeneralComponents/Section/Section";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsList from "./ProjectsList/ProjectsList";

export const Projects: React.FC = () => {

    return (

        <div className="w-full min-h-[calc(100dvh-80px)] pt-5 px-2 flex flex-col justify-between pb-5 relative overflow-hidden gap-5">
            <Section icon={faListCheck} text="Mis proyectos" />
            <div>
                <ProjectsList />
            </div>
            <ButtonCategory category="CONTACTO" link="#contact" linkRef="contact" />
        </div>

    );

};

export default Projects;