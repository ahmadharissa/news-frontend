import React from "react";
import { useTranslation } from "react-i18next";

import "./Footer.css";

const Footer = () => {
    const { t } = useTranslation();

    return (
      <footer className="footer-container">
        <p>© {new Date().getFullYear()} {t("footer.footer")}</p>
      </footer>
    );
};

export default Footer;