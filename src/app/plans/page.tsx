"use client"
import Footer from "@/components/footer/Footer";
import styles from './Plans.module.css';
import Card from '@/sections/plans-page/card/Card';
import Card2 from '@/sections/plans-page/card2/Card2';
import Bandeja from '@/components/bandeja/Bandeja';

export default function Plans() {
    return (
       
       <>
       
          <section className={styles.plans}>
              <div className={styles.title}>
                <h1>Planes</h1>
                  <p>Desata el poder de tu presencia online con nuestro hosting web, juegos y <br /> servidores virtuales de alto rendimiento</p>
              </div>
              <div>
                <Bandeja />
              </div>
              <div className={styles.containerPlans}>
                <Card2 />
                <Card />
                <Card2 />
              </div>
          </section>
          <div>
              <Footer />
          </div>
       </>
    );
  }
  