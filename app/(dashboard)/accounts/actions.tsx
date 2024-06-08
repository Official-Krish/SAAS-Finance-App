"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Edit, MoreHorizontal } from "lucide-react";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
type props = {
    id : string;
}

export const Actions = ({ id } : props) => {
    const { onOpen } = useOpenAccount();
    return (
        <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="size-8 p-0">
                    <MoreHorizontal className="size-4 "/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem disabled={false} onClick={() => onOpen(id)}>
                    <Edit className="size-4 mr-2"/>
                    Edit
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}