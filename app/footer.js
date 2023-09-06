'use client';

import navStyles from './styles/nav.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';
import ctaStyles from './styles/(component_styles)/cta.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';

// context
import { LoadingContext } from './lib/context/loadingContext';

// hooks
import { useContext } from 'react';

// components
import { Text, Heading, Box, VStack, Flex } from '@chakra-ui/react';
import Marquee from './components/marquee';
import Link from 'next/link';

export default function Footer({ showContactBar, setShowContactBar }) {
  const { loading } = useContext(LoadingContext);

  return (
    <>
      {!loading && (
        <Box
          background={'var(--blue-lightest)'}
          color={'var(--blue-dark)'}
          borderTop={'var(--orange-light-border)'}
          minW={'100%'}>
          <Flex
            p={'5rem 3.5rem 1rem 3.5rem'}
            justify={'space-between'}>
            <Box
              maxW={'30%'}
              color={'var(--blue-dark)'}>
              <Heading
                mb={'0.3rem'}
                size={'lg'}>
                fakeBoat
              </Heading>

              <Text>
                fakeBoat is basically just one guy who does a lot of stuff to
                try to make money.
              </Text>
            </Box>
            <Flex justify={'flex-end'}>
              <VStack
                maxW={'fit-content'}
                mr={'5rem'}
                textAlign={'left'}
                align={'flex-start'}>
                <Heading size={'md'}>The Artist</Heading>
                <VStack
                  textAlign={'left'}
                  align={'flex-start'}>
                  <Link href='/about'>
                    <Text _hover={{ background: 'var(--green-light)' }}>
                      About
                    </Text>
                  </Link>
                  <Link href='/memberships'>
                    <Text _hover={{ background: 'var(--green-light)' }}>
                      Memberships
                    </Text>
                  </Link>
                </VStack>
              </VStack>
              <VStack
                maxW={'fit-content'}
                mr={'5rem'}
                textAlign={'left'}
                align={'flex-start'}>
                <Heading size={'md'}>Shop</Heading>
                <VStack
                  textAlign={'left'}
                  align={'flex-start'}>
                  <Link href='/shop?category=prints'>
                    <Text _hover={{ background: 'var(--green-light)' }}>
                      Prints
                    </Text>
                  </Link>
                  <Link href='/shop?category=originals'>
                    <Text _hover={{ background: 'var(--green-light)' }}>
                      Originals
                    </Text>
                  </Link>
                </VStack>
              </VStack>
              <VStack
                maxW={'fit-content'}
                mr={'5rem'}
                textAlign={'left'}
                align={'flex-start'}>
                <Heading size={'md'}>
                  <Text _hover={{ background: 'var(--green-light)' }}>
                    Works
                  </Text>
                </Heading>
                <VStack
                  textAlign={'left'}
                  align={'flex-start'}>
                  <Link href='/recents'>
                    <Text _hover={{ background: 'var(--green-light)' }}>
                      Recents
                    </Text>
                  </Link>
                  <Link href='/music'>
                    <Text _hover={{ background: 'var(--green-light)' }}>
                      Music
                    </Text>
                  </Link>
                </VStack>
              </VStack>
              <VStack
                maxW={'fit-content'}
                textAlign={'left'}
                align={'flex-start'}>
                <Heading size={'md'}>Support</Heading>
                <VStack
                  textAlign={'left'}
                  align={'flex-start'}>
                  <Text
                    cursor={'pointer'}
                    _hover={{ background: 'var(--green-light)' }}
                    onClick={() => {
                      setShowContactBar(true);
                    }}>
                    Contact
                  </Text>
                  <Link href='/support/faqs'>
                    <Text _hover={{ background: 'var(--green-light)' }}>
                      FAQs
                    </Text>
                  </Link>
                </VStack>
              </VStack>
            </Flex>
          </Flex>
          <Marquee />
          <Box className={navStyles.footerLower}>
            <Text fontSize={'0.7rem'}>©2023 fakeBoat, All Rights reserved</Text>
          </Box>
        </Box>
      )}
    </>
  );
}
