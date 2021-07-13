import utils from "../styles/utils.module.css";
import styles from "./index.module.scss";
import { createClient } from "contentful";
import Slider from "../components/slider";
import SeccionCategorias from "../components/seccion-catagorias";
import Collection from "../components/collection";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { useAuth } from "../hooks/useAuth";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "categoria" });

  const colecc = await client.getEntries({ content_type: "coleccin" });

  return {
    props: {
      categorias: res.items,
      colecciones: colecc.items,
    },
    revalidate: 1,
  };
}

const media = [
  "/assets/callout 1.png",
  "/assets/callout 2.png",
  "/assets/callout 3.png",
];

function Inicio({ categorias, colecciones }) {
  const auth = useAuth();

  if (auth.user) console.log(auth.user);
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.heading}>
        {auth.user ? (
          <p className={utils.subtitle_regular}>
            ¡Hola,{" "}
            {auth.user.nickname == ""
              ? auth.user.name.split(" ")[0]
              : auth.user.nickname}
            !
          </p>
        ) : (
          <p className={utils.subtitle_regular}>Bienvenida/o, lector/a</p>
        )}
        <p className={utils.title_medium}>¿Qué leeremos hoy?</p>
      </div>

      {/* <Banner /> */}

      {colecciones.map((coleccion, i) => {
        if (i == 0) {
          return (
            <div className={styles.sliderWrap}>
              <Collection coleccion={coleccion} id={coleccion.sys.id} />
              <Slider media={media} />
            </div>
          );
        } else
          return <Collection coleccion={coleccion} id={coleccion.sys.id} />;
      })}

      <SeccionCategorias categorias={categorias} />

      <Footer />
    </div>
  );
}

export default Inicio;
