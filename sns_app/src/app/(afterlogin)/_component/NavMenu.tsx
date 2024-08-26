"use client"

import {useSelectedLayoutSegment} from "next/navigation";
import style from "./navMenu.module.css"
import Link from "next/link";

export default function NavMenu() {
        const segment = useSelectedLayoutSegment();
        // segment : 나의 위치를 의미
    const me = "";
    return (
        <>
            <div>
                <Link href='/home'>
                    홈으로
                </Link>
            </div>
            <div>
                <Link href='/messages'>
                    Message
                </Link>
            </div>
            <div>
                <Link href='/profile'>
                    Profile Page
                </Link>
            </div>
            <div>
                <Link href='/search'>
                    Search Page
                </Link>
            </div>
        </>
    );
}