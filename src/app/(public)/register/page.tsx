"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Hint } from "@/components/Hint";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import Document from "@/icons/outline/Document";
import Email from "@/icons/outline/Email";
import Eye from "@/icons/outline/Eye";
import EyeClose from "@/icons/outline/EyeClose";
import Phone from "@/icons/outline/Phone";
import User from "@/icons/outline/User";
import Camera from "@/icons/solid/Camera";
import { UserRegisterForm, UserRegisterScheme } from "@/services/validations/user.register.scheme";

export default async function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegisterForm>({
        defaultValues: {
            name: "",
            last_name: "",
            email: "",
            phone_number: "",
            registerNumber: "",
            password: "",
            confirm_password: "",
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
                <div className="mt-8 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2 w-full">
                            <div className="w-full">
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
                            <div className="w-full">
                                <Controller
                                    name="last_name"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="last_name"
                                            label="Sobrenome"
                                            error={!!errors.last_name || !!errors.root}
                                            icon={<User width={15} height={15} />}
                                        />
                                    )}
                                />
                                {errors.last_name && <Hint text={errors.last_name.message} />}
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 w-full">
                            <div className="w-full">
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="email"
                                            label="E-mail"
                                            type="email"
                                            error={!!errors.email || !!errors.root}
                                            icon={<Email width={15} height={15} />}
                                        />
                                    )}
                                />
                                {errors.email && <Hint text={errors.email.message} />}
                            </div>
                            <div className="w-full">
                                <Controller
                                    name="phone_number"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="phone_number"
                                            label="Telefone"
                                            error={!!errors.phone_number || !!errors.root}
                                            icon={<Phone width={15} height={15} />}
                                        />
                                    )}
                                />
                                {errors.phone_number && <Hint text={errors.phone_number.message} />}
                            </div>
                        </div>
                        <div className="w-full">
                            <Controller
                                name="registerNumber"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        id="registerNumber"
                                        label="CPF / CNPJ"
                                        type="text"
                                        error={!!errors.registerNumber || !!errors.root}
                                        icon={<Document width={15} height={15} />}
                                    />
                                )}
                            />
                            {errors.registerNumber && <Hint text={errors.registerNumber.message} />}
                        </div>
                        <div className="flex flex-row gap-2 w-full">
                            <div className="w-full">
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="password"
                                            label="Senha"
                                            error={!!errors.password || !!errors.root}
                                            type={isPasswordVisible ? "text" : "password"}
                                            icon={
                                                isPasswordVisible ? (
                                                    <Eye width={15} height={15} />
                                                ) : (
                                                    <EyeClose width={15} height={15} />
                                                )
                                            }
                                            onClickIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                                        />
                                    )}
                                />
                                {errors.password && <Hint text={errors.password.message} />}
                            </div>
                            <div className="w-full">
                                <Controller
                                    name="confirm_password"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="confirm_password"
                                            label="Confirmar Senha"
                                            error={!!errors.confirm_password || !!errors.root}
                                            type={isPasswordVisible ? "text" : "password"}
                                            icon={
                                                isPasswordVisible ? (
                                                    <Eye width={15} height={15} />
                                                ) : (
                                                    <EyeClose width={15} height={15} />
                                                )
                                            }
                                            onClickIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                                        />
                                    )}
                                />
                                {errors.confirm_password && <Hint text={errors.confirm_password.message} />}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
