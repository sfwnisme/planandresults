import React from "react";
import {DigitalPresence, PageHeader, Values} from "../../containers";
import {useTranslation} from "react-i18next";
import {Contact, Footer, Navbar} from "../../components";
import PartnersBody from "../../components/partners/PartnersBody";

const PartnersPage = () => {
    const [t] = useTranslation();
    const headerContent = t("landing_page.partners.header", {
        returnObjects: true,
    });
    return (
        <div className="PARTNERS_PAGE mx-auto pt-[70px] max-sm:pt-14">
            <Navbar/>
            <div className="pb-14"/>
            <PageHeader {...headerContent} />
            <PartnersBody/>
            <DigitalPresence/>
            <Values/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default PartnersPage;
