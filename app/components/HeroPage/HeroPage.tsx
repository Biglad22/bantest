import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { heroVideo, heroVidPreload } from "~/assets/images";

export default function HeroPage() {
    return (
        <section id="home" className="bg-surface-dark p-6 pt-0 block">
            <div className="relative w-full h-screen flex items-center justify-start ">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-b-5xl ">
                    <video
                        className="w-full h-full object-cover z-10"
                        src={heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={heroVidPreload}
                    />
                    {/* overlay */}
                    <div className="hero-overlay"></div>
                </div>
                <div className="relative !text-background-main z-20 sm:w-[70%]  py-parent-vert  px-[calc(var(--spacing-parent-hor)-1.5rem)]  space-y-6 text-center sm:text-left">
                    <h1 className="!font-medium">BANK OF THE UNBANKED</h1>
                    <h6>
                        Digital bank experience tailored to rural and suburban
                        communities in Africa
                    </h6>
                    <span className="block w-fit mx-auto sm:mx-0">
                        <PrimaryButton>Join Savuney</PrimaryButton>
                    </span>
                </div>
            </div>
        </section>
    );
}
