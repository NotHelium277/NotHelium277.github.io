import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const reveal = { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: .42, ease: [.22, 1, .36, 1] } };

export function Layout() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { setMenu(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 16); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  return <><header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}><div className="nav-inner">
    <Link to="/" className="brand" aria-label="Md Hasib Mozumder home"><span className="brand-mark">hm<span>.</span></span><span className="brand-name">Md Hasib Mozumder<small>Independent digital partner</small></span></Link>
    <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}><i/><i/></button>
    <nav className={menu ? 'nav-links open' : 'nav-links'}><NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/contact">Contact</NavLink><Link className="nav-cta" to="/contact">Let’s talk <span>↗</span></Link></nav>
  </div></header><Outlet /><footer className="footer"><div className="footer-top"><Link to="/" className="brand"><span className="brand-mark">hm<span>.</span></span><span className="brand-name">Md Hasib Mozumder<small>Independent digital partner</small></span></Link><p>Thoughtful digital work.<br/>Built to move you forward.</p><Link to="/contact" className="footer-link">Have a project in mind? <span>↗</span></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Md Hasib Mozumder. All rights reserved.</span><span>Made with intention <b>✳</b></span></div></footer></>;
}

export function SectionLabel({ children }) { return <div className="section-label"><span/> {children}</div>; }
export function ButtonLink({ to, children, secondary = false }) { return <Link to={to} className={`button ${secondary ? 'button-secondary' : ''}`}>{children}<span>↗</span></Link>; }
