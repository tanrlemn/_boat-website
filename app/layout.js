import '@/app/globals.css';

// server
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// context
import LoadingProvider from './context/loadingContext';
import { CartProvider } from './context/cartContext';
import ContactProvider from './context/contactContext';
import ChakraContextProvider from './context/chakraContextProvider';

// components
import Nav from './nav';
import Footer from './footer';
import Loading from './loading';

// font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// metadata
export const metadata = {
  title: 'fakeBoat',
  description: '...',
};

// root layout
export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase.from('profiles').select();
  const profileData = data !== null ? data[0] : null;

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ChakraContextProvider>
          <LoadingProvider>
            <ContactProvider>
              <CartProvider>
                <Nav />
                {children}
                <Footer />
              </CartProvider>
            </ContactProvider>
          </LoadingProvider>
        </ChakraContextProvider>
      </body>
    </html>
  );
}
