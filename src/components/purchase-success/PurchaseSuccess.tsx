

import styles from "./PurchaseSuccess.module.css";
import Button from "../button/Button";
import Image from 'next/image';

interface PurchaseSuccessProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function PurchaseSuccess({ isVisible,  }: PurchaseSuccessProps) {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.icon}>
        <Image  src="/semi-icons/check.png" alt="Avatar" className={styles.icon}  width={115} height={115}/>
        </div>
        <h2 >Tu compra fue realizada con éxito</h2>
        <p className={styles.parrafo}>Gracias por confiar en nosotros</p>
       <Button label="Inicio" href="/" style={{marginTop:'50px', marginLeft:'55px',width: '450px' }}  />
      </div>
    </div>
  );
}