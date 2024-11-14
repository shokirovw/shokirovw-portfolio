'use client';

import { useState } from "react";
import P5JSSketch from "../../../sketch_manifest";
import P5JSPageCommon from "../common";

export default function P5JSSample () {

    const [okWeAreOn, setokWeAreOn] = useState(false);

    return (
        <P5JSPageCommon project_name={"Homepage Visual"}>
            <p className="mt-2 text-emerald-100">Note: You can play with it using your cursor</p>
            <P5JSSketch setOkWeAreOn={setokWeAreOn} />
        </P5JSPageCommon>
    )
}