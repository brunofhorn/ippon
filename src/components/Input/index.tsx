/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

import { IInput } from "@/interfaces/form";

export const Input = ({
    id,
    label,
    type = "text",
    mask = "",
    value,
    setValue,
    onBlur,
    maxLength,
    icon = "",
    onClickIcon,
    error,
    ...rest
}: IInput) => {
    const handleClickIcon = () => {
        onClickIcon?.();
    };

    return (
        <div className="relative mb-3 w-full" data-te-input-wrapper-init>
            <input
                type="text"
                className="peer border border-gray_two block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id={id}
                placeholder={label}
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:bg-white peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
                {label}
            </label>
        </div>
    );
};
