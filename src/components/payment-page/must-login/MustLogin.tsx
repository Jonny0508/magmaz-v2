import { CheckCircle } from 'lucide-react';
import styles from './MustLogin.module.css';

export default function MustLogin() {
    return(
        <div className={styles.container}>
        <div className={styles.content}>
          <CheckCircle className={styles.icon} size={20} />
          <span>Necesita una cuenta para completar su compra</span>
        </div>
        <a href="#" className={styles.link}>Crea o Ingresa</a>
      </div>
    )
}