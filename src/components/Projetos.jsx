import React, { useState } from 'react';
import './components-styles/Projetos.css';

function Projetos() {
      const [currentIndex, setCurrentIndex] = useState(0);

      const projetos = [
            {
                  nome: 'Landing Page',
                  descricao: 'Página de apresentação responsiva usando HTML e C#',
                  descricaoLonga: 'Landing page moderna com design responsivo, formulários de contato integrados e animações suaves. Desenvolvida com foco em conversão e performance.',
                  features: ['Design Responsivo', 'Formulários Integrados', 'Animações CSS', 'Otimização SEO'],
                  techs: ['HTML', 'C#'],
                  imagem: './projects/projeto1.jpg',
                  link: '#',
                  github: 'https://github.com/MathConceicion/LandingPage.git',
                  stats: { views: '-', likes: '-' }
            },
            {
                  nome: 'Task Master',
                  descricao: 'Lista de tarefas interativa com JavaScript puro',
                  descricaoLonga: 'Aplicação completa de gerenciamento de tarefas com persistência local, filtros dinâmicos e interface intuitiva. Zero dependências externas.',
                  features: ['Drag & Drop', 'Local Storage', 'Filtros Aplicados', 'Modo Escuro/Claro'],
                  techs: ['HTML', 'CSS', 'JS'],
                  imagem: './projects/projeto2.jpg',
                  link: '#',
                  github: 'https://github.com/MathConceicion/TaskMaster.git',
                  stats: { views: '-', likes: '-' }
            },
            {
                  nome: 'Portfólio',
                  descricao: 'Este site que você está vendo, feito com React',
                  descricaoLonga: 'Site pessoal com animações avançadas, carrossel 3D customizado e design moderno. Totalmente responsivo e otimizado para performance.',
                  features: ['Carrossel 3D', 'Animações', 'Design Responsivo', 'Otimizado'],
                  techs: ['React', 'CSS'],
                  imagem: './projects/projeto3.jpg',
                  link: 'https://conceicionportfolio.vercel.app',
                  github: 'https://github.com/MathConceicion/Portfolio',
                  stats: { views: '-', likes: '-' }
            },
            {
                  nome: 'Torneio GGS',
                  descricao: 'Site de torneio para Guilty Gear Strive',
                  descricaoLonga: 'Plataforma de gerenciamento de torneios de fighting games com brackets, rankings e sistema de inscrição em tempo real.',
                  features: ['Brackets Automáticos', 'Rankings', 'Inscrição Online', 'Streaming Integrado'],
                  techs: ['HTML', 'CSS'],
                  imagem: './projects/projeto4.jpg',
                  link: 'https://projeto2-pearl-rho.vercel.app/index.html',
                  github: 'https://github.com/MathConceicion/Projeto2',
                  stats: { views: '-', likes: '-' }
            }
      ];

      const projetoAtivo = projetos[currentIndex];

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
                        transform: 'translateX(50%) scale(0.85) rotateY(-5deg)',
                        opacity: 0.5,
                        zIndex: 2
                  };
            } else if (diff === -1 || diff === (projetos.length - 1)) {
                  return {
                        transform: 'translateX(-50%) scale(0.85) rotateY(5deg)',
                        opacity: 0.5,
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

      // Calcular estatísticas totais
      const totalProjetos = projetos.length;
      const todasTechs = [...new Set(projetos.flatMap(p => p.techs))];

      return (
            <section id="projetos" className="section-padrao">
                  <div className="projetos-header">
                        <h2 className="titulo-secao">Projetos</h2>
                        <p className='subtitulo'>Confira alguns dos meus projetos mais recentes</p>
                  </div>

                  <div className="projetos-layout">
                        {/* Carrossel */}
                        <div className="carrossel-area">
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

                                                      <div className="projeto-info-compact">
                                                            <h3>{projeto.nome}</h3>
                                                            <div className="projeto-techs-compact">
                                                                  {projeto.techs.map((tech, i) => (
                                                                        <span key={i} className="tech-tag-compact">{tech}</span>
                                                                  ))}
                                                            </div>
                                                      </div>
                                                </article>
                                          ))}
                                    </div>

                                    <button className="nav-btn prev" onClick={prevSlide} aria-label="Anterior">
                                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                          </svg>
                                    </button>

                                    <button className="nav-btn next" onClick={nextSlide} aria-label="Próximo">
                                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                        </div>

                        {/* Detalhes do Projeto */}
                        <div className="detalhes-area">
                              <div className="detalhes-card">
                                    <div className="detalhes-header">
                                          <div className="projeto-numero-large">0{currentIndex + 1}</div>
                                          <div className="detalhes-titulo">
                                                <h3>{projetoAtivo.nome}</h3>
                                                <div className="detalhes-stats">
                                                      <span className="stat-item">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                  <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>
                                                            {projetoAtivo.stats.views}
                                                      </span>
                                                      <span className="stat-item">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                            </svg>
                                                            {projetoAtivo.stats.likes}
                                                      </span>
                                                </div>
                                          </div>
                                    </div>

                                    <p className="detalhes-descricao">{projetoAtivo.descricaoLonga}</p>

                                    <div className="features-section">
                                          <h4>Features Principais</h4>
                                          <ul className="features-list">
                                                {projetoAtivo.features.map((feature, index) => (
                                                      <li key={index}>
                                                            <span className="feature-bullet"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
                                                                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z" />
                                                            </svg></span>
                                                            {feature}
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>

                                    <div className="tech-stack-section">
                                          <h4>Tech Stack</h4>
                                          <div className="tech-badges">
                                                {projetoAtivo.techs.map((tech, i) => (
                                                      <span key={i} className="tech-badge-large">{tech}</span>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="detalhes-actions">
                                          <a href={projetoAtivo.link} className="action-btn primary">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                      <polyline points="15 3 21 3 21 9"></polyline>
                                                      <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                                Ver Site
                                          </a>
                                          <a href={projetoAtivo.github} className="action-btn secondary">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                          </a>
                                    </div>
                              </div>

                              {/* Status Gerais */}
                              <div className="stats-gerais">
                                    <div className="stat-box">
                                          <span className="stat-numero">{totalProjetos}</span>
                                          <span className="stat-label">Projetos</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-box">
                                          <span className="stat-numero">{todasTechs.length}</span>
                                          <span className="stat-label">Tecnologias</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-box tech-cloud">
                                          {todasTechs.slice(0, 4).map((tech, i) => (
                                                <span key={i} className="mini-tech">{tech}</span>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default Projetos;