import StandartFooter from "../../_lib/components/standart_footer";
import { getPersonalInformationObject } from "../../_lib/scripts/PersonalInfoCreator";
import { getSocialMediaComponentsJSX } from "../../_lib/scripts/SocialMediaComponentsReady";

export default async function Footer () {
    const SocialMediaDesigner = await getSocialMediaComponentsJSX();
    const user_name = (await getPersonalInformationObject()).getFullName();
    const current_year = new Date().getFullYear();

    return <StandartFooter 
        text={`© ${current_year} ${user_name} `} 
        extended_block={<SocialMediaDesigner.IconsArrangedInRow />} 
    />
}



