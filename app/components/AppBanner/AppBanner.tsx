import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { IoIosRocket } from "react-icons/io";
import { mobileFrame } from "~/assets/images";
type Props = {};

export default function AppBanner() {
    return (
        <section className="py-parent-vert px-parent-hor bg-background-main">
            <div className="flex pt-[calc(var(--spacing-parent-vert)/2)] px-[calc(var(--spacing-parent-hor)/2)] border border-primary border-b-0 rounded-3xl rounded-b-none flex-col items-center bg-[#EBE4FB] space-y-6 ">
                <div className="text-[#1F2937] flex items-center gap-2">
                    <IoIosRocket />
                    <p>Download now</p>
                    <IoIosRocket />
                </div>
                <div className="text-center space-y-4">
                    <SectionHeader
                        variant="tertiary"
                        size="lg"
                        className="strong-text font-medium"
                    >
                        Download from <br /> Playstore/ App store
                    </SectionHeader>
                    <h6 className="text-center mb-4 light-text !font-regular">
                        Experience the new banking experience.
                    </h6>
                </div>
                <img
                    src={mobileFrame}
                    alt=""
                    className="w-full sm:w-1/2 h-auto"
                />
            </div>
        </section>
    );
}
