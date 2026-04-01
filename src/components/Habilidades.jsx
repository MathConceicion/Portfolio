import React from 'react';
import { useTranslation } from 'react-i18next';
import './components-styles/Habilidades.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

function Habilidades() {
      const { t } = useTranslation();

      const techs = [
            { nome: 'HTML', nivel: 'Intermediário', icon: <FaHtml5 /> },
            { nome: 'CSS', nivel: 'Intermediário', icon: <FaCss3Alt /> },
            { nome: 'JavaScript', nivel: 'Básico', icon: <FaJs /> },
            { nome: 'React', nivel: 'Intermediário', icon: <FaReact /> },
            { nome: 'C#', nivel: 'Básico', icon: <DiDotnet /> },
      ];

      return (
            <section id="habilidades" className="habilidades section-padrao">
                  <h2 className="titulo-secao">{t("habilidades.titulo")}</h2>
                  <div className="habilidades-grid">
                        {techs.map((tech, index) => (
                              <div key={index} className="habilidade-card">
                                    <div className="habilidade-icon">{tech.icon}</div>
                                    <h3>{tech.nome}</h3>
                                    <span className="nivel">{t(`habilidades.niveis.${tech.nivel}`)}</span>
                              </div>
                        ))}
                  </div>
            </section>
      );
}

export default Habilidades;