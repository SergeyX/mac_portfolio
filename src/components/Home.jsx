import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

import { locations } from "#constants/constants.js";
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";

const projects = locations.work?.children ?? [];
const resumeArr = locations.resume.children ?? [];

const Home = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    const openResume = (item) => {
        if (item?.fileType !== "pdf") return;
        if (item?.fileType === "pdf") return openWindow("resume");
        openWindow(`${item.fileType}${item.kind}`, item);
    };

    useGSAP(() => {
        Draggable.create(".folder");
        Draggable.create(".resume");
    }, []);
    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                        onClick={() => handleOpenProjectFinder(project)}
                    >
                        <img src="/mac_portfolio/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
            <ul>
                {resumeArr.map((resume) => (
                    <li
                        key={resume.id}
                        className={clsx("resume", resume.position)}
                        // className={resume.position}
                        onClick={() => openResume(resume)}
                    >
                        <img src={`/mac_portfolio/${resume.icon}`} alt={resume.name} />
                        <p>{resume.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home;