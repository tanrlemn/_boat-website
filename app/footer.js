'use client';

// context
import { LoadingContext } from './lib/context/loadingContext';

// hooks
import { useContext } from 'react';

// components
import { Text, Heading, Box, VStack, Flex } from '@chakra-ui/react';
import Marquee from './_components/marquee';
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
            direction={{ base: 'column', lg: 'row' }}
            p={{
              base: '5rem 1.5rem 1rem 1.5rem',
              lg: '5rem 3.5rem 1rem 3.5rem',
            }}
            justify={{ base: 'flex-start', lg: 'space-between' }}>
            <Box
              mb={{ base: '2rem', lg: '0' }}
              maxW={{ base: '100%', lg: '30%' }}
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
            <Flex
              justify={{ base: 'flex-start', lg: 'flex-end' }}
              flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
              <VStack
                mb={{ base: '2rem', lg: '0' }}
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
                mb={{ base: '2rem', lg: '0' }}
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
                mb={{ base: '2rem', lg: '0' }}
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
                mb={{ base: '2rem', lg: '0' }}
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
          <Box p={'0 2em 2em 2em'}>
            <Text fontSize={'0.7rem'}>©2023 fakeBoat, All Rights reserved</Text>
          </Box>
        </Box>
      )}
    </>
  );
}
