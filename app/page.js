'use client';

// styles
import styles from './styles/home.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';
// paintingRealPeople
import whalerider from '@/public/images/paintingRealPeople/whalerider.webp';
import donut from '@/public/images/paintingRealPeople/donut.webp';
// findingYourhead
import owner from '@/public/images/findingYourhead/owner.webp';
import bliss from '@/public/images/findingYourhead/bliss.webp';
import textBurst from '@/public/icons/textBurst.svg';

// context
import { LoadingContext } from './context/loadingContext';

// hooks
import { useEffect, useState, useContext } from 'react';
import { useIsMobile } from './api/hooks/useIsMobile';

// components
import Image from 'next/image';
import LoadingDiv from './components/loadingDiv';
import Link from 'next/link';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';

export default function Home() {
  const { loading } = useContext(LoadingContext);

  const mobile = useIsMobile();

  const squareImage = {
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    minHeight: '100%',
    borderRadius: '0.3rem',
    objectFit: 'cover',
    objectPosition: '50% 20%',
  };

  const buttonStyle = {
    minWidth: '50%',
    maxWidth: '50%',
  };

  return (
    <Flex backgroundColor={'var(--chartreuse-lightest)'}>
      <Flex
        justify={'center'}
        p={'2rem'}
        align={'center'}>
        <Box
          pr={'4em'}
          maxW={'40%'}>
          {!loading && <LoadingDiv />}
          <Heading size={'2xl'}>A fakeBoat for swimming</Heading>
          <Text
            fontSize={'1.2rem'}
            mb={'1rem'}
            mt={'1rem'}>
            Unprocessed, organic, and free-range development, music, and
            paintings.
          </Text>

          <Link
            href='/'
            className={textStyles.linkBlockChartreuse}
            style={buttonStyle}>
            <div className={textStyles.buttonLabel}>View shop</div>
            <BsArrowRight />
          </Link>
        </Box>
        <Box
          minH={'100%'}
          maxW={'60%'}
          backgroundColor={'var(--chartreuse-light)'}
          borderRadius={'0.3rem'}>
          <Flex
            maxH={'20rem'}
            p={'1em 1em 0.5em 1em'}>
            <Box
              mr={'1rem'}
              borderRadius={'0.3rem'}>
              <Image
                src={donut}
                height={300}
                width={300}
                style={squareImage}
                alt='Donut painting'
              />
            </Box>
            <Box borderRadius={'0.3rem'}>
              <Image
                src={bliss}
                height={300}
                width={300}
                style={squareImage}
                alt='Bliss painting'
              />
            </Box>
          </Flex>
          <Flex
            maxH={'20rem'}
            p={'0.5em 1em 1em 1em'}>
            <Box
              mr={'1rem'}
              borderRadius={'0.3rem'}>
              <Image
                src={owner}
                height={300}
                width={300}
                style={squareImage}
                alt='Owner painting'
              />
            </Box>
            <Box borderRadius={'0.3rem'}>
              <Image
                src={whalerider}
                height={300}
                width={300}
                style={squareImage}
                alt='Whalerider painting'
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
