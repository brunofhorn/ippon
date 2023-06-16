import Link from "next/link";
import { usePathname } from "next/navigation";

import { IMenu, IMenuItem } from "@/interfaces/menu";

export const Menu = ({ items = [], isOpen }: IMenu) => {
    const pathname = usePathname();

    return (
        <>
            {items?.map((menu: IMenuItem, i) => (
                <Link
                    key={i}
                    href={menu.disable ? "" : menu.link}
                    className={`menu group flex items-center text-sm gap-2 font-medium px-2 py-1 rounded-md hover:font-extrabold`}
                >
                    <div
                        className={`
                            p-2 border-gray_three border rounded-lg hover:shadow-lg
                            ${menu.extra ? "bg-white" : "bg-gray_four"}
                            ${menu.disable && "opacity-30"}
                            ${menu.link === pathname && "bg-gray_three shadow-lg"}
                            group-hover:shadow-lg
                        `}
                    >
                        {menu.icon}
                    </div>
                    <h2
                        style={{ transitionDelay: `${i + 2}00ms` }}
                        className={`
                            whitespace-pre duration-500 text-primary 
                            ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"}
                            ${menu.disable && "opacity-30"}
                            ${menu.link === pathname && "font-extrabold"}
                            group-hover:font-extrabold
                        `}
                    >
                        {menu?.name}
                    </h2>
                    <div
                        className={`${
                            isOpen && "hidden"
                        } absolute left-48 z-50 group-hover:p-1 hover:font-extrabold drop-shadow-lg w-0 overflow-hidden group-hover:left-14 group-hover:duration-300 group-hover:w-fit flex`}
                    >
                        <h2 className="bg-primary whitespace-pre text-white font-bold rounded-md px-0 py-0 group-hover:px-2 group-hover:py-1">
                            {menu?.name}
                        </h2>
                    </div>
                </Link>
            ))}
        </>
    );
};
