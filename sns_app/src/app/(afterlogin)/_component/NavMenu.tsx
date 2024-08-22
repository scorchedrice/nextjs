"use client"

import {useSelectedLayoutSegment} from "next/navigation";

export default function NavMenu() {
        const segment = useSelectedLayoutSegment();
        // segment : 나의 위치를 의미
        console.log(segment)

    return (

    );
}