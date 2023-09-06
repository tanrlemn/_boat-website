'use client';

// hooks
import { createContext, useState } from 'react';

export const ContactContext = createContext({
  showContactBar: false,
  setShowContactBar: () => {},
});

export default function ContactProvider({ children }) {
  const [showContactBar, setShowContactBar] = useState(false);

  return (
    <ContactContext.Provider value={{ showContactBar, setShowContactBar }}>
      {children}
    </ContactContext.Provider>
  );
}
