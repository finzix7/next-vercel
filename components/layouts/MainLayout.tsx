import Head from "next/head"
import { FC, ReactNode } from "react"
import { NavBar } from "../NavBar"

interface Props {
    children: ReactNode,
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Home - Diego</title>
            </Head>

            <NavBar />

            <main className="flex min-h-screen flex-col items-center justify-between p-24">

                {children}

            </main>
        </div>
    )
}
