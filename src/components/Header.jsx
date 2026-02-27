import React, { useState } from 'react';
import './Header.css';

function Header() {
      const [menuAberto, setMenuAberto] = useState(false);

      return (
            <header className="header">
                  <div className="container">

                        <div className="logo">Portfólio</div>

                        <button
                              className="menu-btn"
                              onClick={() => setMenuAberto(!menuAberto)}
                        >
                              {menuAberto ? '✕' : '☰'}
                        </button>

                        <nav className={`nav ${menuAberto ? 'nav-aberto' : ''}`}>
                              <a href="#inicio" onClick={() => setMenuAberto(false)}>Início</a>
                              <a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a>
                              <a href="#habilidades" onClick={() => setMenuAberto(false)}>Habilidades</a>
                              <a href="#projetos" onClick={() => setMenuAberto(false)}>Projetos</a>
                              <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
                        </nav>

                  </div>
            </header>
      );
}

export default Header;