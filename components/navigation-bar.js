import styles from "./navigation-bar.module.scss";
import { useRouter } from "next/router";

function NavigationBar({ floating, href }) {
  const router = useRouter();
  return (
    <div className={`${styles.wrapper} ${floating && styles.floating}`}>
      {floating ? (
        <img
          src="/assets/back-black.svg"
          alt="Atrás"
          onClick={() => (href ? router.push(href) : router.back())}
        />
      ) : (
        <img
          src="/assets/back.svg"
          alt="Atrás"
          onClick={() => (href ? router.push(href) : router.back())}
        />
      )}
    </div>
  );
}

export default NavigationBar;
