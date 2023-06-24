"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@/components/Button";
import { Hint } from "@/components/Hint";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { Modal } from "@/components/Modal";
import { Typography } from "@/components/Typography";
import { useAuthContext } from "@/contexts/AuthContext";
import Eye from "@/icons/outline/Eye";
import EyeClose from "@/icons/outline/EyeClose";
import User from "@/icons/outline/User";
import { IModal } from "@/interfaces/components";
import { UserLoginForm, UserLoginScheme } from "@/services/validations/user.login.scheme";
import { Logomarca } from "@/utils/images";

export const metadata = {
    title: "Login - Ippon",
    description: "Gerenciamento de Academias de Artes Marciais",
};

export default async function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter();
    const [modal, setModal] = useState<IModal>({});
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuthContext();
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        setError,
        clearErrors,
    } = useForm<UserLoginForm>({
        defaultValues: {
            email: "bruno.horn@stratusport.co",
            password: "123456",
        },
        resolver: zodResolver(UserLoginScheme),
    });

    const onSubmit = async (data: UserLoginForm) => {
        clearErrors();

        if (data.email === "" || data.password === "") {
            setModal({
                isOpen: true,
                title: "ATENÇÃO!",
                children: <p>{"Para prosseguir é necessário preencher todos os campos e aceitar os termos."}</p>,
            });
            return;
        }

        setIsLoading(true);

        try {
            const logged: any = await login(data.email, data.password);

            if (!logged.error) {
                router.push("/dashboard");
            } else {
                setError("root", { type: "custom", message: "Os dados de login estão inválidos." });
            }
        } catch (e: unknown) {
            if (typeof e === "string") {
                setError("root", { type: "custom", message: e });
            } else if (e instanceof Error) {
                setError("root", { type: "custom", message: e.message });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loading />}
            <Modal {...modal} />
            <div className="flex flex-col pr-10 pb-0 pl-6 gap-8 items-center justify-center h-full">
                <div className="flex flex-col justify-center items-center">
                    <Image src={Logomarca} alt="Ippon" width={150} />
                    <Typography className="text-sm font-normal mt-4">
                        Sistema de gerenciamento e planejamento de aulas
                    </Typography>
                </div>
                <div className="w-3/5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full justify-center items-center gap-2">
                            <div>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="email"
                                            label="Usuário"
                                            error={!!errors.email || !!errors.root}
                                            icon={<User width={15} height={15} />}
                                        />
                                    )}
                                />
                                {errors.email && <Hint text={errors.email?.message} />}
                            </div>
                            <div className="mt-4">
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="password"
                                            label="Senha"
                                            type={passwordVisible ? "text" : "password"}
                                            icon={
                                                <button onClick={() => setPasswordVisible(!passwordVisible)}>
                                                    {passwordVisible ? (
                                                        <Eye width={15} height={15} />
                                                    ) : (
                                                        <EyeClose width={15} height={15} />
                                                    )}
                                                </button>
                                            }
                                            error={!!errors.password || !!errors.root}
                                        />
                                    )}
                                />
                                {errors.password && <Hint text={errors.password?.message} />}
                            </div>
                            <div className="flex justify-center items-center my-2">
                                {!!errors.root && <Hint text={errors.root.message} />}
                            </div>
                            <div className="mt-8 flex items-center justify-center gap-4 px-10">
                                <Button
                                    text={"Cadastrar-se"}
                                    color="primary"
                                    handleClick={() => router.push("/register/")}
                                />
                                <Button text={"Login"} type={"submit"} disabled={!isValid} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bottom-6 absolute">
                <Typography className="text-sm font-normal" variant="p">
                    Copyright 2022 © IPPON - Sistema de gerenciamento e planejamento
                </Typography>
            </div>
        </>
    );
}
