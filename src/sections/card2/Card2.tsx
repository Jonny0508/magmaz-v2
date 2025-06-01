import Image from 'next/image';
import Button from "@/components/button/Button";
import styles from './Card2.module.css';

export default function Card2() {
    return(
        <>
        <div className={`${styles.card} ${styles.recommended}`}>

          <h3 className={styles.cardTitle}>1GB - Minecraft</h3>

          <p style={
            {fontSize: 20, fontWeight: 400}
          }><span className={styles.span}>$5</span> por mes</p>

          <p style={{fontSize: 14, fontWeight: 400 , marginBottom: '40px'}}>Comienza tu aventura e inicia tus ideas</p>
          <div className={styles.buttonContainer}>
          <Button label={'Agregar al Carrito'} href={'/'} style={{backgroundColor:'white', color:'#6c5da1', width: '350px', marginLeft: '45px'}}/>
          </div>
           <h3 className={styles.cardTitle}>Beneficios</h3>
        
           <ul className={styles.lista}>

            <li className={styles.li}>
              <Image src="/icons/icon2.png"  className={styles.icon} alt="Ícono de verificación" width={17} height={17} />
                1GB de RAM</li>
            <li className={styles.li}>
              <Image src="/icons/icon2.png" className={styles.icon} alt="Ícono de verificación" width={17} height={17} />
                 10GB de Almacenamiento</li>
            <li className={styles.li}> 
              <Image src="/icons/icon2.png" className={styles.icon} alt="Ícono de verificación" width={17} height={ 17} />
                 Plugins ilimitados </li>
            <li className={styles.li}> 
              <Image src="/icons/icon2.png" className={styles.icon} alt="Ícono de verificación" width={17} height={17} />
                3 Backups </li>
            <li className={styles.li}>
              <Image src="/icons/icon2.png" className={styles.icon} alt="Ícono de verificación" width={17} height={17} />
                 3 Base de datos MySQL </li>
            <li className={styles.li}>
              <Image src="/icons/icon2.png" className={styles.icon} alt="Ícono de verificación" width={17} height={17} />
                  Soporte 24/7 </li>
          </ul>




        </div>


        
        </>
    )
}