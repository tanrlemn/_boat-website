'use client';

import spacingStyles from './styles/spacing.module.css';

// icons
import { VscClose } from 'react-icons/vsc';
import { CgMenuRight } from 'react-icons/cg';
import bag from '../public/icons/bag.svg';
import logo from '../public/logo.svg';

// context
import { LoadingContext } from './context/loadingContext';
import { CartContext } from './context/cartContext';
import { ContactContext } from './context/contactContext';

// hooks
import { useState, useEffect, useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useIsMobile } from './api/hooks/useWindowSize';

// components
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Loading from './loading';
import Link from 'next/link';
import Image from 'next/image';
import RainbowLetters from './components/rainbowLetters';
import NavSubMenu from './components/navSubMenu';
import ContactBar from './components/contactSidebar';

export default function Nav() {
  // context
  const { cart, numCartItems } = useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { showContactBar, setShowContactBar } = useContext(ContactContext);

  // hooks
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const [openMenu, setOpenMenu] = useState(false);

  // effects
  useEffect(() => {
    setLoading(true);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [pathname, searchParams, isMobile, numCartItems, cart, setLoading]);

  return (
    <>
      <Box
        minW={'100%'}
        borderBottom={'1px solid var(----blue-mid-light, #85ADC5)'}
        borderStyle={'dashed'}
        strokeDasharray={'8, 8'}
        background={'var(--chartreuse-lightest)'}
        pos={'fixed'}
        p={'0px 20px'}
        zIndex={100}
        h={'5rem'}>
        <Flex
          align={'center'}
          justify={'space-between'}
          w={'100%'}
          h={'100%'}>
          <Link
            onClick={() => {
              setOpenMenu(false);
            }}
            href='/'>
            <Box mb={'0.6rem'}>
              <Box className={spacingStyles.blueUnderscoreWrap}>
                <Image
                  src={logo}
                  alt={'fakeBoat logo'}
                  width={40}
                  height={40}
                />
                <Box
                  ml={'-0.5rem'}
                  mr={'-0.2rem'}
                  mb={'0.2rem'}
                  minW={'1rem'}
                  borderBottom={'var(--blue-light-border-2)'}
                  display={'inline-block'}
                  lineHeight={'inherit'}></Box>

                <Heading
                  size={'md'}
                  color={'var(--green-teal-mid)'}>
                  fakeBoat
                </Heading>
              </Box>
            </Box>
          </Link>
          {(!isMobile || openMenu) && (
            <Flex
              fontSize={'0.9rem'}
              justify={'flex-end'}
              align={'center'}>
              <Link
                onClick={() => {
                  setOpenMenu(false);
                }}
                href='/'>
                <Text
                  cursor={'pointer'}
                  _hover={{ outline: 'var(--blue-mid-border-2)' }}
                  p={'0.7rem 1.4rem'}
                  borderRadius={'0.3rem'}>
                  Home
                </Text>
              </Link>
              <Link
                onClick={() => {
                  setOpenMenu(false);
                }}
                href='/shop'>
                <Text
                  cursor={'pointer'}
                  _hover={{ outline: 'var(--blue-mid-border-2)' }}
                  p={'0.7rem 1.4rem'}
                  borderRadius={'0.3rem'}>
                  Shop
                </Text>
              </Link>
              <Link
                onClick={() => {
                  setOpenMenu(false);
                }}
                href='/recents'>
                <Text
                  cursor={'pointer'}
                  _hover={{ outline: 'var(--blue-mid-border-2)' }}
                  p={'0.7rem 1.4rem'}
                  borderRadius={'0.3rem'}>
                  Recents
                </Text>
              </Link>
              <Link
                onClick={() => {
                  setOpenMenu(false);
                }}
                href='/memberships'>
                <Text
                  cursor={'pointer'}
                  _hover={{ outline: 'var(--blue-mid-border-2)' }}
                  p={'0.7rem 1.4rem'}
                  borderRadius={'0.3rem'}>
                  Memberships
                </Text>
              </Link>
              <Link
                onClick={() => {
                  setOpenMenu(false);
                }}
                href='/about'>
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
                  setOpenMenu(false);
                  setShowContactBar(true);
                }}>
                Contact
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
      <Box h={'5rem'}></Box>
      {loading && <Loading />}
    </>
  );
}
