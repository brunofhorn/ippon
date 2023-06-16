import Link from "next/link";

import { timeline } from "@/data/timeline";

import { Typography } from "../Typography";

export const Timeline = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    const typographyLinkStyle = `text-xxs font-normal`;

    return (
        <div className={`${className} flow-root`}>
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-4">
                            {eventIdx !== timeline.length - 1 ? (
                                <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-transparent border-dotted border-l-4 border-disabled"
                                    aria-hidden="true"
                                />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span
                                        className={`bg-background h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`}
                                    >
                                        {event.icon}
                                    </span>
                                </div>
                                <div className="flex flex-col min-w-0 flex-1 justify-between pt-1.5">
                                    <Typography variant="span" className="text-darkGray font-bold">
                                        {event.title}
                                    </Typography>
                                    <Typography variant="span" className="text-textBadge mt-1">
                                        {event.description}
                                    </Typography>
                                    {event.badge || event.link ? (
                                        <div className="mt-2 flex flex-row gap-2 items-center">
                                            {event.badge}
                                            {event.link && (
                                                <>
                                                    {event.link.disable ? (
                                                        <Typography
                                                            variant="span"
                                                            className={`opacity-40 ${typographyLinkStyle}`}
                                                        >
                                                            {event.link.text}
                                                        </Typography>
                                                    ) : (
                                                        <Link href={event.link.path ?? ""}>
                                                            <Typography variant="span" className={typographyLinkStyle}>
                                                                {event.link.text}
                                                            </Typography>
                                                        </Link>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
