import clsx from "clsx";
import React, { type JSX } from "react";

type Props = {
    className?: string;
    image: string;
    title: string;
    description: string;
};

export default function AboutUsCard({
    description,
    image,
    title,
    className,
}: Props) {
    const classes = clsx(
        className || "",
        "border-2 border-primary px-4 py-6 h-[65vh] box-content rounded-4xl shadow-sm pt-parent-vert flex items-end"
        // "object-cover object-center"
    );

    return (
        <div
            className={classes}
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-surface-purple space-y-4 p-4 rounded-2xl border-2 mt-auto border-background-main  text-primary">
                <h6 className=" capitalize font-medium">{title}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
}
