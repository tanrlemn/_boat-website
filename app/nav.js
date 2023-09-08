'use client';

// context
import { LoadingContext } from './lib/context/loadingContext';
import { CartContext } from './lib/context/cartContext';
import { ContactContext } from './lib/context/contactContext';

// hooks
import { useEffect, useContext, useState } from 'react';
import { useIsMobile } from './lib/hooks/useIsMobile';

// components
import DesktopNav from './navigation/desktopNav';
import MobileNav from './navigation/mobileNav';
import Loading from './loading';

export default function Nav() {
  // context
  const { cart, numCartItems } = useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { showContactBar, setShowContactBar } = useContext(ContactContext);

  const [isClient, setIsClient] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setLoading(true);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [cart, setLoading]);

  return (
    <>
      {isClient ? (
        <>
          {isMobile ? (
            <MobileNav
              cart={cart}
              numCartItems={numCartItems}
            />
          ) : (
            <DesktopNav
              cart={cart}
              numCartItems={numCartItems}
            />
          )}
        </>
      ) : (
        <></>
      )}
      {loading && <Loading />}
    </>
  );
}
