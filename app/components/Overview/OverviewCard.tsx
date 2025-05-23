import clsx from "clsx";
import React, { use } from "react";
import CountUpStat from "../counter/Counter";
import { motion } from "framer-motion";
import {
    cardParentAnime,
    cardSmallTextAnime,
    cardTextAnime,
} from "~/Animations/overview-card-animation";
import useViewTransition from "~/Hook/useViewTransition";

type props = {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    setView: () => void;
    removeView: () => void;
    cardIsInView: boolean;
};

const DataCard = ({
    label,
    value,
    className = "",
    prefix,
    suffix,
    removeView,
    setView,
    cardIsInView,
}: props) => {
    const classes = clsx(
        className || "",
        "flex flex-col justify-center items-center text-center border-2 border-white rounded-tl-md rounded-tr-5xl",
        "rounded-b-none px-6 py-12 min-w-[120px]",
        "md:border-b-0"
    );
    const { cardWrapper, isLargeScreen } = useViewTransition({
        removeView,
        setView,
        amount: 1,
    });
    return (
        <motion.div
            ref={cardWrapper}
            animate={
                isLargeScreen ? undefined : cardIsInView ? "hover" : "initial"
            }
            className={classes}
            variants={cardParentAnime}
            initial="initial"
            whileHover="hover"
        >
            <motion.span variants={cardSmallTextAnime}>
                <p className=" mb-2 ">{label}</p>
            </motion.span>

            <motion.h3 variants={cardTextAnime}>
                <CountUpStat target={value} prefix={prefix} suffix={suffix} />
            </motion.h3>
        </motion.div>
    );
};

export default DataCard;
