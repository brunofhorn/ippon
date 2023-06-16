import { twMerge } from "tailwind-merge";

import { IButton } from "@/interfaces/components";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const buttonStyles = {
    normal: {
        primary: "bg-primary hover:bg-primary_hover text-black_four",
        secondary: "bg-secondary hover:bg-secondary_hover text-white",
        danger: "bg-error hover:bg-error_hover text-white",
        default: "",
    },
    outline: {
        primary: "bg-white border-primary hover:bg-primary text-black_four",
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
                "py-2 px-6 rounded-lg w-full font-bold disabled:bg-gray_three disabled:text-gray_two",
            )}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            {capitalizeFirstLetter(text)}
        </button>
    );
};
