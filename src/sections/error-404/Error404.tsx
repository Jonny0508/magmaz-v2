import Image from "next/image";
import Button from "../../components/button/Button";
import styles from './Error404.module.css';
export default function Error404() {
    return (
        <>
        <div className={styles.container}>
            <div>
                <Image  src="/images/Proyect/error404.png" className={styles.image} alt="hero" width={484} height={454}  />
            </div>
            <div>
                <h1 className={styles.title}>Pagina no encontrada</h1>
                <p className={styles.parrafo}>Perdon, nosotros no podemos encontrar la pagina que estasd buscado</p>
            </div>
            <div>
            <Button label={'Ir a inicio'}  style={undefined} href={ '/'}/>
            </div>
        </div>
        </>
    );

}