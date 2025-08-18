import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { startTransition } from "react";

import "./languageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const changeLanguage = (lng) => {
    startTransition(() => {
      i18n.changeLanguage(lng);
      setSelectedLanguage(lng);
      localStorage.setItem("selectedLanguage", lng);
    });
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div className="language-switcher-dropdown">
      <select
        className="form-select"
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

