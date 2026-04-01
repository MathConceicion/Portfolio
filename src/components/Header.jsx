import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './components-styles/Header.css';

function Header() {
      const [menuAberto, setMenuAberto] = useState(false);
      const { t, i18n } = useTranslation();
      const isEN = i18n.language === "en";

      return (
            <header className="header">
                  <div className="container">
                        <div className="logo">{t("header.logo")}</div>

                        <button className="menu-btn" onClick={() => setMenuAberto(!menuAberto)}>
                              {menuAberto ? '✕' : '☰'}
                        </button>

                        <nav className={`nav ${menuAberto ? 'nav-aberto' : ''}`}>
                              <a href="#inicio" onClick={() => setMenuAberto(false)}>{t("header.inicio")}</a>
                              <a href="#sobre" onClick={() => setMenuAberto(false)}>{t("header.sobre")}</a>
                              <a href="#habilidades" onClick={() => setMenuAberto(false)}>{t("header.habilidades")}</a>
                              <a href="#projetos" onClick={() => setMenuAberto(false)}>{t("header.projetos")}</a>
                              <a href="#contato" onClick={() => setMenuAberto(false)}>{t("header.contato")}</a>

                              {/* Botão de idioma */}
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