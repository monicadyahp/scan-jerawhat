// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, loading, logout } = useAuth();
  const isLoggedIn = !!user;

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Efek Scroll Header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) header.classList.toggle('scroll-header', window.scrollY >= 50);
      const up = document.getElementById('scroll-up');
      if (up) up.classList.toggle('show-scroll', window.scrollY >= 460);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi Logout
  const handleLogout = () => {
    Swal.fire({
      title: 'Yakin ingin keluar?',
      text: 'Anda akan keluar dari akun Anda.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'hsl(330, 91%, 85%)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Keluar!',
      cancelButtonText: 'Batal',
      background: '#fbeaea',
      color: 'hsl(323, 70%, 30%)',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Keluar!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
           navigate('/'); 
        });
      }
    });
  };

  const isScanActive = location.pathname === "/scan"; 
  const isArticleDetail = location.pathname.startsWith("/article-");

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          JeraWHAT?!
        </Link>

        {/* Tombol Hamburger */}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-grid-alt"></i>
        </div>

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            
            {/* --- BAGIAN 1: MENU GLOBAL (MUNCUL UNTUK SEMUA ORANG) --- */}
            {/* Pastikan Scan Wajah ada di bagian ini, DI LUAR kurung { } user logic */}

            <li className="nav__item">
              <NavLink to="/" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>Home</NavLink>
            </li>
            
            <li className="nav__item">
              <NavLink to="/about-scan" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>About</NavLink>
            </li>

            {/* INI MENU SCAN WAJAH - SUDAH BENAR DI SINI */}
            <li className="nav__item">
              <NavLink 
                to="/scan" 
                className={({ isActive }) => 'nav__link' + ((isActive || isScanActive) ? ' active-link' : '')}
                onClick={closeMenu}
              >
                Scan Wajah
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/article" className={({ isActive }) => 'nav__link' + ((isActive || isArticleDetail) ? ' active-link' : '')} onClick={closeMenu}>Article</NavLink>
            </li>


            {/* --- BAGIAN 2: MENU KHUSUS USER LOGIN --- */}
            {!loading && isLoggedIn && (
              <>
                <li className="nav__item nav__dropdown">
                  <span className={
                    'nav__link' + (location.pathname.startsWith('/scan/history') ? ' active-link' : '')
                  }>
                    Fitur Lain <i className="bx bx-chevron-down"></i>
                  </span>
                  <ul className="nav__dropdown-menu">
                    <li>
                      <NavLink to="/scan/history" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>
                        Riwayat Scan
                      </NavLink>
                    </li>
                    <li>
                        <NavLink to="/quiz" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>Kuis</NavLink>
                    </li>
                    <li>
                        <NavLink to="/rekomendasi" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>Rekomendasi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/maps" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>Maps</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ai-chat" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>AI Chat</NavLink>
                    </li>
                  </ul>
                </li>
                
                <li className="nav__item">
                  <NavLink to="/profile" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>Profile</NavLink>
                </li>

                <li className="nav__item">
                    <span className="nav__link" style={{ cursor: 'pointer', color: 'crimson' }} onClick={() => { closeMenu(); handleLogout(); }}>
                        Logout
                    </span>
                </li>
              </>
            )}

            {/* --- BAGIAN 3: MENU JIKA BELUM LOGIN (GUEST) --- */}
            {!loading && !isLoggedIn && (
                <li className="nav__item">
                  <NavLink to="/login" className={({ isActive }) => 'nav__link' + (isActive ? ' active-link' : '')} onClick={closeMenu}>Login</NavLink>
                </li>
            )}

          </ul>

          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="bx bx-x"></i>
          </div>
          <img src="https://res.cloudinary.com/dbofowabd/image/upload/v1748105258/detailjerawat1_h4lojo.png" alt="" className="nav__img" />
        </div>
      </nav>
    </header>
  );
};

export default Header;