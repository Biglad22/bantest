const getActiveSection = (navLinks: Array<{ label: string; href: string }>) => {
    const scrollPosition = window.scrollY + 200;

    let offsetTop = 0;
    for (const link of navLinks) {
        const section = document.querySelector(link.href);

        if (section) offsetTop = (section as HTMLElement).offsetTop;
        const offsetHeight = (section as HTMLElement).offsetHeight;
        if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
        )
            return link.href.substring(1);
    }
};

export default getActiveSection;
