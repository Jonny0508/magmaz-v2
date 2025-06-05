'use client'

import  { useState } from 'react';
import styles from './Register.module.css'; // CSS Modules para estilos
import Button from '@/components/button/Button';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';




export default function Register() {

    
    const [selected, setSelected] = useState('Login')
    const options = ['Login', 'Registro']
  
    
    
    const [showPassword, setShowPassword] = useState(false)
    
   
  return (
    <div className={styles.authContainer}>

    <div className={styles.formColumn}>
      <h3 id={styles.subtitulo}>EMPIEZA HOY</h3>
      <h2 id={styles.titulo}>Bienvenido a Magmaz</h2>
        
     {/*boton de login */}

     <div className={styles.container}>
    <div className={styles.innerContainer}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`${styles.button} ${selected === option ? styles.textIndigo900 : styles.textWhite}`}
        >
          {option}
        </button>
      ))}
      <div
        className={`${styles.indicator} ${
          selected === 'Login'
            ? styles.left1
            : selected === 'Registro'
            ? styles.left1_3
            : styles.left2_3
        }`}
      ></div>
      </div>
    </div>
        
       
        
        
       {/*<h1>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h1>*/}


      <form>
         <div className={styles.inputContainer2}>
          <div className={styles.separadorInput}>
            <label className={styles.login__labelname} htmlFor="text">  Nombres </label>
              <input  className={styles.login__inputname} type="text" id="name" name="name" placeholder="Jonny" />
          </div>
          <div className={styles.separadorInput}>
            <label className={styles.login__labelname} htmlFor="text"> Apellidos </label>
              <input  className={styles.login__inputname} type="text" id="last name" name="last name" placeholder="Sonco" />
          </div>
         </div>
        <div className={styles.inputContainer}>
          <label className={styles.login__label} htmlFor="email"> Correo electronico </label>
          <input  className={styles.login__input} type="email" id="email" name="email" placeholder="Ingresa tu email" />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.login__label} htmlFor="password"> Contraseña </label>
          <input className={styles.login__input} type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Ingresa tu contraseña" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeButton}
            >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="login-sign-up" className={styles.login__labelcheckbox}>
			        <input id="login-sign-up" type="checkbox" className={styles.login__inputcheckbox} />
			        Keep me Signed in
		        </label>
            <a href={'/password'} className={styles.login__forgot}>Forgot Password?</a>
        </div>
       <Button label={"Ingresar"} href={'/'} style={{margin:'50px 170px '}}  />
      </form>
    </div>
      {/* Columna Derecha: Imagen */}
      <div className={styles.imageColumn}>
        <Image
          src="/images/login.png" // Ruta de la imagen
          alt="Imagen de login"
          width={800} // Ancho de la imagen
          height={600} // Alto de la imagen
          className={styles.authImage}
        />
      </div>
    </div>
        
    );
};