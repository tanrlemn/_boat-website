'use client';

// context
import { LoadingContext } from '@/app/lib/context/loadingContext';

// hooks
import { useEffect, useState, useContext, useRef } from 'react';

// components
import PricingCard from './pricingCard';
import FreeCard from './freeCard';
import Loading from '@/app/loading';
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Stack,
  Button,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import LoadingDiv from '@/app/_components/loadingDiv';

export default function Pricing() {
  const { loading, setLoading } = useContext(LoadingContext);

  const monthlyRef = useRef(null);
  const yearlyRef = useRef(null);

  const [showBoat, setShowBoat] = useState(true);

  const [currentMemberships, setCurrentMemberships] = useState(null);
  const [benefitsText, setBenefitsText] = useState(null);

  const [freeMembership, setFreeMembership] = useState(null);

  const [payMonthly, setPayMonthly] = useState(true);
  const [payMonthlyWidth, setPayMonthlyWidth] = useState(0);
  const [payYearlyWidth, setPayYearlyWidth] = useState(0);

  useEffect(() => {
    const getMemberships = async () => {
      const res = await fetch('/api/supabase/memberships');

      const membershipsData = await res.json();

      setCurrentMemberships(membershipsData);
      setFreeMembership(
        membershipsData.find((membership) => membership.id === 1)
      );
      if (benefitsText !== null) setLoading(false);
    };

    const getBenefitsText = async () => {
      const res = await fetch('/api/supabase/benefits');
      const benefits = await res.json();
      setBenefitsText(benefits);
      if (currentMemberships !== null) setLoading(false);
    };

    if (currentMemberships === null) {
      getMemberships();

      if (benefitsText === null) {
        getBenefitsText();
      }
    } else if (currentMemberships !== null && benefitsText !== null) {
      setLoading(false);
    }

    if (currentMemberships !== null && benefitsText !== null && !loading) {
      setTimeout(() => {
        setShowBoat(false);
      }, 500);
    }

    if (monthlyRef.current !== null && yearlyRef.current !== null) {
      setPayMonthlyWidth(monthlyRef.current.offsetWidth);
      setPayYearlyWidth(yearlyRef.current.offsetWidth);
    }
  }, [currentMemberships, setLoading, benefitsText, loading]);

  return (
    <VStack
      alignItems={'center'}
      p={{ base: '6rem 1rem 4rem 1rem', lg: '6rem 2rem 4rem 2rem' }}
      background={'var(--blue-super-light)'}>
      {loading && <Loading />}
      <VStack
        justify={'center'}
        textAlign={'center'}
        maxW={'35rem'}
        mb={'4rem'}>
        <Box mb={'2rem'}>
          <Heading
            mb={'1.5rem'}
            size={{ base: '2xl', lg: '4xl' }}>
            It can be free if you want it to be.
          </Heading>
          <Text fontSize={{ base: '1.2rem', lg: '1.5rem' }}>
            Get access to some stuff and some other stuff
          </Text>
        </Box>
        <InputGroup size='lg'>
          <Input
            placeholder='Enter your email address'
            pr={'7rem'}
            type='email'
          />
          <InputRightElement w={'7rem'}>
            <Button
              h='100%'
              w={'100%'}
              size='sm'
              background={'var(--green-teal-mid-dark)'}
              color={'var(--white)'}
              _hover={{ background: 'var(--green-teal-mid)' }}
              p={'0.5rem 1rem'}
              border={'none'}
              borderRadius={'0.3rem'}>
              Start free
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text fontSize={'0.9rem'}>
          By entering your email, you agree to receive marketing emails from
          fakeBoat.
        </Text>
      </VStack>
      <VStack h={'fit-content'}>
        <Box
          mb={'2rem'}
          p={'0.2rem'}
          background={'var(--blue-super-light)'}
          pos={'sticky'}
          top={{ base: '4rem', lg: '6rem' }}
          zIndex={1}
          borderRadius={'50px'}
          outline={'var(--green-mid-border-2)'}>
          <Flex
            align={'center'}
            onClick={() => setPayMonthly(!payMonthly)}>
            {monthlyRef.current !== null && yearlyRef.current !== null && (
              <Box
                transition={'all 0.3s ease-in-out'}
                h={'85%'}
                w={payMonthly ? payMonthlyWidth : payYearlyWidth}
                borderRadius={'50px'}
                pos={'absolute'}
                left={'0.2rem'}
                transform={
                  'translateX(' +
                  (payMonthly ? 0 : `${payMonthlyWidth}px`) +
                  ')'
                }
                background={'var(--green-dark)'}></Box>
            )}
            <Text
              fontWeight={500}
              transition={'all 0.3s ease-in-out'}
              cursor={'pointer'}
              pos={'relative'}
              color={payMonthly ? 'var(--white)' : 'var(--green-dark)'}
              p={'0.5rem 1rem'}
              ref={monthlyRef}>
              Pay Monthly
            </Text>
            <Text
              fontWeight={500}
              transition={'all 0.3s ease-in-out'}
              cursor={'pointer'}
              pos={'relative'}
              color={!payMonthly ? 'var(--white)' : 'var(--green-dark)'}
              p={'0.5rem 1rem'}
              ref={yearlyRef}>
              Pay Yearly (Save 25%)
            </Text>
          </Flex>
        </Box>
        <Flex
          justify={'space-between'}
          flexWrap={'wrap'}>
          {showBoat && (
            <Box m={'2.5rem'}>
              <LoadingDiv />
            </Box>
          )}
          {!showBoat &&
            currentMemberships !== null &&
            benefitsText !== null &&
            currentMemberships.map((membership, i) => {
              if (membership.id !== 1) {
                return (
                  <PricingCard
                    key={i}
                    membership={membership}
                    payMonthly={payMonthly}
                    index={i}
                    benefitsText={benefitsText}
                  />
                );
              }
            })}
        </Flex>
      </VStack>
      {freeMembership !== null && benefitsText !== null && (
        <FreeCard
          key={freeMembership.id}
          membership={freeMembership}
          benefitsText={benefitsText}
        />
      )}
    </VStack>
  );
}
