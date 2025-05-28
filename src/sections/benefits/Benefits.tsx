import Rocket from '/public/semi-icons/Rocket.png';
import Lock from '/public/semi-icons/Lock.png';
import Intersect from '/public/semi-icons/intersect.png';
import Burger from '/public/semi-icons/Burger.png';


import { Fragment } from "@/components/fragment/Fragment";
import styles from './Benefits.module.css';

export default function Benefits() {
    return (
        <>
        <section className={styles.benefits}>
            <h2 className={styles.h2}>Mira Nuestros Beneficios</h2>
            <p className={styles.p}>Simplificamos tu experiencia en la nube para que puedas enfocarte en lo que <br />
                realmente importa: hacer crecer tu proyecto.
            </p>
          <div className={styles.articleContainer}>
                <Fragment imageSrc={Rocket}  title={'Velocidad'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
                <Fragment   imageSrc={Lock} title={'Seguridad'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
                <Fragment  imageSrc={Intersect} title={'Soporte'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
                <Fragment  imageSrc={Burger}title={'Facilidad'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
            </div> 
        </section>
        </>
    )
}