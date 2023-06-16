import { twMerge } from "tailwind-merge";

import { IEmptyPage } from "@/interfaces/components";

import { Button } from "../Button";
import { Typography } from "../Typography";

export const EmptyPage = ({ className, title, description, buttons = [] }: IEmptyPage) => {
    return (
        <div
            className={twMerge(
                className,
                "bg-background rounded-3xl p-10 h-screen w-full flex flex-col justify-center items-center",
            )}
        >
            <img src="https://ippon-frontend-web.vercel.app/static/media/no-data.3b77aebc7e95b60272bf1328d7809b83.svg" />
            <Typography variant="h1" className="text-textBlack text-center mt-6">
                {title}
            </Typography>
            <Typography variant="h2" className="mt-4 text-textBlack text-center">
                {description}
            </Typography>
            {buttons?.length > 0 && (
                <div className="flex flex-rol gap-2 mt-8">
                    {buttons.map((button, index) => (
                        <Button key={index} {...button} className="text-base font-bold" />
                    ))}
                </div>
            )}
        </div>
    );
};
