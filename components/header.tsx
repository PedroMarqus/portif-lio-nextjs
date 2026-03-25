"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


export default function Header({name, } : {name?: string}) {
    return (
        <header className="hidden w-full h-16 shadow-2xl flex-row text-white md:flex items-center justify-between px-2 md:px-8" style={{ backgroundColor: '#2F2E3A' }}>
            <h1 className="md:text-4xl font-bold w-1/2 truncate">{name}</h1>
            <div className="w-1/2 flex items-center h-full">
                <NavigationMenu className="w-full max-w-full">
                <NavigationMenuList className=" w-full flex justify-evenly ">
                    
                    <NavigationMenuItem >
                    <NavigationMenuLink href="#home" className="text-lg font-medium">
                        Home
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#about" className="text-lg font-medium">
                        About
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#projects" className="text-lg font-medium">
                        Projects
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="#skills" className="text-lg font-medium">
                        Skills
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            
        </header>
    );
}

