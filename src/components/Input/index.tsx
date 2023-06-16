/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { forwardRef } from "react";

import { IInput } from "@/interfaces/form";

export const Input = forwardRef<HTMLInputElement, IInput>(
    ({ id, label, type = "text", value, setValue, onBlur, maxLength, icon = "", onClickIcon, error, ...rest }, ref) => {
        const handleClickIcon = () => {
            onClickIcon?.();
        };

        return (
            <div className="relative h-10 w-full min-w-[200px]">
                {icon && (
                    <div
                        className={`absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500 ${
                            onClickIcon ? "cursor-pointer" : "cursor-default"
                        }`}
                        onClick={handleClickIcon}
                    >
                        {icon}
                    </div>
                )}
                <input
                    className={`
                    peer 
                    h-full 
                    w-full 
                    rounded-[7px] 
                    border
                    ${error ? "border-danger" : "border-defaultGray"} 
                    bg-transparent 
                    px-3 
                    py-2.5 
                    text-sm 
                    font-normal 
                    outline 
                    outline-0 
                    transition-all 
                    ${error ? "placeholder:text-danger" : "placeholder:text-defaultGray"}
                    hover:border-black
                    ${error ? "focus:border-danger" : "focus:border-yellow-500"}
                    focus:border-t-transparent 
                    ${value !== "" && "border-t-transparent hover:border-t-transparent"} 
                    focus:outline-0 
                    disabled:border-0 
                    disabled:bg-blue-gray-50
                `}
                    ref={ref}
                    placeholder=" "
                    id={id}
                    name={id}
                    value={value}
                    type={type}
                    onChange={e => (setValue ? setValue(e.target.value) : null)}
                    onBlur={e => (onBlur ? onBlur(e.target.value) : () => {})}
                    maxLength={maxLength}
                    {...rest}
                />
                <label
                    className={`
                    before:content[' ']
                    after:content[' ']
                    pointer-events-none
                    absolute
                    left-0
                    -top-1.5
                    flex
                    h-full
                    w-full
                    select-none
                    text-[11px]
                    font-normal
                    leading-tight
                    ${error ? "text-danger" : "text-black"}
                    transition-all
                    before:pointer-events-none
                    before:mt-[6.5px]
                    before:mr-1
                    before:box-border
                    before:block
                    before:h-1.5
                    before:w-2.5
                    before:rounded-tl-md
                    before:border-t
                    before:border-l
                    before:border-blue-gray-200
                    hover:before:border-black
                    before:transition-all
                    after:pointer-events-none
                    after:mt-[6.5px]
                    after:ml-1
                    after:box-border
                    after:block
                    after:h-1.5
                    after:w-2.5
                    after:flex-grow
                    after:rounded-tr-md
                    after:border-t
                    after:border-r
                    after:border-blue-gray-200
                    hover:after:border-black
                    after:transition-all
                    peer-placeholder-shown:text-sm
                    peer-placeholder-shown:leading-[3.75]
                    peer-placeholder-shown:text-blue-gray-500
                    peer-placeholder-shown:before:border-transparent
                    peer-placeholder-shown:after:border-transparent
                    peer-focus:text-[11px]
                    peer-focus:leading-tight
                    ${error ? "peer-focus:text-danger" : "peer-focus:text-yellow-500"}
                    peer-focus:before:border-t
                    peer-focus:before:border-l
                    ${error ? "peer-focus:before:border-danger" : "peer-focus:before:border-yellow-500"}
                    peer-focus:after:border-t
                    peer-focus:after:border-r
                    ${error ? "peer-focus:after:border-danger" : "peer-focus:after:border-yellow-500"}
                    peer-disabled:text-transparent
                    peer-disabled:before:border-transparent
                    peer-disabled:after:border-transparent
                    peer-disabled:peer-placeholder-shown:text-blue-gray-500
                    `}
                >
                    {label}
                </label>
            </div>
        );
    },
);
