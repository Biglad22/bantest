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
            <img src={image} className="w-auto " alt="" />
            <div className="relative z-10 bg-surface-dark rounded-b-2xl rounded-sm  flex items-center justify-between px-4 py-6">
                <h6 className="font-medium ">{title}</h6>
                <FaArrowUp />
            </div>
        </div>
    );
}
