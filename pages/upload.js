import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/upload.module.css';
import sidebarStyles from '../styles/sidebar.module.css';

export default function Upload() {
  return (
    <>
      <Head>
        <title>Subir Archivo</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarItem}>
          <Image src="/svg/inicio.svg" alt="Inicio" width={40} height={40} className={sidebarStyles.sidebarIcon} />
          <Link href="/index">Inicio</Link>
        </div>
        <div className={sidebarStyles.sidebarItem}>
          <Image src="/svg/perfil.svg" alt="Perfil" width={30} height={30} className={sidebarStyles.sidebarIcon} />
          <div className={sidebarStyles.sidebarText}>Perfil</div>
        </div>
        <div className={sidebarStyles.sidebarItem}>
          <Image src="/svg/busqueda.svg" alt="Buscador" width={30} height={30} className={sidebarStyles.sidebarIcon} />
          <div className={sidebarStyles.sidebarText}>Buscador</div>
        </div>
        <div className={sidebarStyles.sidebarItem}>
          <Image src="/svg/subir.svg" alt="Subir" width={30} height={30} className={sidebarStyles.sidebarIcon} />
          <Link href="/upload">Subir</Link>
        </div>
        <div className={sidebarStyles.sidebarItem}>
          <Image src="/svg/guardados.svg" alt="Guardados" width={30} height={30} className={sidebarStyles.sidebarIcon} />
          <div className={sidebarStyles.sidebarText}>Guardados</div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>Crear Item</div>
        <div className={styles.uploadSection}>
          <label htmlFor="file-upload" className={styles.button}>Subir Archivo</label>
          <input id="file-upload" type="file" className={styles.fileUpload} />
          <div className={styles.icon}>
          </div>
        </div>
        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Título*</div>
            <input type="text" className={styles.formInput} placeholder="¿Cómo le pondrás a tu archivo?" />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Descripción*</div>
            <input type="text" className={styles.formInput} placeholder="Detalla de qué trata el material que subirás" />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Palabras Clave*</div>
            <input type="text" className={styles.formInput} placeholder="Ingresa Tags que estén relacionados con el material" />
          </div>
        </div>
        <div className={styles.submitButton}>Crear Item</div>
      </div>
    </>
  );
}

