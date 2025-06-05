
'use client'

import styles from "./ProgressBar.module.css"

interface ProgressBarProps {
    step: number;
  }
export default function ProgressBar({ step }: ProgressBarProps) {
    return (
    <div className={styles.progressContainer}>
      <div className={styles.stepContainer}>
      
        <div className={`${styles.step} ${step >= 1 ? styles.active : ""}`}>
          <span className={styles.check}>&#10003;</span>
          
        </div>
       
        <p className={`${styles.label} ${step >= 1 ? styles.activeText : ""}`}>Orden</p>
        
      </div>
      <div className={styles.line}></div>
      
      <div className={styles.stepContainer}>
      
        <div className={`${styles.step} ${step >= 2 ? styles.active : ""}`}>
        
          <span className={styles.check}>&#10003;</span>
        </div>
        
        <p className={`${styles.label} ${step >= 2 ? styles.activeText : ""}`}>Compra</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.stepContainer}>
        <div className={`${styles.step} ${step >= 3 ? styles.active : ""}`}>
          <span className={styles.check}>&#10003;</span>
        </div>
        <p className={`${styles.label} ${step >= 3 ? styles.activeText : ""}`}>Confirmación</p>
      </div>
      
    </div>
    )
}