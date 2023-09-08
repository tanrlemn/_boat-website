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
import { LoadingContext } from './lib/context/loadingContext';

// hooks
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useIsMobile } from './lib/hooks/useIsMobile';

// components
import Image from 'next/image';
import LoadingDiv from './_components/loadingDiv';
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';

export default function Home() {
  const { loading } = useContext(LoadingContext);
  const router = useRouter();

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
    <Flex
      backgroundColor={'var(--orange-lightest)'}
      pt={{ base: '4rem', lg: 0 }}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify={{ base: 'flex-start', lg: 'center' }}
        p={'2rem'}
        align={'center'}>
        <Box
          pr={{ base: '0', lg: '4rem' }}
          maxW={{ base: '100%', lg: '40%' }}>
          {!loading && (
            <Box
              ml={'1rem'}
              mb={'1rem'}>
              <LoadingDiv borderColor='--blue-mid' />
            </Box>
          )}
          <Heading size={{ base: 'xl', lg: '2xl' }}>
            Fake teacher of things, imposter.
          </Heading>
          <Text
            fontSize={'1.2rem'}
            mb={'1rem'}
            mt={'1rem'}>
            Unprocessed, organic, and free-range development, music, and
            paintings.
          </Text>

          <Button
            onClick={() => router.push('/memberships')}
            _hover={{
              outline: '1px solid var(--blue-darker)',
            }}
            mr={'1rem'}
            marginBlock={'1rem'}
            borderRadius={'0.3rem'}
            background={'var(--blue-darker)'}
            color={'#fff'}
            rightIcon={<BsArrowRight />}>
            Some memberships
          </Button>

          <Button
            onClick={() => router.push('/about')}
            borderRadius={'0.3rem'}
            _hover={{
              background: 'var(--orange-lightest)',
              outline: '1px solid var(--blue-darker)',
            }}
            variant={{ base: 'link', lg: 'ghost' }}
            color={'var(--blue-darker)'}>
            Learn more
          </Button>
        </Box>
        <Box
          mt={{ base: '2rem', lg: '0' }}
          minH={{ base: 'unset', lg: '100%' }}
          maxW={{ base: '100%', lg: '60%' }}
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
