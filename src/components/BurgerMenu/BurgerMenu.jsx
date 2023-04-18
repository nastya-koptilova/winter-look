import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./BurgerMenu.module.scss";

const modalRoot = document.querySelector("#modal-root");

export const BurgerMenu = ({ onClose, isModalOpen }) => {

  return createPortal(
    <>
        <div className={isModalOpen ? s.modal : s.modal_transition}>
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
        </div>
    </>,
    modalRoot
  );
};