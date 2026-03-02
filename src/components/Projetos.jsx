import React, { useState } from 'react';
import './Projetos.css';

function Projetos() {
      const [currentIndex, setCurrentIndex] = useState(0);

      const projetos = [
            {
                  nome: 'Landing Page',
                  descricao: 'Página de apresentação responsiva usando HTML e CSS',
                  techs: ['HTML', 'C#'],
                  imagem: '/projeto1.jpg',
                  link: '#',
                  github: 'https://github.com/MathConceicion/LandingPage.git'
            },
            {
                  nome: 'Task Master',
                  descricao: 'Lista de tarefas interativa com JavaScript puro',
                  techs: ['HTML', 'CSS', 'JS'],
                  imagem: '/projeto2.jpg',
                  link: '#',
                  github: 'https://github.com/MathConceicion/TaskMaster.git'
            },
            {
                  nome: 'Portfólio',
                  descricao: 'Este site que você está vendo, feito com React',
                  techs: ['React', 'CSS'],
                  imagem: '/projeto3.jpg',
                  link: '#',
                  github: 'https://github.com/MathConceicion/Front-End/tree/ebc98562ac9e5a21e22c471d84c54a0dffcb21b7/React/Portfolio'
            }
      ];

      const nextSlide = () => {
            setCurrentIndex((prev) => (prev + 1) % projetos.length);
      };

      const prevSlide = () => {
            setCurrentIndex((prev) => (prev - 1 + projetos.length) % projetos.length);
      };

      const getCardStyle = (index) => {
            const diff = index - currentIndex;

            if (diff === 0) {
                  return {
                        transform: 'translateX(0) scale(1)',
                        opacity: 1,
                        zIndex: 3
                  };
            } else if (diff === 1 || diff === -(projetos.length - 1)) {
                  return {
                        transform: 'translateX(60%) scale(0.88) rotateY(-4deg)',
                        opacity: 0.6,
                        zIndex: 2
                  };
            } else if (diff === -1 || diff === (projetos.length - 1)) {
                  return {
                        transform: 'translateX(-60%) scale(0.88) rotateY(4deg)',
                        opacity: 0.6,
                        zIndex: 2
                  };
            } else {
                  return {
                        transform: 'translateX(0) scale(0.7)',
                        opacity: 0,
                        zIndex: 1
                  };
            }
      };

      return (
            <section id="projetos" className="section-padrao">
                  <h2 className="titulo-secao">Projetos</h2>

                  <div className="carrossel-wrapper">
                        <div className="carrossel-stage">
                              {projetos.map((projeto, index) => (
                                    <article
                                          key={index}
                                          className={`projeto-card ${index === currentIndex ? 'active' : ''}`}
                                          style={getCardStyle(index)}
                                    >
                                          <div className="projeto-imagem">
                                                <img src={projeto.imagem} alt={projeto.nome} />
                                                {index !== currentIndex && (
                                                      <div className="card-overlay" onClick={() => setCurrentIndex(index)}>
                                                            <div className="view-icon">
                                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                        <circle cx="12" cy="12" r="3"></circle>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                )}
                                                <div className="image-shine"></div>
                                          </div>

                                          <div className="projeto-info">
                                                <div className="projeto-header">
                                                      <h3>{projeto.nome}</h3>
                                                      <span className="projeto-numero">0{index + 1}</span>
                                                </div>
                                                <p>{projeto.descricao}</p>

                                                <div className="projeto-techs">
                                                      {projeto.techs.map((tech, i) => (
                                                            <span key={i} className="tech-tag">{tech}</span>
                                                      ))}
                                                </div>

                                                <div className="projeto-links">
                                                      <a href={projeto.link} className="link-btn demo">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                                  <polyline points="15 3 21 3 21 9"></polyline>
                                                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                                            </svg>
                                                            Demo
                                                      </a>
                                                      <a href={projeto.github} className="link-btn github">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                            </svg>
                                                            GitHub
                                                      </a>
                                                </div>
                                          </div>
                                    </article>
                              ))}
                        </div>

                        <button className="nav-btn prev" onClick={prevSlide} aria-label="Anterior">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                              </svg>
                        </button>

                        <button className="nav-btn next" onClick={nextSlide} aria-label="Próximo">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                        </button>

                        <div className="carrossel-dots">
                              {projetos.map((_, index) => (
                                    <button
                                          key={index}
                                          className={`dot ${index === currentIndex ? 'active' : ''}`}
                                          onClick={() => setCurrentIndex(index)}
                                          aria-label={`Projeto ${index + 1}`}
                                    />
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default Projetos;