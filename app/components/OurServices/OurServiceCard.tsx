import React from "react";
import PrimaryButton from "~/components/Buttons/PrimaryButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import clsx from "clsx";

type Props = {
    title: string;
    description: string;
    icon: string;
    className?: string;
};

export default function OurServiceCard({
    description,
    icon,
    title,
    className,
}: Props) {
    const classes = clsx(
        "px-4 py-6 rounded-2xl bg-background-main flex flex-col gap-4",
        className || ""
    );
    return (
        <div className={classes}>
            <div className="flex-1 space-y-4">
                <div className="p-4 rounded-full bg-primary w-fit">
                    <img src={icon} alt="" className="h-8" />
                </div>
                <h6 className=" capitalize font-medium strong-text">{title}</h6>
                <p className="light-text">{description}</p>
            </div>
            <span>
                <PrimaryButton
                    className="!border-secondary"
                    icon={<HiOutlineArrowNarrowRight />}
                >
                    <small>Get Started</small>
                </PrimaryButton>
            </span>
        </div>
    );
}
