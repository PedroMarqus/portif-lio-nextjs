"use client"
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons"
import Link from "next/link";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { TypeAnimation } from "react-type-animation";

export default function Hero({url, name, role} : {url:string, name?: string, role?: string}) {
    return (
        <div className="md:h-[700px] flex flex-col mt-4 mb-4 md:mt-0 md:mb-0    w-full items-center justify-center" id="home">
            <div className="flex flex-col sm:flex-row md:w-full gap-20">
                <div className="shrink-0">
                    <Image
                        src={url}
                        alt="Hero Image"
                        width={550}
                        height={550}
                        className="rounded-4xl"
                    />
                </div>
                <div className="flex flex-col flex-1 p-0">
                    <TypeAnimation
                        sequence={[
                            `${name} - Firefighter`,
                            1000,
                            `${name} - ${role}`,
                            1000
                        ]}
                        wrapper="span"
                        cursor={true}
                        className="text-7xl text-gray-200 font-bold"
                    />
                    
                    <TypeAnimation
                        sequence={[
                            4600,
                            "i am a passionate developer with a strong background in firefighting. With a unique blend of skills and experiences, I bring a fresh perspective to the world of technology. My journey from battling flames to coding solutions has equipped me with resilience, adaptability, and a problem-solving mindset that sets me apart in the tech industry.",
                            1000
                        ]}
                        wrapper="span"
                        cursor={true}
                        className="text-lg text-left text-gray-300 mt-2"
                    />  
                    <div className="mt-10 flex flex-row gap-6 text-gray-300">
                        <Link href={"https://github.com/pedro-marques"} target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-gray-600" >
                            <GitHubLogoIcon className="w-10 h-10" />
                        </Link>
                        <Link href={"https://linkedin.com/in/araujo-marques"} target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-blue-600" >
                            <LinkedInLogoIcon className="w-10 h-10" />
                        </Link>
                        <Link href={"https://instagram.com/pedro.marques"} target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-pink-600" >
                            <InstagramLogoIcon className="w-10 h-10" />
                        </Link>
                    </div> 
                </div>
            </div>
        </div>    
    );
}