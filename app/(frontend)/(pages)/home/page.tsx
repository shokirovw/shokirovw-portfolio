export const dynamic = 'force-static'

import HomepageBlockWithVisuals from "../../_lib/components/homepage_block_with_visuals";
import { getPersonalInformationObject } from "../../_lib/scripts/PersonalInfoCreator";
import { getSocialMediaComponentsJSX } from "../../_lib/scripts/SocialMediaComponentsReady";

export default async function HomepageServer () {
  let global_info = await getPersonalInformationObject();
  let SocialMediaDesigner = await getSocialMediaComponentsJSX();
  
  // Next step is to generalize our design. 
  //    1. By moving some code to the tailwind.config.js
  //    2. By creating ourDesigner class adhering to some well-defined interface
  //    3. By creating new tags, like Y1...
  //    4. By making good use of .css

  return <HomepageBlockWithVisuals 
      heading={global_info.getFullName()} 
      description={global_info.getBriefDescription()} 
      extended_block={<SocialMediaDesigner.IconsArrangedInRow />} 
  />
} 