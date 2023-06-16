import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function StudentCap({ color = "#34495E", width = 14, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 12">
            <path
                fill={color}
                fillRule="evenodd"
                d="M7.067.6a.333.333 0 00-.237 0L.766 2.91a.333.333 0 000 .623l2.516.959v2.87a.44.44 0 00.13.336c.306.276 1.225.858 3.536.858 2.312 0 3.23-.582 3.537-.858a.44.44 0 00.13-.336v-2.87l1.333-.508v3.62a1.167 1.167 0 000 2.237v1.247a.333.333 0 10.667 0V9.841a1.167 1.167 0 000-2.237V3.73l.516-.197a.333.333 0 000-.623L7.067.6zm-.118.669L1.82 3.222 6.95 5.175l5.127-1.953-5.127-1.953zm-3 6.005V4.746l2.88 1.097c.077.03.162.03.238 0l2.881-1.097v2.528c-.274.196-1.083.615-3 .615-1.916 0-2.725-.419-3-.615zm8.333.948a.5.5 0 100 1 .5.5 0 000-1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
