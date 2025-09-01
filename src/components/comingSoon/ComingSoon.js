import React from "react";
import { useTranslation } from "react-i18next";

import "./ComingSoon.css";

function ComingSoon() {
  const { t } = useTranslation();

  return (
    <div className="coming-soon-container">
      <div className="coming-soon">
        <h1>{t("comingSoon.coming soon")}</h1>
        <p>{t("comingSoon.working hard")}</p>
      </div>
    </div>
  );
}

export default ComingSoon;
