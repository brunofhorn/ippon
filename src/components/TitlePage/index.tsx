import { ITitlePage } from "@/interfaces/text";

import { Button } from "../Button";
import { Typography } from "../Typography";

export const TitlePage = ({ title, subtitle, button }: ITitlePage) => {
    return (
        <div className="flex flex-row justify-between">
            <div>
                <Typography variant="h1">{title}</Typography>
                <Typography variant="h3">{subtitle}</Typography>
            </div>
            {button && (
                <div>
                    <Button {...button} className="py-4 p-6 text-base h-14 justify-center items-center" />
                </div>
            )}
        </div>
    );
};
