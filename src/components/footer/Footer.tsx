import Image from "next/image";
import styles from './Footer.module.css';
export default function Footer() {
    return (
        <section className={styles.footer}>
          <Image  src="/semi-icons/logo1.png" className='footerLogo' alt="Logo" width={195} height={58.5}  />
          <p>&copy; 2024 Mi Empresa de Hosting. Todos los derechos reservados.</p>
        </section>
    )
}