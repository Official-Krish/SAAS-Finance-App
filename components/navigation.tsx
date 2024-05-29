"use client"

import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "./nav-button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { useState } from "react";
import { useMedia } from "react-use"
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const routes = [
    {
        href : "/",
        label : "Overview"
    },
    {
        href : "/transactions",
        label : "Transactions"
    },{
        href : "/accounts",
        label : "Accounts"
    },{
        href : "/categories",
        label : "Categories"
    },{
        href : "/settings",
        label : "Settings"
    }
];
export const Naviagtion = () => {
    const [isOpen, setisOpen] = useState(false);
    const router = useRouter();
    const pathName = usePathname();
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href : string) => {
        router.push(href);
        setisOpen(false);
    };

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setisOpen}>
                <SheetTrigger>
                    <Button variant="outline" size="sm" className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transistion">
                        <Menu className="h-4 w-4"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <div className="flex flex-col gap-y-2 pt-6">
                        {routes.map((route) =>(
                            <Button
                            variant={route.href === pathName ? "secondary" : "ghost"}
                            onClick = {() => onClick(route.href)}
                            className="w-full justify-start"
                            >
                                {route.label}
                            </Button>
                        ))}
                    </div>

                </SheetContent>
            </Sheet>
        )
    }
    
    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route)=>(
                <NavButton 
                key={route.href}
                href={route.href}
                label={route.label}
                isActive={pathName === route.href}
                />
            ))}
        </nav >
    )
}