import { PersonalInformation, PersonalDataType } from "../classes/PersonalInfo";
import { getAsyncSingletonInstance } from "../classes/Singletonize3";
import { SanityBase, groq, SanitySchemaType } from "./SanityHelper";

export const PersonalInfoSanitySchema: SanitySchemaType = {
    name: 'global_info',
    title: 'Global Informaton',
    type: 'document',
    fields: [
        {
            name: 'fullname',
            title: 'Fullname',
            type: 'string'
        },
        {
            name: 'brief_description',
            title: 'Brief Description',
            type: 'string'
        },
    ]
}

type SanityDataTypescriptSchema = {
    fullname: string;
    brief_description: string;
}

class PersonalInformationSanity extends PersonalInformation {
    protected fetchData (): Promise<PersonalDataType> { // we need to return everything that PersonalInfo Class required (name, surname, ...)
        let query = groq`*[_type == "global_info"]{
            fullname,
            brief_description
        }[0]`;

        return SanityBase.fetchData(query).then((v: SanityDataTypescriptSchema) => { 
            // aligning data from sanity to PersonalInfoInterface
            return {
                name: v.fullname.split(" ")[0],
                surname: v.fullname.split(" ")[1],
                brief_description: v.brief_description,
                social_media_data: [
                    { network_name: "Youtube", profile_link: "https://www.youtube.com/@shokirovs_cloud" },
                    { network_name: "Github", profile_link: "https://github.com/shokirovw" }
                ]
            }
        });
    }
}

export function getPersonalInformationObject (): Promise<PersonalInformation> {
    return new PersonalInformationSanity().init();
}