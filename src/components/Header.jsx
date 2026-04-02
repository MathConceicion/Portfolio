import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import './components-styles/Header.css';

const isMobile = window.innerWidth <= 768;

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { t, i18n } = useTranslation();
  const isEN = i18n.language === "en";

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuAberto(false);

    const smoother = ScrollSmoother.get();
    if (smoother && !isMobile) {
      smoother.scrollTo(target, true); // navega pelo GSAP no desktop
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }); // fallback mobile
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">{t("header.logo")}</div>

        <button className="menu-btn" onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? '✕' : '☰'}
        </button>

        <nav className={`nav ${menuAberto ? 'nav-aberto' : ''}`}>
          <a href="#inicio"      onClick={(e) => handleNavClick(e, "#inicio")}>{t("header.inicio")}</a>
          <a href="#sobre"       onClick={(e) => handleNavClick(e, "#sobre")}>{t("header.sobre")}</a>
          <a href="#habilidades" onClick={(e) => handleNavClick(e, "#habilidades")}>{t("header.habilidades")}</a>
          <a href="#projetos"    onClick={(e) => handleNavClick(e, "#projetos")}>{t("header.projetos")}</a>
          <a href="#contato"     onClick={(e) => handleNavClick(e, "#contato")}>{t("header.contato")}</a>

          <button
            className="lang-btn"
            onClick={() => i18n.changeLanguage(isEN ? "pt" : "en")}
          >
            {isEN ? "🇧🇷 PT" : "🇺🇸 EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
