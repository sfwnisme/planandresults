import React, { memo } from "react";
import { DigitalPresence, PageHeader, Values } from "../../containers";
import { useTranslation } from "react-i18next";
import { PartnersBody } from "../../components";

const PartnersPage = () => {
    const [t] = useTranslation();
    const headerContent = t("landing_page.partners.header", {
        returnObjects: true,
    });
    return (
        <div className="PARTNERS_PAGE mx-auto pt-[70px] max-sm:pt-14">
            <div className="pb-14" />
            <PageHeader {...headerContent} />
            <PartnersBody />
            {/* <DigitalPresence/> */}
            {/* <Values/> */}
        </div>
    );
};

export default memo(PartnersPage);
