import { div } from "framer-motion/client"
import React from "react"
import ContactHero from "../components/ContactHero"
import ContactSection from "../components/ContactSection";


const ContactUsPage = () => {
    return (
        <div className="contact-page-weapper">
            <ContactHero/>
            <ContactSection/>
        </div>
    )
};

export default ContactUsPage;