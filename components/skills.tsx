"use client";

import Title1 from "./parts/title1";
import { Card } from "./ui/card";
import Image from "next/image";
import skills from "@/lib/mockSkills";

export default function Skills() {
    
    return(
        <div className="mt-[100px] mb-20" id="skills">
            <Title1 title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {skills.map((skill) => (
                   <Card className="rounded-sm shadow-2xl h-28    flex items-center justify-center flex-row gap-2" key={skill.id} style={{background: '#2F2E3A'}}>
                        <Image 
                            src={skill.image}
                            alt={skill.name}
                            width={60}
                            height={60}
                            className=""
                        />
                        <h2 className="text-2xl text-center text-gray-300 font-bold ">{skill.name}</h2>
                    </Card>
                ))}
            </div>
        </div>
    );
}