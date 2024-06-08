"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useConfirm } from "@/hooks/use-confirm";
import { useOpenCategory } from "@/features/Categories/hooks/use-open-category";
import { useDeleteCategory } from "@/features/Categories/api/use-delete-category";
type props = {
    id : string;
}

export const Actions = ({ id } : props) => {
    const { onOpen } = useOpenCategory();
    const [ConfirmDialog, Confirm] = useConfirm(
        "Are you sure",
        "You are about to delete this category."
    )
    const deleteMutation = useDeleteCategory(id);

    const handleDelete = async () => {
        const ok = await Confirm();

        if(ok){
            deleteMutation.mutate();
        }
    }
    return (
        <>
        <ConfirmDialog/>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="size-8 p-0">
                    <MoreHorizontal className="size-4 "/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem disabled={deleteMutation.isPending} onClick={() => onOpen(id)}>
                    <Edit className="size-4 mr-2"/>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem disabled={deleteMutation.isPending} onClick={handleDelete}>
                    <Trash className="size-4 mr-2"/>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}