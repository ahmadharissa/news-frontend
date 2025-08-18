import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t("home.home")}</h1>
          <p className="hero-subtitle">{t("home.welcomeMessage")}</p>
          <button className="hero-button">{t("home.exploreButton")}</button>
        </div>
      </header>

      <section className="features">
        <h2>{t("home.featuresTitle")}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>{t("home.feature1Title")}</h3>
            <p>{t("home.feature1Desc")}</p>
          </div>
          <div className="feature-card">
            <h3>{t("home.feature2Title")}</h3>
            <p>{t("home.feature2Desc")}</p>
          </div>
          <div className="feature-card">
            <h3>{t("home.feature3Title")}</h3>
            <p>{t("home.feature3Desc")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
