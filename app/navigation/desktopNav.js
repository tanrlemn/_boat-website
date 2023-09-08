'use client';

import spacingStyles from '../styles/spacing.module.css';

// icons
import { VscClose } from 'react-icons/vsc';
import { CgMenuRight } from 'react-icons/cg';
import bag from '../../public/icons/bag.svg';
import logo from '../../public/logo.svg';

// context
import { LoadingContext } from '../lib/context/loadingContext';
import { CartContext } from '../lib/context/cartContext';
import { ContactContext } from '../lib/context/contactContext';

// hooks
import { useState, useEffect, useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// components
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Loading from '../loading';
import Link from 'next/link';
import Image from 'next/image';
import RainbowLetters from '../_components/rainbowLetters';
import NavSubMenu from '../_components/navSubMenu';
import ContactBar from '../_components/contactSidebar';

export default function DesktopNav() {
  // context
  const { cart, numCartItems } = useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { showContactBar, setShowContactBar } = useContext(ContactContext);

  // hooks
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // effects
  useEffect(() => {
    setLoading(true);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [pathname, searchParams, numCartItems, cart, setLoading]);

  return (
    <>
      <Box
        minW={'100%'}
        borderBottom={'1px solid var(----blue-mid-light, #85ADC5)'}
        borderStyle={'dashed'}
        strokeDasharray={'8, 8'}
        background={'var(--orange-light-alt)'}
        pos={'fixed'}
        p={'0px 20px'}
        zIndex={100}
        h={'5rem'}>
        <Flex
          align={'center'}
          justify={'space-between'}
          w={'100%'}
          h={'100%'}>
          <Link href='/'>
            <Box mb={'0.6rem'}>
              <Flex
                justify={'center'}
                align={'flex-end'}
                gap={'0.3rem'}
                flexWrap={'nowrap'}>
                <Heading
                  size={'md'}
                  color={'var(--green-teal-mid)'}>
                  fakeBoat
                </Heading>
                <Box
                  ml={'-0.4rem'}
                  mr={'-0.4rem'}
                  mb={'0.2rem'}
                  minW={'1rem'}
                  borderBottom={'var(--blue-light-border-2)'}
                  display={'inline-block'}
                  lineHeight={'inherit'}></Box>
                <Image
                  src={logo}
                  alt={'fakeBoat logo'}
                  width={40}
                  height={40}
                />
              </Flex>
            </Box>
          </Link>
          <Flex
            fontSize={'0.9rem'}
            justify={'flex-end'}
            align={'center'}>
            <Link href='/'>
              <Text
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Home
              </Text>
            </Link>
            <Link href='/shop'>
              <Text
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Shop
              </Text>
            </Link>
            <Link href='/recents'>
              <Text
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Recents
              </Text>
            </Link>
            <Link href='/memberships'>
              <Text
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Memberships
              </Text>
            </Link>
            <Link href='/about'>
              <Text
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                About
              </Text>
            </Link>
            <Text
              cursor={'pointer'}
              _hover={{ outline: 'var(--blue-mid-border-2)' }}
              p={'0.7rem 1.4rem'}
              borderRadius={'0.3rem'}
              onClick={() => {
                setShowContactBar(true);
              }}>
              Contact
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box h={'5rem'}></Box>
      {loading && <Loading />}
    </>
  );
}
