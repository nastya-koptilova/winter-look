import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import s from "./Header.module.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { motion } from "framer-motion";
import { ReactComponent as BurgerIcon } from "../../images/burger.svg";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModalOpen]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className={s.header}>
        <motion.p
          initial={{
            x: 1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0,
            duration: 1.5,
          }}
          className={s.header__logo}
        >
          landing
        </motion.p>
        {width < 900 ? (
          <>
            <motion.button
              initial={{
                x: 1000,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0,
                duration: 1.5,
              }}
              onClick={onToggle}
              className={s.menu_button}
            >
              {!isModalOpen ? (
                <BurgerIcon className={s.menu_button__burger} />
              ) : (
                <CloseIcon className={s.menu_button__close} />
              )}
            </motion.button>
            {isModalOpen && (
              <BurgerMenu
                isModalOpen={isModalOpen}
                onClose={handleModalClose}
              />
            )}
          </>
        ) : (
          <>
            <motion.nav
              initial={{
                x: 1000,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0,
                duration: 1.5,
              }}
            >
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
            </motion.nav>
            <motion.div
              initial={{
                x: 1000,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0,
                duration: 1.5,
              }}
              className={s.header__buy}
            >
              <p>buy</p>
            </motion.div>
          </>
        )}
      </header>
    </>
  );
};
