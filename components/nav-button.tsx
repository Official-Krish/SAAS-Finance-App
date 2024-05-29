import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";


type props = {
    href : string;
    label : string;
    isActive?: boolean;
}

export const NavButton = ({
    href,
    label,
    isActive
} : props) => {
    return (
        <Button asChild size="sm" variant="outline" className={cn(
            "w-full lg:W-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transistion",
            isActive ? "bg-white/10 text-white" : "bg-transparent",
        )}>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}