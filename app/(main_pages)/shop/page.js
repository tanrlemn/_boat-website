'use client';

// context
import { LoadingContext } from '@/app/lib/context/loadingContext';

// hooks
import { useContext, useEffect, useState, cache } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductCard from '@/app/(main_pages)/shop/productCard';
import LoadingDiv from '@/app/_components/loadingDiv';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function Shop() {
  const { loading, setLoading } = useContext(LoadingContext);
  const searchParams = useSearchParams();

  const [storeItems, setStoreItems] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentCategoryText, setCurrentCategoryText] =
    useState('Here is a shop');

  useEffect(() => {
    const categories = {
      all: 'Shop All fakeBoat',
      prints: 'Fine Art Prints',
      originals: 'Original Paintings by fakeBoat',
      apparel: 'fakeBoat Apparel',
      music: 'fakeBoat Music',
      sale: 'Sale Items',
    };

    const category = searchParams.get('category');
    if (category === null) {
      setCurrentCategoryText('Here is a shop');
    } else {
      setCurrentCategoryText(categories[category]);
    }
    setCurrentCategory(category);

    const getStoreItems = async () => {
      const collectionsRes = await fetch(`/api/supabase/collections`);
      const productTypesRes = await fetch(`/api/supabase/productTypes`);
      const productsRes = await fetch(`/api/supabase/products`);

      const collections = await collectionsRes.json();
      const productTypes = await productTypesRes.json();
      const products = await productsRes.json();

      setStoreItems({
        collections,
        productTypes,
        products,
      });
    };

    if (storeItems === null) {
      setLoading(true);
      cache(getStoreItems());
    }

    if (storeItems !== null && filteredProducts === null) {
      const products = storeItems.products;
      const productTypes = storeItems.productTypes;

      setFilteredProducts(
        products.filter((product) => {
          if (currentCategory === 'all' || currentCategory === null)
            return true;
          if (currentCategory === 'sale') {
            return product.on_sale;
          }
          const productType = productTypes.find(
            (type) => type.product_type === currentCategory
          );

          return product.product_type_id === productType.id;
        })
      );
      setLoading(false);
    }
  }, [
    storeItems,
    setFilteredProducts,
    searchParams,
    currentCategory,
    setLoading,
    filteredProducts,
  ]);

  return (
    <>
      <VStack
        align={{ base: 'center', lg: 'flex-start' }}
        p={{ base: '5rem 1rem', lg: '3rem' }}>
        <Flex
          direction={{ base: 'column-reverse', lg: 'row' }}
          align={'center'}
          mb={'2rem'}>
          <Heading>{currentCategoryText}</Heading>

          {storeItems !== null && filteredProducts !== null && (
            <Text ml={'1rem'}>
              {filteredProducts.length === 1
                ? `${filteredProducts.length}{' '}
              product`
                : `${filteredProducts.length} products`}
            </Text>
          )}
        </Flex>
        {loading && <LoadingDiv />}

        {storeItems !== null && filteredProducts !== null && (
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'center', lg: 'flex-start' }}
            flexWrap={'wrap'}
            minW={'100%'}>
            {filteredProducts.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  product={product}
                  collection={storeItems.collections.find(
                    (collection) => collection.id === product.collection_id
                  )}
                />
              );
            })}
          </Flex>
        )}
      </VStack>
    </>
  );
}
