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
  Stack,
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
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      justify={'center'}
      align={{ base: 'center', lg: 'flex-start' }}
      border={'var(--dark-gray-border-20)'}
      p={'2rem'}
      m={{ base: '0', md: '2rem' }}
      w={'100%'}
      borderRadius={'0.3rem'}
      textAlign={'left'}
      whiteSpace={'pre-wrap'}
      ref={pricingCardRef}>
      <Flex
        direction={'column'}
        align={{ base: 'center', lg: 'flex-start' }}
        color={'var(--green-dark)'}
        minW={{ base: '100%', lg: '30%' }}>
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
          justify={{ base: 'center', lg: 'flex-start' }}>
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
      </Flex>
      <Box
        maxW={{ base: '100%', lg: '45%' }}
        mt={{ base: '1rem', lg: 0 }}>
        <Text
          textAlign={{ base: 'center', lg: 'left' }}
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
                        mt={'0.1rem'}
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
    </Stack>
  );
}
