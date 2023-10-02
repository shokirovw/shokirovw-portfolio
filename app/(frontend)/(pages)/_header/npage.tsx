import getWeather from "@/lib/scripts/getWeather";
import OurAudioPanel from "../../_lib/scripts/AudioPanelCreator";
import PingInfoBlock from "../../_lib/components/PingInfoBlock";
import HeaderComponent from "../../_lib/components/Header";
import OurNavigationBar from "../../_lib/scripts/NavigationBarCreator";

export default async function Header () {
    const weather_data_text = (await getWeather()).getBriefInfo();

    return (
        <HeaderComponent 
            left_side={<OurAudioPanel />}    
            center={<OurNavigationBar />}    
            right_side={<PingInfoBlock text={weather_data_text} />}
        />
    );
}