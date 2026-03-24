"use client";

import Title1 from "./parts/title1";
import { Card } from "./ui/card";
import Image from "next/image";

export default function Skills() {
    const skills = [
        {
            id: 1,
            name: "React",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
            id: 2,  
            name: "JavaScript",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
        {
            id: 3,
            name: "React",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
            id: 4,  
            name: "JavaScript",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
        {
            id: 5,
            name: "React",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
            id: 6,  
            name: "JavaScript",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
    ]
    return(
        <div className="mt-[100px] mb-20">
            <Title1 title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {skills.map((skill) => (
                   <Card className="rounded-sm shadow-2xl h-28    flex items-center justify-center flex-row gap-2" key={skill.id} style={{background: '#2F2E3A'}}>
                        <Image 
                            src={skill.logo}
                            alt={skill.name}
                            width={60}
                            height={60}
                            className=""
                        />
                        <h2 className="text-2xl text-center font-bold ">{skill.name}</h2>
                    </Card>
                ))}
            </div>
        </div>
    );
}