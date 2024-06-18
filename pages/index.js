import { useSession, signOut, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import sidebarStyles from '../styles/sidebar.module.css';
import SearchBar from '../public/components/SearchBar'; 
import CategoriesGrid from "../public/components/CategoriesGrid"; 

const inlineStyles = {
  parentContainer: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
  },
  mainContentContainer: {
    flex: 1,
    padding: '20px',
    marginLeft: '250px', // Ajuste para que no se superponga con el sidebar
    textAlign: 'center',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '20px', // Añadir margen inferior
  },
  title: {
    marginBottom: '14px',
  },
  titleParagraph: {
    marginBottom: '20px', // Ajuste del margen inferior
  },
  searchBarContainer: {
    marginBottom: '20px',
    width: '100%',
    maxWidth: '1000px', // Ajusta este valor según tus necesidades
    margin: '0 auto', // Centra la barra de búsqueda
  },
  categoriesContainer: {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Ajuste para que las categorías se ajusten correctamente
  },
  filesContainer: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  fileCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    width: 'calc(33.333% - 20px)',
    boxSizing: 'border-box',
  },
};

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10'];

  useEffect(() => {
    async function fetchFiles() {
      const response = await fetch('/api/files');
      const data = await response.json();
      setFiles(data);
    }

    fetchFiles();
  }, []);

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <>
      <div style={inlineStyles.parentContainer}>
        <div className={sidebarStyles.sidebar} style={inlineStyles.sidebar}>
          <button className={sidebarStyles.logoutButton} onClick={() => signOut()}>Cerrar sesión</button>
          <div className={sidebarStyles.sidebarItem}>
            <Image src="/svg/inicio.svg" alt="Inicio" width={40} height={40} className={sidebarStyles.sidebarIcon} />
            <Link href="/">Inicio</Link>
          </div>
          <div className={sidebarStyles.sidebarItem}>
            <Image src="/svg/perfil.svg" alt="Perfil" width={30} height={30} className={sidebarStyles.sidebarIcon} />
            <div className={sidebarStyles.sidebarText}>Perfil</div>
          </div>
          <div className={sidebarStyles.sidebarItem}>
            <Image src="/svg/busqueda.svg" alt="Buscador" width={30} height={30} className={sidebarStyles.sidebarIcon} />
            <Link href="/buscador_archivos">Buscador</Link>
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

        <div style={inlineStyles.mainContentContainer}>
          <div style={inlineStyles.titleContainer}>
            <h1 style={inlineStyles.title}>Bienvenid@, {session.user.name.toUpperCase()}</h1>
            <h1>a la biblioteca colaborativa UDP</h1>
            <p style={inlineStyles.titleParagraph}>Explora material y archivos creados por compañeros y pares de la comunidad de diseño UDP.</p>
            <div style={inlineStyles.searchBarContainer}>
              <SearchBar placeholder="Buscador..." onChange={(e) => console.log(e.target.value)} />
            </div>
          </div>
          <div style={inlineStyles.categoriesContainer}>
            <h2>Selecciona tu ramo</h2>
            <CategoriesGrid categories={categories} onCategoryClick={(category) => alert(`You clicked on ${category}`)} />
          </div>
          <div style={inlineStyles.filesContainer}>
            <h2>Archivos Subidos</h2>
            {files.length > 0 ? (
              files.map((file) => (
                <div key={file.id} style={inlineStyles.fileCard}>
                  <h3>{file.name}</h3>
                  <p>{file.description}</p>
                  <a href={file.path} target="_blank" rel="noopener noreferrer">Ver archivo</a>
                </div>
              ))
            ) : (
              <p>No hay archivos subidos.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
