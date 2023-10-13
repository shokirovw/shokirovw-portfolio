import { IconName, getIcon } from "./ClientIcons";
import Image from "next/image";

export default function CustomCard ({ pictureSrc = "", picturePos = "50% 50%", roundFull = true, heading, subheading, text, actions }: {
    pictureSrc?: string; picturePos?: string; roundFull?: boolean; heading: string; subheading: string; text: string; 
    actions: { text: string; buttonType?: boolean; iconname?: IconName; action: string }[]
}) {
    let picture_round_classname = roundFull ? "rounded-full" : "rounded-md";

    let picture_block = <></>;

    if (pictureSrc != "") {
        picture_block = <div className="w-fit">
            <div className={`w-12 h-12 overflow-hidden ${picture_round_classname}`}>
                <Image src={pictureSrc} alt="" width={85} height={45} className='transition-all w-full h-full object-cover' style={{ objectPosition: picturePos }}  />
            </div>
        </div>;
    }

    return (
      <div className="h-full p-4 ring-2 ring-emerald-600/80 rounded-xl bg-emerald-700/95 hover:bg-emerald-700/80 hover:ring-emerald-500/80 transition-all">
        <div className="w-full space-y-4 flex flex-col h-full">
            <div className="w-full h-fit flex gap-x-5">
                {picture_block}
                <div className="grow">
                    <p className="font-heading text-emerald-100 text-xl md:text-2xl lg:text-2xl">{heading}</p>
                    <p className="font-regular text-emerald-100 text-sm">{subheading}</p>
                </div>
            </div>
            <p className="contentp text-sm grow">{text}</p>
            <div className="flex items-center gap-x-5 flex-wrap">
                {actions.map((action, i) => {
                    let Icon = action.iconname ? getIcon(action.iconname) : () => <></>;
                    
                    if (action.buttonType && action.buttonType == true) {
                        return <a key={i} href={action.action}><button className='flex flex-row items-center gap-x-2 text-green-400/90 px-2 py-1 rounded-lg bg-emerald-800/90'><Icon />{action.text}</button></a>
                    } else {
                        return <a key={i} href={action.action} className="text-sm text-green-400/90 underline">{action.text}</a>
                    }
                })}
            </div>
        </div>
      </div>
    );
  }