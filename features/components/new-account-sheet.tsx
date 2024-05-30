import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useNewAccount } from "../accounts/hooks/use-new-account";
import { AccountForm } from "./account-form";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";

const formSchema = insertAccountSchema.pick({
    name: true,
  });

type FormValues = z.input<typeof formSchema>;


export const AccountSheet = () => {
    const { isOpen, onClose} = useNewAccount();
    const onSubmit = (values : FormValues) => {
        console.log(values);
    }
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <AccountForm onSubmit={onSubmit} disabled={false} defaultValues={{name: "", }}/>
            </SheetContent>
        </Sheet>
    )
}