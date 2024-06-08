import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { CategoryForm } from "./category-form";
import { useCreateCategory } from "../api/use-create-category";
import { useNewCategory } from "../hooks/use-new-category";


const formSchema = insertCategorySchema.pick({
    name: true,
  });

type FormValues = z.input<typeof formSchema>;


export const CategorySheet = () => {
    const mutation = useCreateCategory();
    const { isOpen, onClose} = useNewCategory();
    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
          onSuccess: () => {
            onClose();
          },
        });
    };
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Category
                    </SheetTitle>
                    <SheetDescription>
                        Create a new category to organise your transactions.
                    </SheetDescription>
                </SheetHeader>
                <CategoryForm onSubmit={onSubmit} disabled={mutation.isPending} defaultValues={{name: "", }}/>
            </SheetContent>
        </Sheet>
    )
}