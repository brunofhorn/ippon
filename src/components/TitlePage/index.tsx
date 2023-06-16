import { ITitlePage } from "@/interfaces/text";

import { Typography } from "../Typography";

export const TitlePage = ({ title, subtitle }: ITitlePage) => {
    return (
        <>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="h3">{subtitle}</Typography>
        </>
    );
};
