import React, { useState, useRef } from 'react';
import './components-styles/Contato.css';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

emailjs.init('3X7KGNSNeeeJJJRHE');

function Contato() {
      const formRef = useRef();
      const { t } = useTranslation();
      const [formData, setFormData] = useState({ email: '', assunto: '', mensagem: '' });
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState('');

      const contatos = [
            { nome: "Email", link: "mailto:matheusdelaconceicion@gmail.com", icon: <FaEnvelope /> },
            { nome: "Discord", link: "https://discord.com/users/645666775647911", icon: <FaDiscord /> },
            { nome: "GitHub", link: "https://github.com/MathConceicion", icon: <FaGithub /> },
            { nome: "LinkedIn", link: "https://www.linkedin.com/in/matheus-conceição-9b1a7224b/", icon: <FaLinkedin /> },
      ];

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setMessage('');

            try {
                  await emailjs.send('service_80tgta8', 'template_kydah0i', {
                        email: formData.email,
                        assunto: formData.assunto,
                        mensagem: formData.mensagem,
                  });

                  setMessage(t("contato.sucesso"));
                  setFormData({ email: '', assunto: '', mensagem: '' });
                  setTimeout(() => setMessage(''), 3000);
            } catch (error) {
                  setMessage(t("contato.erro"));
                  console.error('Erro ao enviar email:', error);
            } finally {
                  setLoading(false);
            }
      };

      return (
            <section id="contato" className="section-padrao">
                  <h2 className="titulo-secao">{t("contato.titulo")}</h2>

                  <div className="contato-container">
                        <div className="contato-esquerda">
                              <p>{t("contato.descricao")}</p>

                              <div className="contato-links">
                                    {contatos.map((item, index) => (
                                          <a key={index} href={item.link} target="_blank" rel="noreferrer" className="contato-item">
                                                <div className="contato-icon">{item.icon}</div>
                                                <p>{item.nome}</p>
                                          </a>
                                    ))}
                              </div>
                        </div>

                        <div className="contato-direita">
                              <form ref={formRef} onSubmit={handleSubmit} className="contato-form">
                                    <div className="form-grupo">
                                          <label htmlFor="email">Email</label>
                                          <input
                                                type="email" id="email" name="email"
                                                value={formData.email} onChange={handleChange}
                                                required placeholder="seu@email.com"
                                          />
                                    </div>

                                    <div className="form-grupo">
                                          <label htmlFor="assunto">{t("contato.assunto")}</label>
                                          <input
                                                type="text" id="assunto" name="assunto"
                                                value={formData.assunto} onChange={handleChange}
                                                required placeholder={t("contato.assuntoPlaceholder")}
                                          />
                                    </div>

                                    <div className="form-grupo">
                                          <label htmlFor="mensagem">{t("contato.mensagem")}</label>
                                          <textarea
                                                id="mensagem" name="mensagem"
                                                value={formData.mensagem} onChange={handleChange}
                                                required placeholder={t("contato.mensagemPlaceholder")}
                                                rows="5"
                                          />
                                    </div>

                                    <button type="submit" className="btn-enviar" disabled={loading}>
                                          {loading ? t("contato.enviando") : t("contato.enviar")}
                                    </button>

                                    {message && (
                                          <p className={`form-message ${message.includes('sucesso') || message.includes('successfully') ? 'sucesso' : 'erro'}`}>
                                                {message}
                                          </p>
                                    )}
                              </form>
                        </div>
                  </div>
            </section>
      );
}

export default Contato;