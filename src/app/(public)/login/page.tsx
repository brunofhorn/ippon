"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import * as yup from "yup";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@/components/Button";
import { Hint } from "@/components/Hint";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { Modal } from "@/components/Modal";
import { Typography } from "@/components/Typography";
import { useAuthContext } from "@/contexts/AuthContext";
import Eye from "@/icons/Eye";
import EyeClose from "@/icons/EyeClose";
import User from "@/icons/User";
import { IModal } from "@/interfaces/components";

import Logo from "../../../assets/img/logo.png";

const schema = yup.object({
    email: yup.string().required("O usuário é obrigatório."),
    password: yup.string().required("A senha do usuário é obrigatório."),
});

type ILoginForm = yup.InferType<typeof schema>;

export default async function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter();
    const [modal, setModal] = useState<IModal>({});
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuthContext();
    const {
        control,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        setError,
        clearErrors,
    } = useForm<ILoginForm>({
        defaultValues: {
            email: "bruno.horn@stratusport.co",
            password: "123456",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: ILoginForm) => {
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

    useEffect(() => {
        setIsLoading(true);
        const cookies = parseCookies();
        const token = JSON.parse(cookies["ippon-logged-user"]);

        console.log(token, cookies);

        if (token) {
            router.push("/dashboard");
        }

        return () => {
            setIsLoading(false);
        };
    }, []);

    return (
        <>
            {isLoading && <Loading />}
            <div className={"flex flex-row bg-gradient-login bg-contain bg-no-repeat bg-left-top h-screen"}>
                <Modal {...modal} />
                <div className="flex w-2/5 items-center justify-center hidden md:block"></div>
                <div className="flex justify-center items-center w-3/5 bg-white shadow-md rounded-ss-3xl rounded-es-3xl h-screen">
                    <div className="flex flex-col pr-10 pb-0 pl-6 gap-8 items-center justify-center flex flex-1">
                        <div className="flex flex-col justify-center items-center">
                            <Image src={Logo} alt="Ippon" width={100} />
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
                                        {errors.email && <Hint text={errors.email.message} />}
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
                                                        passwordVisible ? (
                                                            <Eye width={15} height={15} />
                                                        ) : (
                                                            <EyeClose width={15} height={15} />
                                                        )
                                                    }
                                                    onClickIcon={() => setPasswordVisible(!passwordVisible)}
                                                    error={!!errors.password || !!errors.root}
                                                />
                                            )}
                                        />
                                        {errors.password && <Hint text={errors.password.message} />}
                                    </div>
                                    <div className="flex justify-center items-center my-2">
                                        {!!errors.root && <Hint text={errors.root.message} />}
                                    </div>
                                    <div className="mt-8 flex items-center justify-center gap-4 px-10">
                                        <Button
                                            text={"Cadastrar-se"}
                                            color="secondary"
                                            handleClick={() => router.push("/register/")}
                                        />
                                        <Button text={"Login"} type={"submit"} disabled={!isValid} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="bottom-6 absolute">
                            <Typography className="text-sm font-normal" variant="p">
                                Copyright 2022 © IPPON - Sistema de gerenciamento e planejamento
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
