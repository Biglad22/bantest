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
import useEmblaCarousel from "embla-carousel-react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import Autoplay from "embla-carousel-autoplay";

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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000 }),
    ]);

    const scrollPrev = React.useCallback(
        () => emblaApi?.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = React.useCallback(
        () => emblaApi?.scrollNext(),
        [emblaApi]
    );

    return (
        <section
            className="section  bg-background-main center-section"
            id="why-choose-us"
        >
            <div className="relative">
                <div className=" space-y-4 lg:w-1/2 h-full lg:absolute lg:top-0 lg:left-0 lg:px-parent-hor lg:py-parent-vert lg:z-40 bg-background-main">
                    <SectionHeader size="md" className="font-normal">
                        Why Choose Savuney
                    </SectionHeader>
                    <p className="light-text">
                        Discover solutions tailored to your needs.
                    </p>
                    <PrimaryButton>Join Savuney</PrimaryButton>
                </div>
                <div
                    ref={emblaRef}
                    className="w-full lg:w-1/2 ml-auto overflow-hidden py-6"
                >
                    <div className="px-4 hide-scrollbar box-content grid grid-rows-1 grid-flow-col gap-4 items-stretch">
                        {whyChooseUsData.map((item, index) => (
                            <WhyChooseUsCard
                                {...item}
                                className="w-[calc(100vw-20vw)]  lg:w-[30vw]"
                                key={index}
                            />
                        ))}
                    </div>
                    <div className="w-fit py-4 ml-auto text-surface-dark flex items-center justify-center gap-4 ">
                        <SlArrowLeftCircle
                            className="size-8 cursor-pointer"
                            onClick={scrollPrev}
                        />
                        <SlArrowRightCircle
                            className="size-8 cursor-pointer"
                            onClick={scrollNext}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
