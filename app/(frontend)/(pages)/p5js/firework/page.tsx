import dynamic from "next/dynamic";
import P5JSPageCommon from "../common";

const P5JSColorInterpolation = dynamic(() => import('./p5'), { ssr: false })

export default function P5JSSample () {
    return (
        <P5JSPageCommon project_name={"Falling Fireworks"}>
            <P5JSColorInterpolation />
        </P5JSPageCommon>
    )
}