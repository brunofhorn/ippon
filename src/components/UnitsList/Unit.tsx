import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

import { Fragment } from "react";

import { unit_menus } from "@/data/unit_menu";
import Calendar from "@/icons/Calendar";
import IconDots from "@/icons/IconDots";
import { AvatarExemplo, AvatarLogo } from "@/utils/images";

import { Badge } from "../Badge";
import { Button } from "../Button";
import { Typography } from "../Typography";

export const Unit = () => {
    return (
        <div className="bg-iceWhite h-[276px] w-[255px] px-2 pt-2 pb-4 rounded-3xl shadow-lg">
            <div className="bg-disabled rounded-2xl p-2">
                <div className="flex flex-row justify-between">
                    <div
                        id="logo"
                        className="w-[103px] h-[78px] px-2 py-4 rounded-2xl bg-background flex flex-col justify-center items-center"
                    >
                        <Image src={AvatarLogo} alt="" width={38} height={38} />
                        <Typography variant="span" className="font-bold mt-2">
                            Combat club
                        </Typography>
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="w-6 h-6 rounded-lg bg-iceWhite flex justify-center items-center">
                                <IconDots />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {unit_menus.map((menu, index) => (
                                    <div className="px-1 py-1 " key={index}>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    onClick={menu.onClick}
                                                    className={`${
                                                        active ? "bg-primary text-white" : "text-gray-900"
                                                    } cursor-pointer group flex w-full gap-2 items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? <>{menu.iconHover}</> : <>{menu.icon}</>}
                                                    {menu.text}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div id="students" className="flex justify-end items-center mt-4">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map((image, index) => (
                            <Image
                                key={index}
                                className="border-2 border-white rounded-full dark:border-gray-800"
                                src={AvatarExemplo}
                                alt=""
                                width={32}
                                height={32}
                            />
                        ))}
                    </div>
                    <Typography variant="h6" className="font-bold">
                        +13
                    </Typography>
                </div>
            </div>
            <div className="h-1/2 px-2 mt-4">
                <div className="flex flex-rol justify-between">
                    <Typography variant="h6">Total de turmas</Typography>
                    <Typography variant="h6" className="font-bold">
                        02
                    </Typography>
                </div>
                <div className="flex flex-rol justify-between mt-1">
                    <Typography variant="h6">Situação</Typography>
                    <Badge text="Ativo" type="success" className="text-white" />
                </div>
                <div className="flex flex-rol gap-4 mt-4">
                    <Button
                        text="Turmas"
                        type="button"
                        variant="normal"
                        color="primary"
                        handleClick={() => alert("TURMAS")}
                        className="text-sm font-bold"
                    />
                    <Button
                        text="Alunos"
                        type="button"
                        variant="normal"
                        color="secondary"
                        handleClick={() => alert("TURMAS")}
                        className="text-sm font-bold"
                    />
                </div>
            </div>
        </div>
    );
};
