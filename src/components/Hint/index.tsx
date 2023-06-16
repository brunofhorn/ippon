import { twMerge } from "tailwind-merge";

import { IHint } from "@/interfaces/components";

const colors = {
    danger: "text-error",
    success: "text-success",
    info: "text-info",
    warning: "text-warning",
    default: "text-default",
};

export const Hint = ({ text = "", color = "danger" }: IHint) => {
    return <small className={twMerge("text-xs", colors[color])}>{text}</small>;
};
