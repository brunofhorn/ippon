import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function InfoCircle({ color = "#34495E", width = 14, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 14">
            <path
                fill={color}
                d="M6.8 3.467C5.8 3.6 5.067 4.4 5.067 5.4c0 .2.066.333.266.333s.334-.133.334-.333c0-.667.466-1.2 1.133-1.267.667-.066 1.267.4 1.4 1S8 6.4 7.4 6.6c-.4.133-.733.6-.733 1.067V8.2c0 .2.133.333.333.333s.333-.133.333-.333v-.533c0-.2.134-.4.334-.467a1.993 1.993 0 001.266-2.267C8.667 4 7.8 3.333 6.8 3.467zM7 10.533a.533.533 0 100-1.066.533.533 0 000 1.066z"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M.667 7C.667 3.533 3.533.667 7 .667S13.333 3.533 13.333 7 10.467 13.333 7 13.333.667 10.467.667 7zm.666 0A5.662 5.662 0 007 12.667 5.662 5.662 0 0012.667 7 5.662 5.662 0 007 1.333 5.662 5.662 0 001.333 7z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
