import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { getAllSanitySchemas } from "./app/(frontend)/_lib/scripts/SanityHelper";

export const clientConfig: { projectId: string; dataset: string; apiVersion: string; } = {
    projectId: "e037444k",
    dataset: "production",
    apiVersion: '2023-09-19'
}

export type SanitySchemaType = {
    name: string;
    title: string;
    type: string;
    fields: {}[];
}

const config = defineConfig({
    projectId: "e037444k",
    dataset: "production",
    title: "Shokirov\'s Network",
    apiVersion: '2023-09-19',
    basePath: "/studio",
    plugins: [deskTool()],
    schema: {
        types: getAllSanitySchemas()
    }
});

export default config;