import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.accounts["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.accounts["bulk-delete"]["$post"]>["json"];
export const useBulkDelteAccounts = () => {
    const queryClient = useQueryClient();

    const mutation =  useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (json) => {
            const response = await client.api.accounts["bulk-delete"]["$post"]({json})
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Accounts deleted");
            queryClient.invalidateQueries({queryKey: ["accounts"]});

            // Almost invalidate summary
        },
        onError: () => {
            toast.error("Failed to delete account");
        }
    });
    return mutation;
}
