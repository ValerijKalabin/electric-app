import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; KAVAT {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
