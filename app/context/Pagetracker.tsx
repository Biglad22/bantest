import React, { type ReactNode } from "react";
import { navLinks } from "~/utils/data/navLinks";
import getActiveSection from "~/utils/getActiveSection";

interface PageTrackerContext {
    activeSection: string;
}

const initialState: PageTrackerContext = {
    activeSection: "home",
};

export const PageTrackerContext =
    React.createContext<PageTrackerContext>(initialState);

export const PageTrackerProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = React.useState<string>("home");

    React.useEffect(() => {
        const trackPage = () => {
            const page = getActiveSection(navLinks);
            if (page) {
                setActiveSection(page);
            }
        };

        window.addEventListener("scroll", trackPage);
        trackPage(); // Run once on mount
        return () => window.removeEventListener("scroll", trackPage);
    }, []);

    return (
        <PageTrackerContext.Provider value={{ activeSection }}>
            {children}
        </PageTrackerContext.Provider>
    );
};
