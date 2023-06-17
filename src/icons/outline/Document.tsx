import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Document({ color = "#1D1D1D", width, height }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 16 20">
            <path
                fill={color}
                d="M3.5 4.75a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM3.5 8.25a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 11.25a.5.5 0 000 1h8a.5.5 0 000-1H4zM3.5 15.25a.5.5 0 01.5-.5h5a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M0 2.5A2.5 2.5 0 012.5 0h11A2.5 2.5 0 0116 2.5v15a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 010 17.5v-15zM2.5 1h11A1.5 1.5 0 0115 2.5v15a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 17.5v-15A1.5 1.5 0 012.5 1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
