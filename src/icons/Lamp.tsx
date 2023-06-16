import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Lamp({ color = "#34495E", width = 12, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 12 14">
            <path
                fill={color}
                d="M9.04 12.84c.161-.094.208-.3.115-.462l-.418-.724a.328.328 0 00-.451-.11.329.329 0 00-.126.444l.418.724c.094.163.3.224.463.128zM11.236 10.599a.338.338 0 00-.132-.457l-.724-.418a.33.33 0 00-.448.133.327.327 0 00.114.444l.725.418a.337.337 0 00.465-.12zM.764 10.599a.337.337 0 00.465.12l.725-.418a.327.327 0 00.114-.444.33.33 0 00-.448-.133l-.724.418a.338.338 0 00-.132.457zM2.96 12.84a.338.338 0 00.462-.128l.418-.724a.329.329 0 00-.126-.444.328.328 0 00-.451.11l-.418.724a.337.337 0 00.114.462zM6 13.667a.337.337 0 01-.333-.343v-.836c0-.18.153-.321.333-.321.18 0 .333.141.333.321v.836a.337.337 0 01-.333.343zM6.33 10.383a.333.333 0 01-.38.28 3.427 3.427 0 01-2.453-1.674.333.333 0 01.577-.334 2.76 2.76 0 001.976 1.349.333.333 0 01.28.379z"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M4 3.635a.697.697 0 01-.321.57 4.167 4.167 0 104.642 0A.697.697 0 018 3.636.635.635 0 007.365 3h-2.73A.635.635 0 004 3.635zM2.5 7.667c0-1.21.614-2.278 1.55-2.908.342-.229.605-.62.616-1.092h2.668c.011.471.274.863.615 1.092A3.5 3.5 0 112.5 7.667z"
                clipRule="evenodd"
            ></path>
            <path
                fill={color}
                d="M7.667 2c0 .184-.15.333-.334.333H4.667a.333.333 0 010-.666h2.666c.184 0 .334.149.334.333zM7.667.667c0 .184-.15.333-.334.333H4.667a.333.333 0 010-.667h2.666c.184 0 .334.15.334.334z"
            ></path>
        </svg>
    );
}
