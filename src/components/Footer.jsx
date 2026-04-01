import React from 'react';
import { useTranslation } from 'react-i18next';
import './components-styles/Footer.css';

function Footer() {
      const { t } = useTranslation();
      const currentYear = new Date().getFullYear();

      return (
            <footer className="footer">
                  <p>© {currentYear} - {t("footer.dev")}</p>
                  <p>{t("footer.feito")}</p>
            </footer>
      );
}

export default Footer;