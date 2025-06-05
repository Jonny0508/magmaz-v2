

'use client'

import UserBar from "@/components/payment-page/user-bar/UserBar"
import styles from './PaymentOrder.module.css';
import PaymentMethods from "@/components/payment-page/payment-methods/PaymentMethods";
import ProgressBar from "@/components/payment-page/progress-bar/ProgressBar";
import Order from "@/components/payment-page/order/Order";
import Button from "@/components/button/Button";
import { useState } from "react";
import PurchaseSuccess from "@/components/purchase-success/PurchaseSuccess";


export default function PaymentOrder() {

    const [showSuccess, setShowSuccess] = useState(false);

    const handlePayment = () => {
      // Simulación de pago exitoso
      setShowSuccess(true);
    };

    return (
       <div className={styles.container}>
          <div className={styles.head}>
            <ProgressBar  step={2}/>
          </div>
          <div className={styles.row}>
            <div className={styles.rith}>
                <UserBar  email="ronaldangel231456@gmail.com"  />
                <PaymentMethods />
              <div>
                <Button label={'Pagar'} style={{marginTop:'60px', marginLeft: '200px',width: '350px'}} onClick={handlePayment}/>
                <PurchaseSuccess isVisible={showSuccess} onClose={() => setShowSuccess(false)} />
              </div>
            </div>
           <div className={styles.left}>
                <Order />
           </div>
      </div>
          
            
       </div>
    )
}

