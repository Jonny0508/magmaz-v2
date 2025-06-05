/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Button from "@/components/button/Button";
import styles from "./VerificationCode.module.css";

export default function VerificationCode() {

    const handleInput = (event: { target: any; }) => {
        const input = event.target;
    
        // Limita el texto a un carácter
        if (input.value.length > 1) {
          input.value = input.value.slice(0, 1);
        }
      };

    return (
        <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Verifica tu cuenta</h2>
          <h3 className={styles.subtitle}>Código de Verificación</h3>
          <div className={styles.codeContainer}>
            {[...Array(6)].map((_, index) => (
            <input
                key={index}
                type="text"
                className={styles.codeInput}
                onInput={handleInput}
            />
            ))}         
          </div>
          <Button label={'Verificar'} style={{padding:'20px 0px 20px 120px',margin:'0px 0px 0px 30px ',width: '200px'}} href={"/"} />
        </div>
        </div>
      );

      
}