import React, { useEffect, useState } from 'react';
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

function App() {

  const [loading, setLoading] = useState(true);
  const [showName, setShowName] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {

    // Loader
    setTimeout(() => {
      setShowName(true);
    }, 300);

    setTimeout(() => {
      setHideLoader(true);
    }, 2200);

    setTimeout(() => {
      setLoading(false);
    }, 3200);

    // GSAP Context (melhor prática no React)
    let ctx = gsap.context(() => {

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        normalizeScroll: true
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <>
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