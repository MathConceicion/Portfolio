import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><Sobre /></Reveal>
        <Reveal><Habilidades /></Reveal>
        <Reveal><Projetos /></Reveal>
        <Reveal><Contato /></Reveal>
      </main>
      <Footer />
    </>
  );
}

export default App;