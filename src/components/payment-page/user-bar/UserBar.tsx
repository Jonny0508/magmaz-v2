'use client'

import Image from 'next/image';
import styles from './UserBar.module.css';

interface UserBarProps {
    email: string;
   
  }
  
  export default function UserBar({ email }: UserBarProps) {
    return (
      <div className={styles.container}>
        <Image  src="/icons/avatars.png" alt="Avatar" className={styles.avatar}  width={30} height={20}/>
        <p className={styles.email}>{email}</p>
      </div>
    );
  }