import clsx from "clsx";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

type Props = {
    className?: string;
    image: string;
    title: string;
};

export default function WhyChooseUsCard({ className, image, title }: Props) {
    const classes = clsx("rounded-2xl -space-y-2", className || "");
    return (
        <div className={classes}>
            <img src={image} className="w-full" alt="" />
            <div className="relative z-10 border border-background-main  text-nowrap bg-surface-dark rounded-b-3xl rounded-xl  flex items-center justify-between gap-6 px-4 py-6 -mt-4">
                <p className="font-medium ">{title}</p>
                <FaArrowUp />
            </div>
        </div>
    );
}
