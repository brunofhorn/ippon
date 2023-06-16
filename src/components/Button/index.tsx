import { twMerge } from "tailwind-merge";

import { IButton } from "@/interfaces/components";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const buttonStyles = {
    normal: {
        primary: "bg-primary hover:bg-primary_hover text-white",
        secondary: "bg-secondary hover:bg-secondary_hover text-white",
        danger: "bg-error hover:bg-error_hover text-white",
        default: "",
    },
    outline: {
        primary: "bg-white border-primary border hover:bg-primary text-black_four hover:text-white",
        secondary: "bg-white border-secondary hover:bg-secondary hover:text-white text-black_four ",
        danger: "bg-error hover:bg-error_hover text-white",
        default: "",
    },
};

export const Button = ({
    text,
    type = "button",
    variant = "normal",
    color = "secondary",
    icon,
    iconHover,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleClick = () => {},
    disabled = false,
    className,
}: IButton) => {
    return (
        <button
            className={twMerge(
                className,
                buttonStyles[variant][color],
                "py-2 group rounded-lg w-full font-bold justify-center items-center disabled:bg-gray_three disabled:text-gray_two flex flex-row gap-2",
            )}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            {icon ? <div className="group-hover:hidden">{icon}</div> : null}
            <div className="hidden group-hover:block">{iconHover ?? null}</div>
            {capitalizeFirstLetter(text)}
        </button>
    );
};
