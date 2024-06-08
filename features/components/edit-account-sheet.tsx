import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { AccountForm } from "./account-form";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateAccount } from "../accounts/api/use-create-account";
import { useOpenAccount } from "../accounts/hooks/use-open-account";
import { useGetAccount } from "../accounts/api/use-get-account";
import {  Loader2 } from "lucide-react";

const formSchema = insertAccountSchema.pick({
    name: true,
  });

type FormValues = z.input<typeof formSchema>;


export const EditAccountSheet = () => {
    const mutation = useCreateAccount();
    const { isOpen, onClose, id} = useOpenAccount();
    const accountQuery = useGetAccount(id);
    const isLoading = accountQuery.isLoading;

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
          onSuccess: () => {
            onClose();
          },
        });
    };

    const defaultValues = accountQuery.data ? {
        name : accountQuery.data.name
    } : {
        name : ""
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        Edit Account
                    </SheetTitle>
                    <SheetDescription>
                        Edit an existing account
                    </SheetDescription>
                </SheetHeader>
                {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="size-4 text-muted-foreground animate-spin"/>
                    </div>
                ) : (
                    <AccountForm id={id} onSubmit={onSubmit} disabled={mutation.isPending} defaultValues={defaultValues}/>

                )}
            </SheetContent>
        </Sheet>
    )
}