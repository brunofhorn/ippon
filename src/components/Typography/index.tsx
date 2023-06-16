/* eslint-disable @typescript-eslint/no-empty-function */
import { twMerge } from "tailwind-merge";

interface ITypography extends React.PropsWithChildren {
    className?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

const defaultStyles = {
    p: "text-xs font-normal", // FONT 12 - 400
    h1: "text-2xl font-bold text-black_two", // FONT 24 - 700
    h2: "text-base font-normal", // FONT 16 - 400
    h3: "text-base font-normal text-gray_six", // FONT 16 - 400
    h4: "",
    h5: "",
    h6: "text-sm font-normal", // FONT 14 - 400
    span: "text-xs font-normal", // FONT 12 - 400
};

export const Typography = ({ className = "", variant = "span", children }: ITypography) => {
    const Component = variant;

    return <Component className={twMerge(defaultStyles[variant], className)}>{children}</Component>;
};
