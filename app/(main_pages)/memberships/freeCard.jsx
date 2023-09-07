'use client';

// hooks
import { useState, useRef } from 'react';

// helpers
import { parseMembership } from '../../lib/helpers/parseMembership';

// components
import {
  Box,
  VStack,
  HStack,
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

export default function PricingCard({ membership, benefitsText }) {
  const pricingCardRef = useRef(null);

  const { title, subtitle, backgroundColor, description, checks } =
    parseMembership(membership, benefitsText);

  return (
    <HStack
      justify={'center'}
      border={'var(--dark-gray-border-20)'}
      p={'2rem'}
      m={'2rem'}
      w={'100%'}
      borderRadius={'0.3rem'}
      textAlign={'left'}
      whiteSpace={'pre-wrap'}
      ref={pricingCardRef}>
      <Box
        color={'var(--green-dark)'}
        minW={'30%'}>
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

        <Flex
          w={'100%'}
          mt={'0.5rem'}
          justify={'flex-start'}>
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
      </Box>
      <Box maxW={'45%'}>
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
    </HStack>
  );
}
