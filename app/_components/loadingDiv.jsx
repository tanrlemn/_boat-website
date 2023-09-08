'use client';

import logo from '@/public/logo.svg';
import Image from 'next/image';
import { Box, Heading, Flex } from '@chakra-ui/react';

// styles
import styles from '../styles/(component_styles)/loading.module.css';

export default function LoadingDiv({ borderColor = '--blue-light' }) {
  return (
    <>
      <Flex align={'flex-end'}>
        <Box
          ml={'-0.5rem'}
          mr={'-0.2rem'}
          mb={'0.2rem'}
          minW={'1rem'}
          borderBottom={`2px solid var(${borderColor})`}
          display={'inline-block'}
          lineHeight={'inherit'}></Box>
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
      </Flex>
    </>
  );
}
