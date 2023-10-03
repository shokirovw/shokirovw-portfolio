import { createClient, groq } from "next-sanity";
import { PersonalInfoSanitySchema } from "./PersonalInfoCreator";
import { NavigationBarSanitySchema } from "./NavigationBarCreator";
import { cache } from "react";

export { groq };

export type SanitySchemaType = {
    name: string;
    title: string;
    type: string;
    fields: {}[];
}

export class SanityBase {
    static client = createClient({ // config should be the same with sanity.config.ts
        projectId: "e037444k",
        dataset: "production",
        apiVersion: '2023-09-19', 
        useCdn: true 
    });

    static fetchData (groq_string: string) {
        console.log("Data is being fetched");
        return cache(async () => {
            return await SanityBase.client.fetch(groq_string);
        })();
    }

    static AllSchemas (): SanitySchemaType[] {
        return [PersonalInfoSanitySchema, NavigationBarSanitySchema]
    }

    static generateOptionsFromArray (title_arr: string[], value_arr: any[] = title_arr): { title: string; value: string; }[] {
        let arr = [];
        for (let i = 0; i < title_arr.length; ++i) {
            arr.push({ title: title_arr[i], value: value_arr[i] });
        }
        return arr;
    }
}

export function getAllSanitySchemas () {
    return SanityBase.AllSchemas();
}

export function generateOptionsFromArray (title_arr: string[], value_arr: any[] = title_arr): { title: string; value: string; }[] {
    let arr = [];
    for (let i = 0; i < title_arr.length; ++i) {
        arr.push({ title: title_arr[i], value: value_arr[i] });
    }
    return arr;
}







