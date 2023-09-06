import '@/app/globals.css';

// context
import LoadingProvider from './lib/context/loadingContext';
import { CartProvider } from './lib/context/cartContext';
import ContactProvider from './lib/context/contactContext';
import ChakraContextProvider from './lib/context/chakraContextProvider';

// components
import Nav from './nav';
import Footer from './footer';

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
