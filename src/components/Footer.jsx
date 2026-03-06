import React from 'react';
import './components-styles/Footer.css';

function Footer() {

      const currentYear = new Date().getFullYear();

      return (
            <footer className="footer">
                  <p>© {currentYear} - Desenvolvido por um jovem Estudante do SENAI</p>
                  <p>Feito com React</p>
            </footer>
      );
}

export default Footer;