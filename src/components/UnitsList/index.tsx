import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";

import { useForm, Controller } from "react-hook-form";

import { IUnitList } from "@/interfaces/components";
import { UnitsFilterForm, UnitsFilterScheme } from "@/services/validations/units.filter.scheme";

import SelectFilter from "../SelectFilter";
import { Unit } from "./Unit";

export const UnitsList = ({ units = [], className }: IUnitList) => {
    const { handleSubmit, control } = useForm<UnitsFilterForm>({
        resolver: zodResolver(UnitsFilterScheme),
    });

    const onSubmit = async (data: UnitsFilterForm) => {
        console.log(data);
    };

    const handleUnitChange = () => {
        console.log("CHANGE UNIT");
    };

    return (
        <div className={twMerge(className, "bg-background rounded-3xl pb-6 min-h-screen w-full")}>
            <div id="filter-units" className="bg-badgeWhiteGray border border-badgeGray rounded-2xl px-6 py-4">
                <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="unit"
                        control={control}
                        render={({ field }) => (
                            <SelectFilter
                                {...field}
                                id={"unit"}
                                placeholder="Unidade"
                                items={[{ id: 1, name: "Leslie Alexander" }]}
                            />
                        )}
                    />
                    <Controller
                        name="class"
                        control={control}
                        render={({ field }) => (
                            <SelectFilter
                                {...field}
                                id={"class"}
                                placeholder="Turma"
                                items={[{ id: 1, name: "Leslie Alexander" }]}
                            />
                        )}
                    />
                    <Controller
                        name="student"
                        control={control}
                        render={({ field }) => (
                            <SelectFilter
                                {...field}
                                id={"student"}
                                placeholder="Situação"
                                items={[{ id: 1, name: "Leslie Alexander" }]}
                            />
                        )}
                    />
                </form>
            </div>
            <div className={"grid grid-cols-3 gap-6 px-6 mt-4"}>
                {units.map((unidade, index) => (
                    <Unit key={index} />
                ))}
            </div>
        </div>
    );
};
