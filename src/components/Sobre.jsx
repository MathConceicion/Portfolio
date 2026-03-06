import React from 'react';
import './components-styles/Sobre.css';

function Sobre() {
      return (
            <section id="sobre" className="section-padrao">
                  <h2 className="titulo-secao">Sobre Mim</h2>
                  <div className="sobre-conteudo">
                        <div className="sobre-texto">
                              <p>
                                    Sou estudante de desenvolvimento web no <strong>SENAI</strong>, apaixonado por tecnologia e pela criação de experiências digitais modernas.
                              </p>
                              <p>
                                    Atualmente estou focado em evoluir como desenvolvedor full-stack, desenvolvendo projetos práticos com JavaScript, React e Node.js.
                              </p>
                              <p>
                                    Meu objetivo é criar aplicações que combinem design intuitivo, performance e boas práticas de desenvolvimento, gerando impacto real para usuários e empresas.
                              </p>
                              <div className="sobre-dados">
                                    <div>
                                          <span>1+</span>
                                          <p>Ano de Estudo</p>
                                    </div>
                                    <div>
                                          <span>10+</span>
                                          <p>Projetos</p>
                                    </div>
                                    <div>
                                          <span>SENAI</span>
                                          <p>Formação</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default Sobre;