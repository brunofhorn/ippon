"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, Controller } from "react-hook-form";

import { Hint } from "@/components/Hint";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import Camera from "@/icons/Camera";
import User from "@/icons/User";
import { UserRegisterForm, UserRegisterScheme } from "@/services/validations/user.register.scheme";

export default async function Register() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegisterForm>({
        defaultValues: {
            name: "",
            last_name: "",
        },
        resolver: zodResolver(UserRegisterScheme),
    });

    const onSubmit = async (data: UserRegisterForm) => {
        console.log(data);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="bg-gray_five py-2 px-4 rounded-2xl w-24 h-24 flex flex-col justify-center items-center">
                    <div className="h-14 w-14 bg-gray rounded-full">
                        <Camera />
                    </div>
                    <Typography variant="span" className="text-xxs font-bold">
                        Foto de perfil
                    </Typography>
                </div>
                <div className="mt-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full justify-center items-center gap-2">
                            <div>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="name"
                                            label="Nome"
                                            error={!!errors.name || !!errors.root}
                                            icon={<User width={15} height={15} />}
                                        />
                                    )}
                                />
                                {errors.name && <Hint text={errors.name.message} />}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
