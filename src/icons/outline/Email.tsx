import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Email({ color = "#1D1D1D", width, height }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 16">
            <path
                fill={color}
                d="M19.41 2.72a.46.46 0 00-.11-.27l-.06-.05A3.13 3.13 0 0016.6.92H3.41A3.12 3.12 0 00.76 2.39a.24.24 0 00-.08.06.46.46 0 00-.11.29 3.08 3.08 0 00-.3 1.32v7.87a3.15 3.15 0 003.14 3.14H16.6a3.15 3.15 0 003.13-3.14V4.06a3 3 0 00-.32-1.34zm-16-.8h13.18a2.13 2.13 0 011.65.8l-6.79 6.05a2.4 2.4 0 01-2.9 0L1.75 2.7a2.11 2.11 0 011.66-.78zm15.32 10a2.14 2.14 0 01-2.13 2.14H3.41a2.139 2.139 0 01-2.15-2.13V4.06a2.56 2.56 0 010-.39l6.61 5.9a3.41 3.41 0 004.18 0l6.6-5.88c.01.133.01.267 0 .4l.08 7.83z"
            ></path>
        </svg>
    );
}
