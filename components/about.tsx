"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import Title1 from "./parts/title1";
import { TypeAnimation } from 'react-type-animation';

export default function About() {
    return(
        <div className=" flex flex-col " id="about">
            <Title1 title="About me" />
            <Card className="rounded-sm shadow-2xl p-6" style={{background: '#2F2E3A'}}>
                <p className="text-xl text-gray-300 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet, similique quod, incidunt et doloribus excepturi voluptates ut mollitia, placeat eligendi molestias cum? Quisquam error dolore autem quos minus? Eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore animi veritatis facere beatae quos eum fugiat ipsam suscipit quasi! Laboriosam et ea laborum, velit provident labore vero blanditiis quasi optio!</p>
                <div className="flex flex-row gap-2">
                    <Image 
                        src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"}
                        alt="Tailwind CSS"
                        width={40}
                        height={40}
                    />
                    <Image 
                        src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"}
                        alt="TypeScript"
                        width={40}
                        height={40}
                    />
                    <Image 
                        src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"}
                        alt="Python"
                        width={40}
                        height={40}
                    />
                    <Image 
                        src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"}
                        alt="React"
                        width={40}
                        height={40}
                    />
                </div>
                
            </Card>
        </div>
    );
}