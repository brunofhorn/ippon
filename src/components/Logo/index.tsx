import Image from "next/image";

import { ILogo } from "@/interfaces/image";
import { Logomarca, LogomarcaMinified } from "@/utils/images";

export const Logo = ({ minimized = false, className = "" }: ILogo) => {
    return (
        <Image
            src={minimized ? LogomarcaMinified : Logomarca}
            alt={"Ippon"}
            width={minimized ? 40 : 160}
            height={40}
            className={`${className} h-[40px]`}
        />
    );
};
