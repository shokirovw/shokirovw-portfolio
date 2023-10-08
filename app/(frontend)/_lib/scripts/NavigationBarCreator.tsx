import { getCurrentPathname } from "./PageHelper";
import { NavigationbarCompInterface } from "../../_lib/components/NavigationBarComponent";
import NavigationBarComponent from "../../_lib/components/NavigationBarComponent";
import { AllIconNames, IconName } from "../components/ClientIcons";
import { SanitySchemaType, groq, generateOptionsFromArray, sanityFetch } from "./SanityHelper";

function IconNamesForSanityOptions () {
    return generateOptionsFromArray(AllIconNames);
}

export const NavigationBarSanitySchema: SanitySchemaType = {
    name: 'navigation_bar_info',
    title: 'Navigation Bar Data',
    type: 'document',
    fields: [
        {
            name: 'pages',
            title: 'Pages to be displayed',
            type: 'array',
            of: [
                { type: "object", fields: [ 
                    { name: "page_name", title: "Page name", description: "Please keep shorter", type: "string" },
                    { name: "page_path", title: "Page path", description: "Must start with /", type: "string" },
                    { name: "page_group", title: "Page group", description: "Defaults to global", type: "string" },
                    { name: "page_icon", title: "Page icon", type: "string", options: { list: IconNamesForSanityOptions() } }
                ], initialValue: { page_group: "global" } }
            ]
        }
    ]
}

type SanityNavItemData = {
    page_name: string;
    page_path: `/${string}`;
    page_group: 'global' | string;
    page_icon?: IconName | '';
}

function fetchNavDataFromSanity (): Promise<SanityNavItemData[]> { 
    return sanityFetch(groq`*[_type == "navigation_bar_info"]{
        pages
    }[0]`);
}

function ConvertFromDBToCompInterface (nav_data: SanityNavItemData[]): NavigationbarCompInterface[] {
    let arr: NavigationbarCompInterface[] = [];
    let arr_pointer = 0;

    let idxs = {};

    for (let i = 0; i < nav_data.length; ++i) {
        let elem = nav_data[i];
        let page_data: NavigationbarCompInterface = { name: elem.page_name, path: elem.page_path, iconname: elem.page_icon || '' };
        if (elem.page_group == "global") {
            arr.push(page_data);
            ++arr_pointer;
        } else {
            if (elem.page_group in idxs) {
                arr[idxs[elem.page_group]].elements.push(page_data);
            } else {
                arr.push({ name: elem.page_group, path: '', elements: [page_data] });
                idxs[elem.page_group] = arr_pointer;
                ++arr_pointer;
            }
        }
        
    }

    return arr;
}

export default async function OurNavigationBar () {
    //const current_path = getCurrentPathname();

    let navdata = ConvertFromDBToCompInterface(await fetchNavDataFromSanity());

    return (
        <NavigationBarComponent current_pathname={"/home"} items_data={navdata} />
    );
}

// return [
    //     {
    //         page_name: 'Home',
    //         page_path: '/home',
    //         page_group: 'global'
    //     },
    //     {
    //         page_name: 'About',
    //         page_path: '/about',
    //         page_group: 'global'
    //     },
    //     {
    //         page_name: 'Blog',
    //         page_path: '/blog',
    //         page_group: 'global'
    //     },
    //     {
    //         page_name: 'Projects',
    //         page_path: '/projects',
    //         page_group: 'global'
    //     },
    //     {
    //         page_name: 'Book recommendations',
    //         page_path: '/book',
    //         page_group: 'Miscellaneous',
    //         page_icon: "Picture"
    //     }
    // ]