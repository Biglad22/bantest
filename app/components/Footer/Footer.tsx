import clsx from "clsx";
import React from "react";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import SiteMap from "./SiteMap";
import SectionHeader from "../SectionHeader/SectionHeader";

const Footer = () => {
    const socialsClass = clsx(
        "block leading-none p-4 rounded-full bg-primary text-background-main"
    );
    return (
        <footer className="bg-footer text-white section !h-fit ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                {/* Left section */}
                <div className="flex flex-col space-y-6 max-w-md">
                    <div className="flex items-center gap-3">
                        <span className="block w-2 h-2 rounded-full bg-background-main"></span>
                        <p className="text-background-main">Savuney</p>
                    </div>
                    <SectionHeader
                        variant="secondary"
                        size="md"
                        className="font-medium leading-normal text-secondary"
                    >
                        Ready to bank
                        <br />
                        with confidence?
                    </SectionHeader>
                    <div className="flex space-x-4 text-white text-xl">
                        <a href="#" className={socialsClass}>
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className={socialsClass}>
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className={socialsClass}>
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className={socialsClass}>
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>

                {/* Middle section */}
                <div className="text-gray-400 flex flex-col md:flex-row gap-10 text-sm">
                    <div className="space-y-4">
                        <h6 className="text-white font-medium">Product</h6>
                        <ul className="space-y-2">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Why us</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h6 className="text-white mb-2 font-medium">Support</h6>
                        <ul className="space-y-2">
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Terms and conditions</a>
                            </li>
                            <li>
                                <a href="#">Help Center</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-10">
                <form className="flex flex-col sm:flex-row gap-2 w-full md:w-80">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition"
                    >
                        Submit
                    </button>
                </form>
                <SiteMap />
            </div>
        </footer>
    );
};

export default Footer;
