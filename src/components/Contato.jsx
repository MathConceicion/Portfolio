import React from 'react';
import './Contato.css';

import {
      FaEnvelope,
      FaDiscord,
      FaGithub
} from "react-icons/fa";

function Contato() {

      const contatos = [
            {
                  nome: "Email",
                  link: "mailto:matheusdelaconceicion@gmail.com",
                  icon: <FaEnvelope />
            },
            {
                  nome: "Discord",
                  link: "https://discord.com/users/645666775647911",
                  icon: <FaDiscord />
            },
            {
                  nome: "GitHub",
                  link: "https://github.com/MathConceicion",
                  icon: <FaGithub />
            }
      ];

      return (
            <section id="contato" className="section-padrao">
                  <h2 className="titulo-secao">Contato</h2>

                  <div className="contato-conteudo">
                        <p>
                              Interessado em trabalhar junto ou trocar ideias? Entre em contato!
                        </p>

                        <div className="contato-links">
                              {contatos.map((item, index) => (
                                    <a
                                          key={index}
                                          href={item.link}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="contato-item"
                                    >
                                          <div className="contato-icon">
                                                {item.icon}
                                          </div>

                                          <p>{item.nome}</p>
                                    </a>
                              ))}
                        </div>

                  </div>
            </section>
      );
}

export default Contato;