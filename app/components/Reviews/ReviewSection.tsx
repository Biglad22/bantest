import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ReviewCard from "./ReviewCard";

export default function ReviewSection() {
    const reviews = [
        {
            review: "As an agent, I earn commissions daily while helping people in my community with withdrawals and transfers. Savuney changed my income stream!",
            reviewer: "Grace T.",
            role: "Savuney Agent - Ibadan",
        },
        {
            review: "Savuney's app is simple and clear. I''e learned so much from the financial tips it gives. For the first time, I feel in control of my money.",
            reviewer: "Ifunanya D.",
            role: "University Student - Benin City",
        },
        {
            review: "I started saving ₦200 daily with Savuney'' micro-saving plan. In three months, I had enough to buy a small grinding machine for my wife's business.",
            reviewer: "Isaac A.",
            role: "Mechanic - Jos",
        },
    ];

    return (
        <section className="section py-parent-vert px-parent-hor bg-gradient-to-b from-primary to-footer">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <span className="block w-2 h-2 bg-background-main rounded-full"></span>
                    <p className="text-background-main">TESTIMONIAL</p>
                </div>
                <SectionHeader
                    size="md"
                    className="text-white font-medium w-full sm:w-1/2"
                >
                    What people are saying about Savuney
                </SectionHeader>
            </div>
            <div className="py-parent-vert flex gap-4">
                {reviews.map((review) => (
                    <ReviewCard
                        {...review}
                        key={review.reviewer}
                        className="flex-1"
                    />
                ))}
            </div>
        </section>
    );
}
