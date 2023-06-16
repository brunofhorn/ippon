"use client";
import Link from "next/link";

import { useState } from "react";

import { extra_menus } from "@/data/extra_menu";
import { menus } from "@/data/menu";
import AvatarDefault from "@/icons/AvatarDefault";
import CloseMenu from "@/icons/CloseMenu";
import OpenMenu from "@/icons/OpenMenu";

import { Logo } from "../Logo";
import { Typography } from "../Typography";
import { Menu } from "./Menu";

export default function SidebarMenu() {
    const [open, setOpen] = useState(true);

    return (
        <div
            className={`sticky top-0 h-screen bg-background ${
                open ? "w-36" : "w-16"
            } duration-500 text-darkBlue pl-4 relative`}
        >
            <Link href="/dashboard" className="flex items-center justify-center">
                <Logo minimized={!open} className="mt-7 mb-5" />
            </Link>
            <div className="mt-1 flex flex-col gap-1 relative">
                <Menu isOpen={open} items={menus} />
                <div className="mt-5">
                    <Menu isOpen={open} items={extra_menus} />
                </div>
                <div
                    className="py-3 flex justify-end cursor-pointer absolute -right-10 top-[41%]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <CloseMenu /> : <OpenMenu />}
                </div>
            </div>
            <Link
                href={"/profile"}
                className="absolute bottom-2 pl-2 pr-4 py-1 flex flex-row items-center justify-center gap-2 whitespace-break-spaces"
            >
                <div className="flex flex-1">
                    <AvatarDefault width={32} height={32} />
                </div>
                {open && (
                    <Typography variant="span" className="text-xs font-bold">
                        Bruno Fernandes
                    </Typography>
                )}
            </Link>
        </div>
    );
}
