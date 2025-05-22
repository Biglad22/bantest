import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { IoIosRocket } from "react-icons/io";
import { mobileFrame } from "~/assets/images";
import MobileFrame from "~/Animations/MobileFrame";

export default function AppBanner() {
    return (
        <section className=" pt-parent-vert px-parent-hor bg-background-main overflow-hidden">
            <div className="relative overflow-hidden flex pt-parent-vert px-[calc(var(--spacing-parent-hor)/2)] pb-0 border border-primary border-b-0 rounded-3xl rounded-b-none flex-col items-center bg-[#EBE4FB] space-y-6 ">
                <div className="text-[#1F2937] flex items-center gap-2">
                    <IoIosRocket />
                    <p>Download now</p>
                    <IoIosRocket />
                </div>
                <div className="text-center space-y-4 relative z-[2]">
                    <SectionHeader
                        variant="tertiary"
                        size="md"
                        className="strong-text font-medium"
                    >
                        Download from Playstore/ App store
                    </SectionHeader>
                    <h6 className="text-center mb-4 light-text !font-regular">
                        Experience the new banking experience.
                    </h6>
                </div>
                {/* underlay */}
                <MobileFrame className="w-full sm:w-1/2 md:w-80 h-auto mb-0 relative z-[2]" />
                <div className="absolute bottom-0 w-screen h-[100vw] app-banner-decor rounded-full left-1/2 top-1/2 -translate-1/2  z-[1] opacity-50 backdrop-blur-[500]"></div>
            </div>
        </section>
    );
}
