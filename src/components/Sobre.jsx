import React from 'react';
import './Sobre.css';

function Sobre() {
      return (
            <section id="sobre" className="section-padrao">
                  <h2 className="titulo-secao">Sobre Mim</h2>
                  <div className="sobre-conteudo">
                        <div className="sobre-texto">
                              <p>
                                    Sou estudante do <strong>SENAI</strong>, apaixonado por tecnologia e desenvolvimento web.
                                    Estou em constante aprendizado, buscando me tornar um desenvolvedor full-stack.
                              </p>
                              <p>
                                    Meu objetivo é criar soluções que façam a diferença na vida das pessoas,
                                    combinando design atraente com funcionalidade robusta.
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