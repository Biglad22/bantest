import React, { useMemo, useState } from "react";
import PrimaryButton from "~/components/Buttons/PrimaryButton";
import SectionHeader from "~/components/SectionHeader/SectionHeader";
import {
    POSTerminalIcon,
    aiDrivenIconIcon,
    microLoansIcon,
    microSavingsIcon,
    mobileAppIcon,
    ussdBankingIcon,
} from "~/assets/images";
import OurServiceCard from "./OurServiceCard";
import { useActiveCard } from "~/Hook/useViewTransition";

const bankingServices = [
    {
        title: "POS Terminal Banking",
        icon: POSTerminalIcon,
        description:
            "Our agent-based POS system—enables you to perform transactions—cash-in, cash-out, transfers, and bill payments with ease.",
    },
    {
        title: "Mobile App",
        icon: mobileAppIcon,
        description:
            "A user-friendly app for seamless transactions, savings, loan access, and personal financial management—all from your phone.",
    },
    {
        title: "USSD Banking",
        icon: ussdBankingIcon,
        description:
            "No smartphone? No problem. Our USSD service ensures financial inclusion for all, with banking access even on basic phones. Dial *387# to get started.",
    },
    {
        title: "Micro-savings",
        icon: microSavingsIcon,
        // Note: Original said "Micro-cavings" which appears to be a typo
        description:
            "See terms and names of our website for a number of other companies. You'll see any current accounts.",
    },
    {
        icon: microLoansIcon,
        title: "Micro-loans", // Note: This might be a typo, possibly meant "Micro-finance"
        description:
            "Fast, low-interest micro-loans designed to support small businesses and households  in rural areas.",
        // Note: The description appears to be cut off
    },
    {
        icon: aiDrivenIconIcon,
        title: "AI-driven financial literacy tools.",
        description:
            "Learn as you bank. Our smart tools offer personalized tips and education to help you manage money wisely and grow.",
    },
];

export default function OurServicesSection() {
    const { latestCard, reduceActiveCards, updateActiveCards } =
        useActiveCard();
    return (
        <section
            id="services"
            className="section center-section bg-background-secondary"
        >
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
                <SectionHeader
                    variant="secondary"
                    className="flex-1 strong-text"
                    size="md"
                >
                    Banking made easy for all—anytime, anywhere.
                </SectionHeader>
                <div className="flex-1 space-y-4">
                    <p className="light-text">
                        To build the most trusted digital bank for the unbanked,
                        empowering every individual, business, and community.
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bankingServices.map((service, i) => (
                    <OurServiceCard
                        {...service}
                        key={service.title}
                        cardIsInView={latestCard === i}
                        setView={() => updateActiveCards(i)}
                        removeView={() => reduceActiveCards(i)}
                    />
                ))}
            </div>
        </section>
    );
}
