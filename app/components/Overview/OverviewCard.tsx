import clsx from "clsx";
import React from "react";

type props = { label: string; value: string; className?: string };

const DataCard = ({ label, value, className = "" }: props) => {
    const classes = clsx(
        className || "",
        "flex flex-col justify-center items-center text-center border-2 border-white rounded-tl-md rounded-tr-5xl",
        "rounded-b-none px-6 py-12 min-w-[120px]",
        "md:border-b-0"
    );
    return (
        <div className={classes}>
            <p className=" text-white/70 mb-2">{label}</p>
            <h4 className=" font-bold text-secondary">{value}</h4>
        </div>
    );
};

export default DataCard;
