import React from "react";
import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <p className={s.header__logo}>landing</p>
      <nav>
        <ul className={s.header__nav}>
          <li className={s.header__nav_item}>
            <a href="#">Clothes</a>
          </li>
          <li className={s.header__nav_item}>
            <a href="#">Sneakers</a>
          </li>
          <li className={s.header__nav_item}>
            <a href="#">Bags</a>
          </li>
          <li className={s.header__nav_item}>
            <a href="#">Accessorize</a>
          </li>
        </ul>
      </nav>
      <div className={s.header__buy}>
        <p>buy</p>
      </div>
    </header>
  );
};
