import clsx from "clsx";
import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

type Props = {
    review: string;
    reviewer: string;
    role: string;
    className?: string;
};

export default function ReviewCard({
    review,
    reviewer,
    role,
    className,
}: Props) {
    const classes = clsx(
        className || "",
        "rounded-md bg-surface-light shadow-sm flex flex-col gap-4 p-6"
    );
    return (
        <div className={classes}>
            <div className="flex-1 space-y-4">
                <div className="flex items-center w-fit gap-2">
                    <span className="block p-3 rounded-full bg-secondary strong-text">
                        <RiDoubleQuotesL className="size-5" />
                    </span>
                    <span className="flex gap-2 px-4 py-3 bg-secondary ">
                        {[0, 0, 0, 0, 0].map((_, index) => (
                            <FaStar
                                key={index}
                                className="text-primary size-4"
                            />
                        ))}
                    </span>
                    <span className="block py-4 px-6 "></span>
                </div>
                <p className="strong-text py-2">{review}</p>
            </div>
            <div className="text-center px-4 py-3 w-full text-background-main bg-primary">
                <p className="font-medium leading-none">{reviewer}</p>
                <small className="font-regular">{role}</small>
            </div>
        </div>
    );
}
