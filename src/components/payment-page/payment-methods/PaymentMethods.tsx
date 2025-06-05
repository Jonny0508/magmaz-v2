
'use client'


import type React from "react"

import { useState } from "react"
import Image from "next/image"
import styles from "./PaymentMethods.module.css"


export default function PaymentMethods() {


    const [paymentMethod, setPaymentMethod] = useState("credit-card")


    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentMethod(event.target.value)
    }

   
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Metodos de Pago</h2>

            <div className={styles.optionsContainer}>
             <div className={styles.paymentOption}>
            <div className={styles.optionLeft}>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentChange}
              className={styles.radioInput}
            />
            <label htmlFor="paypal" className={styles.optionLabel}>
              <span className={styles.optionTitle}>Paypal</span>
              <span className={styles.optionDescription}>Paga con Paypal de manera segura</span>
            </label>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src="/icons/icopaypal.png"
              alt="Paypal"
              width={40}
              height={40}
              className={styles.singleLogo}
            />
          </div>
        </div>

        <div className={styles.paymentOption}>
          <div className={styles.optionLeft}>
            <input
              type="radio"
              id="credit-card"
              name="paymentMethod"
              value="credit-card"
              checked={paymentMethod === "credit-card"}
              onChange={handlePaymentChange}
              className={styles.radioInput}
            />
            <label htmlFor="credit-card" className={styles.optionLabel}>
              <span className={styles.optionTitle}>Credit/Debit Cards</span>
              <span className={styles.optionDescription}>Pay with your Credit / Debit Card</span>
            </label>
          </div>
          <div className={styles.cardLogosContainer}>
            <Image
              src="/icons/icovisa.png"
              alt="Visa"
              width={32}
              height={32}
              className={styles.cardLogo}
            />
            <Image
              src="/icons/icoamerica.png"
              alt="American Express"
              width={32}
              height={32}
              className={styles.cardLogo}
            />
            <Image
              src="/icons/icomaster.png"
              alt="Mastercard"
              width={32}
              height={32}
              className={styles.cardLogo}
            />
          </div>
        </div>

        <div className={styles.paymentOption}>
          <div className={styles.optionLeft}>
            <input
              type="radio"
              id="binance"
              name="paymentMethod"
              value="binance"
              checked={paymentMethod === "binance"}
              onChange={handlePaymentChange}
              className={styles.radioInput}
            />
            <label htmlFor="binance" className={styles.optionLabel}>
              <span className={styles.optionTitle}>Binance</span>
              <span className={styles.optionDescription}>Paga con Binance de manera segura</span>
            </label>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src="/icons/icobinance.png"
              alt="Binance"
              width={40}
              height={40}
              className={`${styles.singleLogo} ${styles.binanceLogo}`}
            />
          </div>
        </div>
      </div>

      </div>
    )
}