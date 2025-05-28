import Button from "@/components/button/Button";
import Image from "next/image";

import styles from './GoPlans.module.css';

export default function GoPlans() {
    return (
        <section className={styles.GoPlans}>
            <div className={styles.contentGoplans}>
                <h1>
                    ¿Listos para elevar tu<br/>
                        presencia online?
                </h1>
                    <p>
                         Descubre Aqui los Planes Perfectos para<br/>
                            Potenciar tu Proyecto Digital
                    </p>
             <Button label={'Ver Planes'} href={'/Plans'} style={{backgroundColor:'white', color:'#6c5da1'}}/>
            </div>
            <Image  src="/images/Goplans.png" className={styles.imageGoPlans} alt="hero" width={543} height={464}  />
        </section>
    )
}