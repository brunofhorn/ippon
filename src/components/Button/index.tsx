import { twMerge } from "tailwind-merge";

import { IButton } from "@/interfaces/components";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const buttonStyles = {
    normal: {
        primary: "bg-primary hover:bg-primaryHover text-textBlack",
        secondary: "bg-secondary hover:bg-secondaryHover text-white",
        danger: "bg-danger hover:bg-dangerHover text-white",
        default: "",
    },
    outline: {
        primary: "bg-white border-primary hover:bg-primary text-textBlack",
        secondary: "bg-white border-secondary hover:bg-secondary hover:text-white text-textBlack ",
        danger: "bg-danger hover:bg-dangerHover text-white",
        default: "",
    },
};

export const Button = ({
    text,
    type = "button",
    variant = "normal",
    color = "primary",
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
                "py-2 px-6 rounded-lg w-full font-bold disabled:bg-disabled disabled:text-defaultGray",
            )}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            {capitalizeFirstLetter(text)}
        </button>
    );
};
