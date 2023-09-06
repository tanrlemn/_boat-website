import '@/app/globals.css';

// context
import LoadingProvider from './context/loadingContext';
import { CartProvider } from './context/cartContext';
import ContactProvider from './context/contactContext';
import ChakraContextProvider from './context/chakraContextProvider';

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
