import dynamic from "next/dynamic";
import P5JSPageCommon from "../common";

const P5JSSoundCircle = dynamic(() => import('./p5'), { ssr: false })

export default function P5JSSample () {
    return (
        <P5JSPageCommon project_name={"Sound-Reactive Circle"}>
            <P5JSSoundCircle />
        </P5JSPageCommon>
    )
}