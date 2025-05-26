import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
    cardIconAnime,
    cardParentAnime,
    cardSmallTextAnime,
    cardTextAnime,
} from "~/Animations/service-card-animation";
import useViewTransition from "~/Hook/useViewTransition";

type Props = {
    title: string;
    description: string;
    icon: string;
    className?: string;
    cardIsInView: boolean;
    setView: () => void;
    removeView: () => void;
};

export default function OurServiceCard({
    description,
    icon,
    title,
    className,
    cardIsInView,
    removeView,
    setView,
}: Props) {
    const classes = clsx(
        "px-4 py-6 rounded-2xl bg-background-main flex flex-col gap-4",
        className || ""
    );

    const { cardWrapper, isLargeScreen } = useViewTransition({
        setView,
        removeView,
    });

    return (
        <motion.div
            ref={cardWrapper}
            className={classes}
            variants={cardParentAnime}
            initial="initial"
            whileHover={isLargeScreen ? "hover" : undefined}
            animate={
                isLargeScreen ? undefined : cardIsInView ? "hover" : "initial"
            }
        >
            <div className="flex-1 space-y-4">
                <div
                    className="p-4 rounded-full bg-primary w-fit"
                    // variants={cardIconAnime}
                >
                    <img src={icon} alt="" className="h-8" />
                </div>
                <h6
                    className=" capitalize font-medium strong-text"
                    // variants={cardTextAnime}
                >
                    {title}
                </h6>
                <span
                    className="light-text"
                    // variants={cardSmallTextAnime}
                >
                    <p>{description}</p>
                </span>
            </div>
            {/* <span>
                <PrimaryButton
                    className="!border-secondary"
                    icon={<HiOutlineArrowNarrowRight />}
                >
                    <small>Get Started</small>
                </PrimaryButton>
            </span> */}
        </motion.div>
    );
}
