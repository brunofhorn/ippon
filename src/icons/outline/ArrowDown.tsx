import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function ArrowDown({ color = "#1D1D1D", width, height }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 20">
            <path
                fill={color}
                d="M10.5.75a.5.5 0 10-1 0v17.293l-7.776-7.777a.5.5 0 00-.707.707l8.63 8.63a.493.493 0 00.353.147c.14 0 .265-.057.356-.148l8.628-8.629a.5.5 0 00-.707-.707L10.5 18.043V.75z"
            ></path>
        </svg>
    );
}
