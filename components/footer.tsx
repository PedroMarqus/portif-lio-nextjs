"use client";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full h-full shadow-2xl p-6 text-gray-400 flex flex-col-reverse items-center justify-center px-2 md:px-8 " style={{ backgroundColor: '#2F2E3A' }}>
            <p className="text-lg mt-2">2026 Pedro Marques</p>
            <div className="flex flex-row gap-2">
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
        </footer>
    );
}