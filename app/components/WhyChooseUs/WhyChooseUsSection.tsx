import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import {
    communityTrust,
    localizedAgent,
    lowInterest,
    lowTransaction,
    USSDAccessibility,
} from "~/assets/images";
import WhyChooseUsCard from "./WhyChooseUsCard";

const whyChooseUsData = [
    {
        image: localizedAgent,
        title: "Localized agent banking",
    },
    {
        image: lowTransaction,
        title: "Low transaction fees (1%)",
    },
    {
        image: USSDAccessibility,
        title: "USSD accessibility",
    },
    {
        image: lowInterest,
        title: "Low interest loans",
    },
    {
        image: communityTrust,
        title: "Community trust model",
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className="section relative bg-background-main">
            <div className=" space-y-4 sm:w-[calc(60%+2.5rem)] sm:pr-10  h-full sm:absolute sm:top-0 sm:left-0 sm:px-parent-hor sm:py-parent-vert sm:z-40 sm:bg-gradient-to-r from-background-main from-65% to-background-main/0">
                <SectionHeader size="md" className="font-normal">
                    Why Choose savuney
                </SectionHeader>
                <p className="light-text">
                    Discover solutions tailored to your needs.
                </p>
                <PrimaryButton>Join Savunry</PrimaryButton>
            </div>
            <div className="hide-scrollbar sm:pl-[40vw] sm:pr-[20vw] flex flex-col sm:flex-row gap-4 items-stretch overflow-auto md:min-w-screen">
                {whyChooseUsData.map((item, index) => (
                    <WhyChooseUsCard
                        {...item}
                        className="flex-1  min-w-full md:w-[12rem]"
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
}
