'use client';

// images
import { BsArrowRight } from 'react-icons/bs';
// paintingRealPeople
import whalerider from '@/public/images/paintingRealPeople/whalerider.webp';
import donut from '@/public/images/paintingRealPeople/donut.webp';
// findingYourhead
import owner from '@/public/images/findingYourhead/owner.webp';
import bliss from '@/public/images/findingYourhead/bliss.webp';

// context
import { LoadingContext } from './context/loadingContext';

// hooks
import { useContext } from 'react';

// components
import Image from 'next/image';
import LoadingDiv from './components/loadingDiv';
import Link from 'next/link';
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';

export default function Home() {
  const { loading } = useContext(LoadingContext);

  const squareImage = {
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    minHeight: '100%',
    borderRadius: '0.3rem',
    objectFit: 'cover',
    objectPosition: '50% 20%',
  };

  return (
    <Flex backgroundColor={'var(--blue-light)'}>
      <Flex
        justify={'center'}
        p={'2rem'}
        align={'center'}>
        <Box
          pr={'4em'}
          maxW={'40%'}>
          {!loading && (
            <Box
              ml={'1rem'}
              mb={'1rem'}>
              <LoadingDiv borderColor='--blue-mid' />
            </Box>
          )}
          <Heading size={'2xl'}>Fake teacher of things, imposter.</Heading>
          <Text
            fontSize={'1.2rem'}
            mb={'1rem'}
            mt={'1rem'}>
            Unprocessed, organic, and free-range development, music, and
            paintings.
          </Text>

          <Link href='/'>
            <Button
              _hover={{
                background: 'var(--blue-darkest)',
                outline: '1px solid var(--blue-darker)',
              }}
              mr={'1rem'}
              borderRadius={'0.3rem'}
              background={'var(--blue-darker)'}
              color={'#fff'}
              rightIcon={<BsArrowRight />}>
              View shop
            </Button>
            <Button
              borderRadius={'0.3rem'}
              _hover={{
                background: 'var(--blue-light)',
                outline: '1px solid var(--blue-darker)',
              }}
              color={'var(--blue-darker)'}
              variant='ghost'>
              Some memberships
            </Button>
          </Link>
        </Box>
        <Box
          minH={'100%'}
          maxW={'60%'}
          border={'1px solid var(--blue-mid)'}
          background={'var(--white-50)'}
          borderStyle={'dashed'}
          strokeDasharray={'8, 8'}
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
