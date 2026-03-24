"use client"
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons"
import Link from "next/link";
import { InstagramLogoIcon } from "@phosphor-icons/react";

export default function Hero({url} : {url:string}) {
    return (
        <div className="md:h-[700px] flex flex-col  w-full items-center justify-center">
            <div className="flex flex-row w-full gap-20">
                <div>
                    <Image
                        src={url}
                        alt="Hero Image"
                        width={650}
                        height={650}
                        className="rounded-4xl"
                    />
                </div>
                <div className="flex flex-col p-0">
                    <h1 className="text-7xl font-bold  mt-4 text-left">Pedro Marques - FullStack Developer</h1>
                    <p className="text-lg text-left  mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, inventore officiis. Dolor nemo voluptatum ut harum suscipit totam rerum quam magnam fuga, ipsa sunt cum beatae numquam id iusto. Soluta! lorem kakakak </p>
                    <div className="mt-10 flex flex-row gap-6">
                        <Link href={"https://github.com/pedro-marques"} target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-gray-600" >
                            <GitHubLogoIcon className="w-10 h-10" />
                        </Link>
                        <Link href={"https://linkedin.com/in/pedro-marques"} target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-blue-600" >
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