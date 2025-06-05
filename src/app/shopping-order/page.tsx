'use client'

import MustLogin from "@/components/payment-page/must-login/MustLogin";
import Order from "@/components/payment-page/order/Order";
import ProgressBar from "@/components/payment-page/progress-bar/ProgressBar";
import ShoppingCart from "@/components/payment-page/shopping-card/ShoppingCart";

import styles from './ShoppingOrder.module.css';
import Button from "@/components/button/Button";

export default function ShoppingOrder() {
    return (
    
    <div className={styles.container}>
      <div className={styles.head}>
        <ProgressBar  step={1}/>
      </div>
      <div className={styles.row}>
        <div className={styles.rith}>
            <MustLogin />
            <ShoppingCart />
        </div>
        <div className={styles.left}>
          <Order />
          
          <Button label={'Siguiente'} style={{marginTop:'20px', marginLeft: '130px',width: '350px' }} href={'/payment-order'} />
          
        </div>
      
      </div>
    </div>
       
    );
}