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
import { useState, useEffect, useContext, useRef } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { VStack, useDisclosure } from '@chakra-ui/react';

// components
import {
  Box,
  Flex,
  Heading,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Loading from '../loading';
import Image from 'next/image';
import RainbowLetters from '../_components/rainbowLetters';
import NavSubMenu from '../_components/navSubMenu';
import ContactBar from '../_components/contactSidebar';

export default function MobileNav() {
  const router = useRouter();
  const btnRef = useRef();

  const { cart, numCartItems } = useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { showContactBar, setShowContactBar } = useContext(ContactContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setLoading(true);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [pathname, searchParams, numCartItems, cart, setLoading]);

  return (
    <>
      <Flex
        justify={'space-between'}
        align={'center'}
        minW={'100%'}
        borderBottom={'1px solid var(----blue-mid-light, #85ADC5)'}
        borderStyle={'dashed'}
        strokeDasharray={'8, 8'}
        background={'var(--orange-light-alt)'}
        pos={'fixed'}
        p={'0.3rem 0.7rem'}
        zIndex={100}>
        <Box
          mb={'0.6rem'}
          onClick={() => router.push('/')}>
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
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          aria-label='Open menu'
          icon={<HamburgerIcon />}
          background={'transparent'}
          color={'var(--blue-dark)'}
          border={'var(--blue-light-border)'}
        />
      </Flex>

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          borderLeft={'1px solid var(----blue-mid-light, #85ADC5)'}
          borderStyle={'dashed'}
          background={'var(--orange-light-alt)'}>
          <DrawerHeader mt={'3rem'}>
            <Box
              mb={'0.6rem'}
              onClick={() => router.push('/')}>
              <Box className={spacingStyles.blueUnderscoreWrap}>
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
              </Box>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              fontSize={'1.2rem'}
              align={'flex-start'}>
              <Text
                onClick={() => {
                  onClose();
                  router.push('/');
                }}
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Home
              </Text>

              <Text
                onClick={() => {
                  onClose();
                  router.push('/shop');
                }}
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Shop
              </Text>

              <Text
                onClick={() => {
                  onClose();
                  router.push('/recents');
                }}
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Recents
              </Text>

              <Text
                onClick={() => {
                  onClose();
                  router.push('/memberships');
                }}
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                Memberships
              </Text>

              <Text
                onClick={() => {
                  onClose();
                  router.push('/about');
                }}
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}>
                About
              </Text>

              <Text
                cursor={'pointer'}
                _hover={{ outline: 'var(--blue-mid-border-2)' }}
                p={'0.7rem 1.4rem'}
                borderRadius={'0.3rem'}
                onClick={() => {
                  onClose();
                  setShowContactBar(true);
                }}>
                Contact
              </Text>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant='outline'
              outline={'var(--orange-border)'}
              onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
