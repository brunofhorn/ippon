import { Nunito } from "next/font/google";

import SidebarMenu from "@/components/SidebarMenu";
import { Timeline } from "@/components/Timeline";
import { Typography } from "@/components/Typography";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Dashboard - Ippon",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full bg-background">
            <body className={`${nunito.className} h-full bg-background`}>
                <section className="flex bg-background">
                    <SidebarMenu />
                    <div className="flex flex-row ml-5 justify-between text-xl text-gray-900 font-semibold bg-whiteSideBar min-h-screen w-screen rounded-ss-3xl rounded-es-3xl shadow-bodyShadow">
                        <div className="flex flex-col flex-1 p-10">{children}</div>
                        <div className="sticky top-0 bg-white p-6 h-screen rounded-ss-3xl rounded-es-3xl w-80 shadow-bodyShadow">
                            <Typography variant="h1">Como Funciona?</Typography>
                            <Typography variant="p" className="mt-4">
                                Faça a combinação entre unidades, turmas e alunos para conseguir ter um gerenciamento
                                sobre as aulas e recebimentos sobre as turmas.
                            </Typography>
                            <Typography variant="p" className="mt-4">
                                Durante os cadastros será necessario preencher informações sobre as unidades,
                                mensalidades e informações sobre os alunos.
                            </Typography>
                            <Timeline className="mt-6" />
                        </div>
                    </div>
                </section>
            </body>
        </html>
    );
}
