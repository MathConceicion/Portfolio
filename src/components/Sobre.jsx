import React from 'react';
import { useTranslation } from 'react-i18next';
import './components-styles/Sobre.css';

function Sobre() {
      const { t } = useTranslation();

      return (
            <section id="sobre" className="section-padrao">
                  <h2 className="titulo-secao">{t("sobre.titulo")}</h2>
                  <div className="sobre-conteudo">
                        <div className="sobre-texto">
                              <p dangerouslySetInnerHTML={{ __html: t("sobre.p1") }} />
                              <p>{t("sobre.p2")}</p>
                              <p>{t("sobre.p3")}</p>
                              <div className="sobre-dados">
                                    <div><span>1+</span><p>{t("sobre.anoLabel")}</p></div>
                                    <div><span>10+</span><p>{t("sobre.projetosLabel")}</p></div>
                                    <div><span>SENAI</span><p>{t("sobre.formacaoLabel")}</p></div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default Sobre;