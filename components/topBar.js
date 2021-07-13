import styles from "./topBar.module.scss";
import utils from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TopBar({title, showSettingsBtn}) {
  return (
    <div className={styles.wrapper}>
      <h3 className={utils.small_regular}>{title}</h3>
      { showSettingsBtn &&
      <div className={styles.settingsBtn}>
        <Link href="/ajustes">
          <Image src="/assets/settings.svg" height={24} width={24} />
        </Link>
      </div>
      }
    </div>
  );
}
