"use client";
import * as React from "react";
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Camera,
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  FileUser,
  FolderGit2,
} from "lucide-react"

export default function Header({name, } : {name?: string}) {
    return (
        <header className="w-full h-16 shadow-2xl flex-row text-white flex items-center justify-between px-2 md:px-8" style={{ backgroundColor: '#2F2E3A' }}>
            <h1 className="md:text-4xl font-bold w-1/2 truncate">{name}</h1>
            <div className="w-1/2 flex items-center h-full">
                <NavigationMenu className="w-full max-w-full">
                <NavigationMenuList className=" w-full flex justify-evenly ">
                    
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d" className="text-lg font-medium">
                        Home
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d" className="text-lg font-medium">
                        About
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d" className="text-lg font-medium">
                        Projects
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d" className="text-lg font-medium">
                        Skills
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d" className="text-lg font-medium">
                        Contact
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            
        </header>
    );
}

