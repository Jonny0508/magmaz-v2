import Button from "@/components/button/Button";
import Image from "next/image";
import styles from './Hero.module.css';



export default function Hero() {
    return (
     <section className={styles.hero}>
        <div className={styles.content}>
            <h1>
            Potencia Tu Éxito <br/>
            Digital en la Nube
            </h1>
            <p>
                 Desata el poder de tu presencia online con nuestro hosting web,<br/>
                juegos y servidores virtuales de alto rendimiento
             </p>
            <Button label={'Ver Planes'}  style={undefined} href={'/plans'}/>
        </div>
    
            <Image  src="/images/hero.png" className={styles.image} alt="hero" width={543} height={464}  />
      </section>      
    )
}