import { PersonalInformation, PersonalDataType, social_networks_list, PersonalInfoSocialAccountType } from "../classes/PersonalInfo";
import { SanityBase, generateOptionsFromArray, groq, SanitySchemaType } from "./SanityHelper";

function NetworkNamesForSanityOptions () {
    return generateOptionsFromArray(social_networks_list);
}

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
        {
            name: 'social_media_data',
            title: "Social media data",
            type: "array",
            of: [{
                type: "object", fields: [
                    { name: "network_name", title: "Social network name", type: "string", options: { list: NetworkNamesForSanityOptions() } },
                    { name: "profile_link", title: "Link to your profile", type: "string" }
                ]
            }]
        }
    ]
}

type SanityDataTypescriptSchema = {
    fullname: string;
    brief_description: string;
    social_media_data: PersonalInfoSocialAccountType[];
}

class PersonalInformationSanity extends PersonalInformation {
    protected fetchData (): Promise<PersonalDataType> { // we need to return everything that PersonalInfo Class required (name, surname, ...)
        let query = groq`*[_type == "global_info"]{
            fullname,
            brief_description,
            social_media_data
        }[0]`;

        return SanityBase.fetchData(query).then((v: SanityDataTypescriptSchema) => { 
            // aligning data from sanity to PersonalInfoInterface
            return {
                name: v.fullname.split(" ")[0],
                surname: v.fullname.split(" ")[1],
                brief_description: v.brief_description,
                social_media_data: v.social_media_data
            }
        });
    }
}

export function getPersonalInformationObject (): Promise<PersonalInformation> {
    return new PersonalInformationSanity().init();
}