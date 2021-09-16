import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
<header>
    <img className={s.header__logo} src="https://st2.depositphotos.com/3096625/6613/v/600/depositphotos_66134211-stock-illustration-emblem-of-ukraine-floral-logo.jpg" alt="logo-Ukraine" />
</header>
    );
}

export default Header;