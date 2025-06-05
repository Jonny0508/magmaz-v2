import Button from "@/components/button/Button";
import styles from './Password.module.css';

export default function Password() {
    return(
        
        <div className={styles.container}>
            <div className={styles.card}>
            <h2 className={styles.titulo}>Olvidaste tu contraseña ?</h2>
            <p className={styles.parrafo}>no te preucupes. Recuperalo ingresando tu correo</p>

            <input  className={styles.login__input} type="email" id="email" name="email" placeholder="Ingresa tu email" />
            <div className={styles.buton}>
                <Button label={'ingresar'} style={{width: '350px'}} href={'/VerificationCode'}/>
            </div>
            </div>
        </div>
    
    )
}