'use client';

import { usePathname } from "next/navigation";

export function getCurrentPathname () {
    const pathname = usePathname();

    return pathname;
}
