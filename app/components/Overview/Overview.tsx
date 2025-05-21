import React from "react";
import { overviewBg } from "~/assets/images";
import SectionHeader from "../SectionHeader/SectionHeader";
import DataCard from "./OverviewCard";
import { HiH1 } from "react-icons/hi2";

const stats = [
    { label: "Loan disbursed to Locals", value: "₦ 10M+" },
    { label: "Agents Onboarded", value: "100+" },
    { label: "Transactions performed", value: "₦ 50M+" },
];

export default function Overview() {
    return (
        <section className="p-6 rounded-md bg-background-main">
            <div
                className="bg-primary px-[calc(var(--spacing-parent-hor)-1.5rem)] pt-parent-vert rounded-t-3xl  space-y-6"
                style={{
                    backgroundImage: `url(${overviewBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                }}
            >
                <h2 className="w-full md:w-1/2 font-normal py-parent-vert">
                    Over <span className="font-bold">1,000+</span> App Downloads
                </h2>
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                    {stats.map((stat, index) => (
                        <DataCard
                            className="flex-1"
                            key={index}
                            label={stat.label}
                            value={stat.value}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
