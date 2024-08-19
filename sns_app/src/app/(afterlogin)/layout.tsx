import { ReactNode } from "react";

export default function AfterLoginLayout({children} : {children: ReactNode}) {
    return (
        <div>
            애프터로그인레이아웃
            {children}
        </div>
    )
}