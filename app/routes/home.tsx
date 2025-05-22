import HeroPage from "~/components/HeroPage/HeroPage";
import type { Route } from "./+types/home";
import Navbar from "~/components/NavBar/NavLinks";
import AboutUsSection from "~/components/AboutUs/AboutUsSection";
import OurServicesSection from "~/components/OurServices/OurServicesSection";
import WhyChooseUsSection from "~/components/WhyChooseUs/WhyChooseUsSection";
import Footer from "~/components/Footer/Footer";
import Overview from "~/components/Overview/Overview";
import AppBanner from "~/components/AppBanner/AppBanner";
import ReviewSection from "~/components/Reviews/ReviewSection";
import { PageTrackerProvider } from "~/context/Pagetracker";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Welcome to savuney" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <PageTrackerProvider>
            <Navbar />
            <HeroPage />
            <AboutUsSection />
            <Overview />
            <OurServicesSection />
            <WhyChooseUsSection />
            <AppBanner />
            <ReviewSection />
            <Footer />
        </PageTrackerProvider>
    );
}
