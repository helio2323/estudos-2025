
import Image from "next/image";
import styles from "../styles/index.module.css"

import heroImg from "../../public/assets/heroImg.svg"

export default function Home() {

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.logoContent}>

          <Image 
          className={styles.hero}
          alt="logo tarefas"
          src={heroImg}
          priority />

        </div>

        <h1 className={styles.title}>Sitema feito para voce organizar seus estudos e tarefas</h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>
              +12 Poss
            </span>
          </section>
          <section className={styles.box}>
            <span>
              +90 comentarios
            </span>
          </section>
          
        </div>

      </main>
    </div>
  );
}
