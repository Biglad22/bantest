import clsx from "clsx";
import React from "react";

type props = { label: string; value: string; className?: string };

const DataCard = ({ label, value, className = "" }: props) => {
    const classes = clsx(
        className || "",
        "flex flex-col justify-center items-center text-center border-2 border-white rounded-tl-md rounded-tr-5xl",
        "rounded-b-none px-6 py-12 min-w-[120px]"
    );
    return (
        <div className={classes}>
            <p className=" text-white/70 mb-2">{label}</p>
            <h2 className=" font-bold text-secondary">{value}</h2>
        </div>
    );
};

export default DataCard;
