// This file (class) acts primarily as a bridge between PersonalInfo and Design Components (Social); makes components ready to call
import SocialLinksPanel from "../components/social_links_panel";
import { getPersonalInformationObject } from "./PersonalInfoCreator";

import { DesignSocialLink } from "../components/ClientIcons";
import { PersonalInfoSocialAccountType } from "../classes/PersonalInfo";

export interface SocialMediaComponentsInterface {
    IconsArrangedInRow (): JSX.Element;
}

export async function getSocialMediaComponentsJSX () {
    let personal_info_social: PersonalInfoSocialAccountType[] = (await getPersonalInformationObject()).getSocialMediaInfo();
    let social_media_data: DesignSocialLink[] = [];

    for (let i = 0; i < personal_info_social.length; ++i) {
        social_media_data.push({
            href: personal_info_social[i].profile_link,
            iconname: personal_info_social[i].network_name
        })
    }

    return {
        IconsArrangedInRow: () => <SocialLinksPanel data={social_media_data} />
    }
}