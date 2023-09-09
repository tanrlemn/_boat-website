'use client';

// hooks
import { useWindowSize } from '../../lib/hooks/useWindowSize';
import { useIsMobile } from '../../lib/hooks/useIsMobile';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// components
import { Box, Text, Heading, Image, Button, VStack } from '@chakra-ui/react';

export default function ProductCard({ product, collection }) {
  const imageRef = useRef(null);

  const router = useRouter();
  const windowSize = useWindowSize();
  const isMobile = useIsMobile();

  const [hovering, setHovering] = useState(false);

  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const slug = product.slug;
  const hasAdditionalImages = product.additional_image_urls !== null;
  const [additionalImages, setAdditionalImages] = useState(
    hasAdditionalImages ? JSON.parse(product.additional_image_urls) : null
  );
  const limitedEdition = product.limited_edition;
  const numEditions = product.num_editions;
  const numAvailable = product.num_available;
  const onSale = product.on_sale;

  useEffect(() => {
    if (hasAdditionalImages && additionalImages === null) {
      setAdditionalImages(JSON.parse(product.additional_image_urls));
    }
  }, [product, hasAdditionalImages, additionalImages]);

  useEffect(() => {
    setImageWidth(isMobile ? windowSize / 1.4 : windowSize / 3.7);
    setImageHeight(imageWidth * 1.25);
  }, [windowSize, isMobile, imageWidth]);

  useEffect(() => {}, [windowSize]);

  const formattedCollectionName = () => {
    const capatalize =
      collection.collection.charAt(0).toUpperCase() +
      collection.collection.slice(1);

    return collection.collection === 'exclusive'
      ? `${capatalize} Collection – Hug & Up`
      : `${capatalize} Collection`;
  };

  const collectionStyles = (currentCollection) => {
    let currentStyles = {};
    switch (currentCollection) {
      case 'exclusive':
        currentStyles = {
          borderBottom: 'var(--exclusive-border)',
          backgroundColor: 'var(--orange-lightest)',

          tagBorder: '1px solid var(--orange-mid)',
        };
        break;

      case 'general':
        currentStyles = {
          borderBottom: 'none',
          backgroundColor: 'transparent',
          tagBorder: 'var(--blue-light-border)',
        };
        break;

      case 'sale':
        currentStyles = {
          textDecoration: 'line-through',
        };
        break;

      default:
        currentStyles = {
          borderBottom: 'var(--collection-border)',
          backgroundColor: 'var(--pink-light)',

          tagBorder: '1px solid var(--pink-mid)',
        };
    }
    return currentStyles;
  };

  return (
    <VStack
      align={{ base: 'center', lg: 'flex-start' }}
      minH={'fit-content'}
      maxW={{ base: '100%', sm: '40%', md: '31%' }}
      mb={'3rem'}
      mr={{ base: '0', md: '2rem' }}>
      <Image
        cursor={'pointer'}
        onClick={() => {
          router.push(`/shop/${slug}`);
        }}
        src={hovering ? additionalImages[0] : product.main_image}
        width={imageWidth}
        height={imageHeight}
        minW={imageWidth}
        minH={imageHeight}
        maxW={imageWidth}
        maxH={imageHeight}
        mb={'0.8rem'}
        objectFit={'cover'}
        borderBottom={collectionStyles(collection.collection).borderBottom}
        alt={`image for ${product.title}`}
        ref={imageRef}
        onMouseOver={() => {
          setHovering(true);
        }}
        onMouseOut={() => {
          setHovering(false);
        }}
      />

      <Box minW={'100%'}>
        <Box mb={'1rem'}>
          <Heading
            size={'md'}
            mb={'0.5rem'}>
            {product.title}
          </Heading>

          <Text mb={'0.2rem'}>
            <span style={onSale ? collectionStyles('sale') : null}>
              ${product.price.toFixed(2)}
            </span>{' '}
            <span color='var(--red-dark)'>
              {onSale ? `$${product.sale_price.toFixed(2)}` : ''}
            </span>
          </Text>

          <Text fontSize={'0.8rem'}>
            {limitedEdition
              ? ` Limited edition – ${numEditions} prints (${numAvailable} remaining)`
              : ' General release – unlimited prints available'}
          </Text>
        </Box>
        <Box
          cursor={'pointer'}
          onClick={() => {
            router.push(
              `shop/collections/${collection.collection.toLowerCase()}`
            );
          }}>
          <Button
            borderRadius={'0.3rem'}
            p={'0.5rem 1rem'}
            maxW={'fit-content'}
            fontSize={'0.75rem'}
            background={collectionStyles(collection.collection).backgroundColor}
            border={collectionStyles(collection.collection).tagBorder}>
            {formattedCollectionName()}
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}
