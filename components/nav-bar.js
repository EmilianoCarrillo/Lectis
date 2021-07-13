import NavBarButton from "./nav-bar-btn";
import styles from "./nav-bar.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function NavBar() {
  const path = useRouter().pathname;
  const [activeButton, setActiveButton] = useState("Inicio");
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 5;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    switch (path) {
      case "/":
        setActiveButton("Inicio");
        break;
      case "/Perfil":
        setActiveButton("Perfil");
        break;
      case "/Buscar":
        setActiveButton("Buscar");
        break;
    }
  }, [])

  return (
    <ul
      className={`${styles.wrapper} ${
        scrollDir == "scrolling down" && styles.scrollingDown
      }`}
    >
      <NavBarButton
        label="Inicio"
        href="/"
        isActive={activeButton == "Inicio"}
        onClick={() => setActiveButton("Inicio")}
      />
      <NavBarButton
        label="Perfil"
        href="/Perfil"
        isActive={activeButton == "Perfil"}
        onClick={() => setActiveButton("Perfil")}
      />
      <NavBarButton
        label="Buscar"
        href="/Buscar"
        isActive={activeButton == "Buscar"}
        onClick={() => {
          setActiveButton("Buscar");
        }}
      />
    </ul>
  );
}
