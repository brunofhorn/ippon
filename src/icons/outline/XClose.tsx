import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function XClose({ color = "#34495E", width = 14, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 14">
            <path
                fill={color}
                d="M.654 13.63a.474.474 0 00.386-.007.493.493 0 00.16-.116L6.996 7.71l5.804 5.81a.492.492 0 00.547.105.473.473 0 00.16-.118.493.493 0 000-.707L7.707 7l5.8-5.8A.5.5 0 0012.8.494L7.003 6.297 1.2.494a.5.5 0 00-.707.706l5.8 5.807-5.8 5.807a.493.493 0 000 .706c.046.048.1.086.161.11z"
            ></path>
        </svg>
    );
}
