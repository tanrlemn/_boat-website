'use client';

import logo from '@/public/logo.svg';
import Image from 'next/image';

// styles
import styles from '../styles/(component_styles)/loading.module.css';

export default function LoadingDiv() {
  return (
    <>
      <div className={styles.loadingDivWrapper}>
        <div className={styles.ldsEllipsis}>
          <Image
            src={logo}
            alt='logo'
            width={50}
            height={50}
          />
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
