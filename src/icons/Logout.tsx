import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Logout({ color = "#34495E", width = 14, height = 12 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 12">
            <path
                fill={color}
                d="M12.332 11.907a1.093 1.093 0 001-1.134V1.234a1.093 1.093 0 00-1-1.135H5.785a1.093 1.093 0 00-1.046 1.134v2.38a.333.333 0 10.667 0V1.226v-.015a.427.427 0 01.401-.445h6.502a.427.427 0 01.357.46v9.57a.427.427 0 01-.357.443H5.807a.426.426 0 01-.401-.46V8.393a.333.333 0 00-.667 0v2.38a1.093 1.093 0 001.06 1.134h6.533z"
            ></path>
            <path
                fill={color}
                d="M3.244 8.238a.333.333 0 01-.471 0L.764 6.229a.333.333 0 010-.471l2.009-2.009a.333.333 0 01.471.472L1.811 5.653h7.605a.333.333 0 110 .667H1.798l1.446 1.446c.13.13.13.342 0 .472z"
            ></path>
        </svg>
    );
}
