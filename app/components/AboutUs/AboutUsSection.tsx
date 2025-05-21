import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import { OurMissionImg, OurVisionImg } from "~/assets/images";
import AboutUsCard from "./AboutUsCard";

const aboutUsData: React.ComponentProps<typeof AboutUsCard>[] = [
    {
        image: OurVisionImg,
        title: "💡 Our Vision",
        description:
            "To build the most trusted digital bank for the unbanked—empowering every individual, business, and community with seamless access to financial services, no matter where they live.",
    },
    {
        image: OurMissionImg,
        title: "🚀 Our Mission",
        description:
            "At Savuney, we are on a mission to bring inclusive, secure, and user-friendly banking solutions to underserved rural and suburban communities. We believe financial access is a basic right—not a privilege.",
    },
];

export default function AboutUsSection() {
    return (
        <section id="about-us" className="section bg-background-main">
            <div className="flex items-center gap-parent-hor">
                <div className="space-y-4 flex-1">
                    <div className="text-surface-dark flex gap-2 items-center w-fit">
                        <span className="w-2 h-2 bg-surface-dark rounded-full"></span>
                        <p>About Savuney</p>
                    </div>
                    <SectionHeader
                        variant="primary"
                        size="sm"
                        className="w-full md:w-3/4"
                    >
                        Financial services for everyone no matter where they
                        live.
                    </SectionHeader>
                </div>
                <span className="hidden md:block">
                    <PrimaryButton>Get Started</PrimaryButton>
                </span>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutUsData.map((data, index) => (
                        <AboutUsCard
                            key={index}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
