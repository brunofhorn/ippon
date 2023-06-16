import { twMerge } from "tailwind-merge";

import { IBadge } from "@/interfaces/components";

import { Typography } from "../Typography";

const types = {
    default: "bg-badgeGray text-textBadge dark:bg-blue-900 dark:text-blue-300",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    success: "bg-success text-white dark:bg-green-900 dark:text-green-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    info: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
};

export const Badge = ({ text, type = "default", className }: IBadge) => {
    return (
        <Typography
            variant="span"
            className={twMerge(types[type], "text-xxs font-medium px-2.5 py-0.5 rounded", className)}
        >
            {text}
        </Typography>
    );
};
