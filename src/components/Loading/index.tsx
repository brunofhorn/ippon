import { GridLoader } from "react-spinners";

export const Loading = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center z-50 absolute backdrop-blur-sm bg-white/50">
            <GridLoader size={20} color="#F8C957" />
        </div>
    );
};
