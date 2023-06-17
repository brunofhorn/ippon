import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function ArrowRight({ color = "#1D1D1D", width, height }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 20">
            <path
                fill={color}
                d="M10.974 1.027a.5.5 0 10-.708.706L18.024 9.5H.77a.5.5 0 000 1h17.254l-7.758 7.767a.5.5 0 10.708.706l8.61-8.62A.498.498 0 0019.73 10M10.974 1.027l8.608 8.618-8.608-8.618zM19.582 9.645a.404.404 0 01.012.013l-.012-.013zM19.594 9.658a.498.498 0 01.097.148l-.097-.148zM19.691 9.806a.498.498 0 01.039.19l-.039-.19z"
            ></path>
        </svg>
    );
}
