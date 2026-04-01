import React from 'react';
import { useTranslation } from 'react-i18next';
import './components-styles/Hero.css';

function Hero() {
      const { t } = useTranslation();

      return (
            <section id="inicio" className="hero">
                  <div className="hero-conteudo">
                        <p className="hero-ola">{t("hero.ola")}</p>
                        <h1>{t("hero.titulo")}</h1>
                        <h2>{t("hero.subtitulo")}</h2>
                        <p className="hero-descricao">{t("hero.descricao")}</p>
                        <div className="hero-botoes">
                              <a href="#projetos" className="btn-primario">{t("hero.verProjetos")}</a>
                              <a href="#contato" className="btn-secundario">{t("hero.contato")}</a>
                        </div>
                  </div>
                  <div className="hero-imagem">
                        <img src="/minha-foto.jpg" alt="Matheus Conceicion" className="foto-perfil" />
                  </div>
            </section>
      );
}

export default Hero;