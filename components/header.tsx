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

export default function Header({nome} : {nome?: string}) {
    return (
        <header className="w-full h-16 shadow-2xl flex-row text-white flex items-center justify-between px-2 md:px-8" style={{ backgroundColor: '#2F2E3A' }}>
            <h1 className="md:text-4xl font-bold border border-red-600 w-1/2">{nome}</h1>
            <div className="w-full">
            <div className="w-fit flex justify-end">
                <NavigationMenu className="w-full">
                <NavigationMenuList className="border border-amber-400 ">
                    
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d">
                        Home
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d">
                        About
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d">
                        Projects
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d">
                        Skills
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#d">
                        Contact
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            </div>
        </header>
    );
}

