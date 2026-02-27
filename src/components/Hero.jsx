import React from 'react';
import './Hero.css';

function Hero() {
      return (
            <section id="inicio" className="hero">
                  <div className="hero-conteudo">
                        <p className="hero-ola">Olá, eu sou Matheus!    </p>
                        <h1>Estudante SENAI</h1>
                        <h2>Desenvolvedor Web</h2>
                        <p className="hero-descricao">
                              Aprendendo a criar experiências digitais incríveis através do código.
                        </p>
                        <div className="hero-botoes">
                              <a href="#projetos" className="btn-primario">Ver Projetos</a>
                              <a href="#contato" className="btn-secundario">Contato</a>
                        </div>
                  </div>
                  <div className="hero-imagem">
                        <img
                              src="/minha-foto.jpg"
                              alt="Minha foto"
                              className="foto-perfil"
                        />
                  </div>
            </section>
      );
}

export default Hero;