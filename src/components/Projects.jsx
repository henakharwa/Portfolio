import React from "react";
import vpn from '../assets/vpn.png';
import copeople from '../assets/copeople.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title === 'Isolated Sign Language Recognition' && (
                <a href="https://ieeexplore.ieee.org/document/10577129">
                </a>
            )}
            {title === 'PrepRight' && (
                <a href="https://github.com/shubhamsatbhaiya/interview-prep-backend">
                </a>
            )}
            <div className="p-4 sm:p-6">
                <button className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                    {title}
                </button>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Link</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'PrepRight',
        description: 'PrepRight is an AI-powered dynamic web application to help candidates prepare for interviews. This platform empowers users with tailored job specific personalized resources, interactive practice sessions, and real-time performance analytics',
        image: { vpn },
        git: 'https://github.com/shubhamsatbhaiya/interview-prep-backend',
        technologies: ['AI', 'ML', 'LLMs', 'ReactJS']
    },
    {
        title: 'Isolated Sign Language Recognition',
        description: 'This is a groundbreaking research work done using Hybrid Inception Architecture with publication in IEEE Access. This Project translates sign language gestures into text and speech, significantly improving accessibility and inclusivity.',
        image: { copeople },
        git: "https://ieeexplore.ieee.org/document/10577129",
        technologies: ['Deep Learning', 'Computer Vision']
    }
];

export default Projects;