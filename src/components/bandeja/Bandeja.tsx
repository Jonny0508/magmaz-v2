"use client";
import styles from './Bandeja.module.css';
import { useState } from 'react'


export default function Bandeja() {
  const [selected, setSelected] = useState('Juegos')

  const options = ['Juegos', 'Web', 'VPS',]

  return (
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
          selected === 'Juegos'
            ? styles.left1
            : selected === 'Web'
            ? styles.left1_3
            : styles.left2_3
        }`}
      ></div>
    </div>
  </div>
  )
}