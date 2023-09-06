'use client';

// styles
import marqueeStyles from '../styles/(component_styles)/marquee.module.css';

// context
import { LoadingContext } from '../context/loadingContext';

// hooks
import { useContext } from 'react';

// components
import { Box, Flex, Heading } from '@chakra-ui/react';
import LoadingDiv from './loadingDiv';

export default function Marquee({ delay = 0 }) {
  const { loading } = useContext(LoadingContext);

  const delayStyle = {
    animationDelay: `${delay}s`,
  };
  const marquee = () => {
    const marqueeSpan = [];
    for (let i = 0; i < 3; i++) {
      marqueeSpan.push(
        <Flex
          mr={'25rem'}
          key={i}
          align={'flex-end'}>
          <Heading
            mr={'0.3rem'}
            size={'md'}
            color={'var(--green-teal-mid)'}>
            fakeBoat
          </Heading>
          <Box
            ml={'-0.5rem'}
            mr={'-0.2rem'}
            mb={'0.2rem'}
            minW={'1rem'}
            borderBottom={'var(--blue-light-border-2)'}
            display={'inline-block'}
            lineHeight={'inherit'}></Box>
          <LoadingDiv />
        </Flex>
      );
    }
    return marqueeSpan;
  };

  return (
    <>
      {!loading && (
        <Box
          p={'1rem 0 1.5rem 0'}
          m={'1rem 2rem'}
          borderTop={'var(--blue-light-border-2)'}
          borderBottom={'var(--blue-light-border-2)'}
          borderStyle={'dashed'}
          strokeDasharray={'8, 8'}>
          <Box
            className={marqueeStyles.yourMarquee}
            style={delayStyle}>
            {marquee()}
          </Box>
        </Box>
      )}
    </>
  );
}
