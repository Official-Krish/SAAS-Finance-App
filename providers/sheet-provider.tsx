"use client"
import { useMountedState } from "react-use";
import { AccountSheet } from "@/features/accounts/components/new-account-sheet"; 
import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";

import { CategorySheet } from "@/features/Categories/components/new-category-sheet"; 
import { EditCategorySheet } from "@/features/Categories/components/edit-category-sheet"; 

import { NewTransactionSheet } from "@/features/transactions/components/new-transaction-sheet";


export const SheetProvider = () => {
    const isMounted = useMountedState();
    if (!isMounted) return null;
    return (
        <>
        <AccountSheet/>
        <EditAccountSheet/>

        <CategorySheet/>
        <EditCategorySheet/>

        <NewTransactionSheet/>
        </>
    )
}