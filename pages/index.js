import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import sidebarStyles from '../styles/sidebar.module.css';
import styles from '../styles/index.module.css';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <>
      <div className={sidebarStyles.sidebar}>
        <button className={sidebarStyles.logoutButton} onClick={() => signOut()}>Cerrar sesión</button>
        <div className={sidebarStyles.sidebarItem}>
          <Image src="/svg/inicio.svg" alt="Inicio" width={40} height={40} className={sidebarStyles.sidebarIcon} />
          <div className={sidebarStyles.sidebarText}>Inicio</div>
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
        <h1>Bienvenido, {session.user.name}</h1>
      </div>
    </>
  );
}
