import clsx from "clsx";
import React from "react";

type props = { label: string; value: string; className?: string };

const DataCard = ({ label, value, className = "" }: props) => {
    const classes = clsx(
        className || "",
        "flex flex-col justify-center items-center text-center border-2 border-white rounded-tl-md rounded-tr-5xl",
        "rounded-b-none px-6 py-12 min-w-[120px]",
        "md:border-b-0",
        "group hover:bg-white transition-all duration-800"
    );
    return (
        <div className={classes}>
            <p className=" text-white group-hover:text-surface-dark mb-2 transition-all duration-800">
                {label}
            </p>
            <h3 className=" font-bold group-hover:font-black transition-all duration-800 text-secondary">
                {value}
            </h3>
        </div>
    );
};

export default DataCard;
