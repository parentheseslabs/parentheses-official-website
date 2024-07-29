import { AllDocumentTypes, SubServicesDocumentData } from "@/prismicio-types";
import { createClient } from "@prismicio/client";

export async function fetchData(uid:string,typeOfDoc:any) {
    const client = createClient("parentheses", {
        fetchOptions:
            process.env.NODE_ENV === "production"
                ? { next: { tags: ["prismic"] }, cache: "no-cache" }
                : { next: { revalidate: 5 } },
    });
    const data = client.getByUID(typeOfDoc, uid);
    return data
}