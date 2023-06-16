import axios from "axios";

import Camera from "@/icons/Camera";

export default async function Register() {
    const { data } = await axios.get("https://645e6a0a12e0a87ac0efc52e.mockapi.io/mapfre/api/v2/getMyShared");

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div
                    id="select-avatar"
                    className="bg-gray_five py-2 px-4 rounded-2xl w-24 h-24 flex justify-center items-center"
                >
                    <div className="h-14 w-14 bg-[#969AA3] rounded-full">
                        <Camera />
                    </div>
                </div>
            </div>
        </>
    );
}
