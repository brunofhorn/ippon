"use client";

import { useRouter } from "next/navigation";

import { Suspense } from "react";

import { EmptyPage } from "@/components/EmptyPage";
import { TitlePage } from "@/components/TitlePage";
import { Typography } from "@/components/Typography";
import { UnitsList } from "@/components/UnitsList";
import { IUnits } from "@/interfaces/response";
import { getUnits } from "@/services/units/getUnits";

export default async function Units() {
    const router = useRouter();
    const units = [1, 2, 3, 4, 5];

    const handleNewUnit = () => {
        router.push("/units/add-unit");
    };

    if (units.length < 0) {
        return (
            <>
                <TitlePage title="Unidades" subtitle="Lista de unidades cadastradas" />
                <EmptyPage
                    className="mt-6"
                    image={<div></div>}
                    title="Nenhuma unidade cadastrada!"
                    description="Para inserir turmas e vincular alunos, é preciso cadastrar previamente as unidades. Certifique-se de cadastrar todas as unidades necessárias antes de criar turmas e matricular alunos."
                    buttons={[
                        {
                            text: "Cadastrar unidade(s)",
                            color: "primary",
                            type: "button",
                            handleClick: handleNewUnit,
                        },
                    ]}
                />
            </>
        );
    }

    return (
        <>
            <TitlePage title="Unidades" subtitle="Lista de unidades cadastradas" />
            <Suspense fallback={<div>Loading...</div>}>
                <UnitsList className="mt-8" units={units} />
            </Suspense>
        </>
    );
}
