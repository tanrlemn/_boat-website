'use client';

import logo from '../public/logo.svg';
import Image from 'next/image';

// styles
import styles from './styles/(component_styles)/loading.module.css';

export default function Loading() {
  return (
    <>
      <div className={styles.loadingWrapper}>
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
