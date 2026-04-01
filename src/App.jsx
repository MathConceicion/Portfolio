import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Reveal from './components/components-react/Reveal';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import './App.css';
import CircularText from './components/components-react/CircularText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const isMobile = window.innerWidth <= 768;

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [showName, setShowName] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowName(true), 300);
    setTimeout(() => setHideLoader(true), 2200);
    setTimeout(() => setLoading(false), 3200);

    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: isMobile ? 0 : 2,   // desabilitado no mobile
        effects: !isMobile,          // sem efeitos no mobile
        normalizeScroll: true
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("page.title")}</title>
      </Helmet>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <Reveal><Hero /></Reveal>
            <Reveal><Sobre /></Reveal>
            <Reveal><Habilidades /></Reveal>
            <Reveal><Projetos /></Reveal>
            <Reveal><Contato /></Reveal>
          </main>
          <Footer />
        </div>
      </div>

      {loading && (
        <div className={`intro-loader ${hideLoader ? "hide" : ""}`}>
          <h1 className={`name ${showName ? "show" : ""}`}>
            <CircularText
              text="DESIGN • CODE • CREATE • "
              spinDuration={20}
            />
          </h1>
        </div>
      )}
    </>
  );
}

export default App;