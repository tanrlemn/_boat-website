'use client';

// hooks
import { useState, useRef } from 'react';

// helpers
import { parseMembership } from '../../lib/helpers/parseMembership';

// components
import {
  Box,
  VStack,
  Heading,
  Text,
  Tag,
  List,
  ListItem,
  ListIcon,
  Flex,
  Button,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function PricingCard({
  membership,
  benefitsText,
  payMonthly,
  index,
}) {
  const pricingCardRef = useRef(null);

  const {
    title,
    subtitle,
    monthlyPrice,
    yearlyPrice,
    backgroundColor,
    description,
    checks,
  } = parseMembership(membership, benefitsText);

  return (
    <VStack
      flexGrow={1}
      justify={'space-between'}
      align={'flex-start'}
      border={'var(--dark-gray-border-20)'}
      maxW={'30%'}
      minW={'30%'}
      m={index === 2 ? '0 1rem' : 0}
      p={'3rem 1rem 2rem 1rem'}
      borderRadius={'0.3rem'}
      textAlign={'left'}
      whiteSpace={'pre-wrap'}
      background={`var(${backgroundColor})`}
      ref={pricingCardRef}>
      <Box color={'var(--green-dark)'}>
        <Heading
          mb={'1rem'}
          size={'lg'}>
          {title}
        </Heading>
        <Tag
          p={'0.2rem 0.5rem'}
          mb={'1rem'}
          background={'transparent'}
          border={'var(--green-teal-mid-border)'}>
          {subtitle}
        </Tag>

        <Flex>
          <Heading
            mb={'0.5rem'}
            size={'3xl'}>
            $
            {payMonthly
              ? monthlyPrice
              : membership.id === 4
              ? (yearlyPrice / 12).toFixed(2)
              : Math.floor(yearlyPrice / 12)}
          </Heading>
          <VStack
            fontWeight={600}
            lineHeight={1}
            justify={'center'}
            gap={0}>
            <Text>USD</Text>
            <Text>/mo</Text>
          </VStack>
        </Flex>

        <Text
          mb={'1rem'}
          fontSize={'0.9rem'}>
          {description}
        </Text>

        <List
          spacing={3}
          stylePosition={'inside'}>
          {checks.length > 0 &&
            checks.map((check, i) => {
              if (i < 3)
                return (
                  <ListItem key={i}>
                    <Flex
                      w={'100%'}
                      key={i}>
                      <ListIcon
                        as={CheckCircleIcon}
                        borderRadius={'50%'}
                        border={`var(${backgroundColor}) 1px solid`}
                        background={'var(--green-dark)'}
                        color='var(--chartreuse)'
                        boxSize={'1.4rem'}
                      />
                      <Text>{check}</Text>
                    </Flex>
                  </ListItem>
                );
            })}
        </List>
      </Box>
      <Flex
        w={'100%'}
        mt={'2rem'}
        justify={'center'}>
        <Button
          style={{ transition: 'all 0.4s ease-in-out' }}
          _hover={{
            background: 'var(--green-dark)',
            padding: '1rem 2rem',
          }}
          color={'var(--white)'}
          background={'var(--blue-mid-dark)'}>
          Sign up
        </Button>
      </Flex>
    </VStack>
  );
}
